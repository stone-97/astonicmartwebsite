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

const listFile = path.join(
  __dirname,
  'unmapped-images.txt'
);

const mappingFile = path.join(
  __dirname,
  'cloudinary-image-mapping.json'
);

const CONCURRENCY = 5;

function loadMapping() {
  return JSON.parse(
    fs.readFileSync(mappingFile, 'utf8')
  );
}

function getExistingImages() {

  const content =
    fs.readFileSync(
      listFile,
      'utf8'
    );

  const blocks =
    content.split(/\r?\n\r?\n/);

  const results = [];

  for (const block of blocks) {

    const referenceMatch =
      block.match(
        /REFERENCE: (.+)/
      );

    const existsMatch =
      block.match(
        /LOCAL FILE EXISTS: YES/
      );

    if (
      referenceMatch &&
      existsMatch
    ) {
      results.push(
        referenceMatch[1].trim()
      );
    }
  }

  return [
    ...new Set(results)
  ];
}

async function uploadImage(
  relativePath,
  mapping
) {

  const localPath = path.join(
    projectRoot,
    'src',
    relativePath.replace(
      /\//g,
      path.sep
    )
  );

  console.log(
    `\nUploading: ${relativePath}`
  );

  if (!fs.existsSync(localPath)) {

    console.log(
      'FILE NO LONGER EXISTS'
    );

    return 'missing';
  }

  const imageRoot =
    path.join(
      projectRoot,
      'src',
      'assets',
      'img'
    );

  const relativeFromImages =
    path.relative(
      imageRoot,
      localPath
    );

  const folder =
    path.dirname(
      relativeFromImages
    );

  const fileName =
    path.basename(
      relativeFromImages
    );

  const parsed =
    path.parse(fileName);

const publicName =
  parsed.name
    .replace(/&/g, 'and')
    .replace(/\s+/g, '_')
    .replace(/[()]/g, '')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .replace(/_+/g, '_')
    .replace(/-+/g, '-');

 const normalizedFolder =
  folder === '.'
    ? ''
    : folder
        .split(path.sep)
        .join('/');

const cloudinaryFolder =
  normalizedFolder
    ? `Astonic-Mart/Products/${normalizedFolder}`
    : 'Astonic-Mart/Products';

  try {

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

    return 'uploaded';

  } catch (error) {

    console.log(
      `FAILED: ${error.message || error}`
    );

    return 'failed';
  }
}

async function main() {

  console.log(
    '======================================'
  );

  console.log(
    'ASTONIC MART UNMAPPED IMAGE UPLOAD'
  );

  console.log(
    '======================================'
  );

  const mapping =
    loadMapping();

  const images =
    getExistingImages();

  const remaining =
    images.filter(
      image => !mapping[image]
    );

  console.log(
    `Existing unmapped images: ${images.length}`
  );

  console.log(
    `Still needing upload: ${remaining.length}`
  );

  let uploaded = 0;
  let failed = 0;
  let missing = 0;

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

    console.log(
      `\nProcessing ${i + 1}-${Math.min(
        i + CONCURRENCY,
        remaining.length
      )} of ${remaining.length}`
    );

    const results =
      await Promise.all(
        batch.map(
          image =>
            uploadImage(
              image,
              mapping
            )
        )
      );

    for (const result of results) {

      if (result === 'uploaded') {
        uploaded++;
      }

      if (result === 'failed') {
        failed++;
      }

      if (result === 'missing') {
        missing++;
      }
    }

    fs.writeFileSync(
      mappingFile,
      JSON.stringify(
        mapping,
        null,
        2
      ),
      'utf8'
    );

    console.log(
      'Mapping saved.'
    );
  }

  console.log(
    '\n======================================'
  );

  console.log(
    'UPLOAD RESULT'
  );

  console.log(
    '======================================'
  );

  console.log(
    `Uploaded : ${uploaded}`
  );

  console.log(
    `Failed   : ${failed}`
  );

  console.log(
    `Missing  : ${missing}`
  );

  console.log(
    `Total mapping entries: ${
      Object.keys(mapping).length
    }`
  );

  console.log(
    '\nNo Angular data files were changed.'
  );

  console.log(
    'No local images were deleted.'
  );
}

main().catch(error => {

  console.error(
    '\nFATAL ERROR:'
  );

  console.error(error);

});