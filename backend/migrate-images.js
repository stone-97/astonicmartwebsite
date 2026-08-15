const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;

require('dotenv').config({
  path: path.join(__dirname, '.env')
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const projectRoot = path.join(__dirname, '..');
const imageRoot = path.join(projectRoot, 'src', 'assets', 'img');

const referencesFile = path.join(
  __dirname,
  'image-references.txt'
);

const mappingFile = path.join(
  __dirname,
  'cloudinary-image-mapping.json'
);

// Number of images uploaded simultaneously
const CONCURRENCY = 5;

function extractImagePaths() {
  const content = fs
    .readFileSync(referencesFile, 'utf8')
    .replace(/^\uFEFF/, '');

  const lines = content.split(/\r?\n/);

  const results = [];

  for (const line of lines) {
    const marker = 'assets/img/';
    const start = line.indexOf(marker);

    if (start === -1) {
      continue;
    }

    let imagePath = line.substring(start);

    const quote = imagePath.indexOf("'");

    if (quote !== -1) {
      imagePath = imagePath.substring(0, quote);
    }

    imagePath = imagePath
      .replace(/\\/g, '/')
      .trim();

    if (imagePath.startsWith('assets/img/')) {
      results.push(imagePath);
    }
  }

  return [...new Set(results)];
}

function loadMapping() {
  if (!fs.existsSync(mappingFile)) {
    return {};
  }

  try {
    return JSON.parse(
      fs.readFileSync(mappingFile, 'utf8')
    );
  } catch (error) {
    console.log('WARNING: Could not read existing mapping.');
    console.log('Starting with empty mapping.');
    return {};
  }
}

function saveMapping(mapping) {
  fs.writeFileSync(
    mappingFile,
    JSON.stringify(mapping, null, 2),
    'utf8'
  );
}

async function uploadImage(relativePath, mapping) {

  const localPath = path.join(
    projectRoot,
    'src',
    relativePath.replace(/\//g, path.sep)
  );

  console.log(`\nChecking: ${relativePath}`);

  if (!fs.existsSync(localPath)) {
    console.log('MISSING LOCAL FILE');

    return {
      status: 'missing'
    };
  }

  const relativeFromImages = path.relative(
    imageRoot,
    localPath
  );

  const folder = path.dirname(
    relativeFromImages
  );

  const fileName = path.basename(
    relativeFromImages
  );

  const parsed = path.parse(fileName);

  const publicName = parsed.name
    .replace(/\s+/g, '_')
    .replace(/[()]/g, '')
    .replace(/-+/g, '-');

  const cloudinaryFolder =
    `Astonic-Mart/Products/${folder
      .split(path.sep)
      .join('/')}`;

  try {

    console.log(`Uploading: ${fileName}`);

    const result =
      await cloudinary.uploader.upload(
        localPath,
        {
          folder: cloudinaryFolder,
          public_id: publicName,
          overwrite: true,
          resource_type: 'image'
        }
      );

    mapping[relativePath] =
      result.secure_url;

    console.log(
      `UPLOADED: ${result.secure_url}`
    );

    return {
      status: 'uploaded'
    };

  } catch (error) {

    console.log('UPLOAD FAILED');

    console.log(
      error.message || error
    );

    return {
      status: 'failed'
    };
  }
}

async function main() {

  console.log('======================================');
  console.log('ASTONIC MART CLOUDINARY MIGRATION');
  console.log('======================================');

  if (!fs.existsSync(referencesFile)) {
    console.log(
      'ERROR: image-references.txt not found.'
    );
    return;
  }

  const imagePaths = extractImagePaths();

  console.log(
    `Unique image references: ${imagePaths.length}`
  );

  if (imagePaths.length === 0) {
    console.log(
      'ERROR: No image references were found.'
    );
    return;
  }

  const mapping = loadMapping();

  const alreadyUploaded =
    imagePaths.filter(
      imagePath => mapping[imagePath]
    );

  const remaining =
    imagePaths.filter(
      imagePath => !mapping[imagePath]
    );

  console.log(
    `Already uploaded: ${alreadyUploaded.length}`
  );

  console.log(
    `Remaining: ${remaining.length}`
  );

  console.log(
    `Concurrent uploads: ${CONCURRENCY}`
  );

  let found = 0;
  let missing = 0;
  let uploaded = 0;
  let failed = 0;

  for (
    let i = 0;
    i < remaining.length;
    i += CONCURRENCY
  ) {

    const batch =
      remaining.slice(
        i,
        i + CONCURRENCY
      );

    console.log('\n--------------------------------------');

    console.log(
      `Processing ${i + 1} - ${Math.min(
        i + CONCURRENCY,
        remaining.length
      )} of ${remaining.length}`
    );

    console.log('--------------------------------------');

    const results =
      await Promise.all(
        batch.map(
          imagePath =>
            uploadImage(
              imagePath,
              mapping
            )
        )
      );

    for (const result of results) {

      if (result.status === 'uploaded') {
        uploaded++;
        found++;
      }

      if (result.status === 'missing') {
        missing++;
      }

      if (result.status === 'failed') {
        failed++;
      }
    }

    // Save after every batch
    saveMapping(mapping);

    console.log(
      `Progress: ${i + batch.length}/${remaining.length}`
    );

    console.log(
      `Uploaded this run: ${uploaded}`
    );

    console.log(
      `Failed this run: ${failed}`
    );

    console.log(
      `Mapping saved.`
    );
  }

  saveMapping(mapping);

  console.log('\n======================================');
  console.log('CLOUDINARY MIGRATION RESULT');
  console.log('======================================');

  console.log(
    `Referenced images : ${imagePaths.length}`
  );

  console.log(
    `Already uploaded  : ${alreadyUploaded.length}`
  );

  console.log(
    `Uploaded this run : ${uploaded}`
  );

  console.log(
    `Missing locally   : ${missing}`
  );

  console.log(
    `Failed            : ${failed}`
  );

  console.log(
    `Total in mapping  : ${Object.keys(mapping).length}`
  );

  console.log(
    `\nMapping saved to: ${mappingFile}`
  );

  console.log('\nIMPORTANT:');

  console.log(
    'No Angular data files were changed.'
  );

  console.log(
    'No local images were deleted.'
  );
}

main().catch(error => {

  console.error('\nFATAL ERROR:');
  console.error(error);

});