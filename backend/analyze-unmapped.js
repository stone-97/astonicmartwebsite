const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const dataRoot = path.join(
  projectRoot,
  'src',
  'app',
  'core',
  'data'
);

const mappingFile = path.join(
  __dirname,
  'cloudinary-image-mapping.json'
);

const imageExtensions = [
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif',
  '.avif'
];

const videoExtensions = [
  '.mp4',
  '.webm',
  '.mov',
  '.avi',
  '.m4v'
];

function loadMapping() {
  return JSON.parse(
    fs.readFileSync(mappingFile, 'utf8')
  );
}

function findImageReferences(content) {
  const matches = content.match(
    /assets\/img\/[^'"`]+/g
  );

  if (!matches) {
    return [];
  }

  return matches.map(
    value => value.trim()
  );
}

function getExtension(filePath) {
  return path.extname(filePath).toLowerCase();
}

function main() {

  console.log('======================================');
  console.log('ASTONIC MART UNMAPPED FILE ANALYSIS');
  console.log('======================================');

  const mapping = loadMapping();

  const files = fs
    .readdirSync(dataRoot)
    .filter(file =>
      file.endsWith('.data.ts')
    );

  const unmapped = new Set();

  for (const file of files) {

    const filePath = path.join(
      dataRoot,
      file
    );

    const content =
      fs.readFileSync(
        filePath,
        'utf8'
      );

    const references =
      findImageReferences(content);

    for (const reference of references) {

      if (!mapping[reference]) {
        unmapped.add(reference);
      }
    }
  }

  const missingImages = [];
  const videos = [];
  const otherFiles = [];

  for (const reference of unmapped) {

    const extension =
      getExtension(reference);

    const localPath = path.join(
      projectRoot,
      'src',
      reference.replace(/\//g, path.sep)
    );

    const exists =
      fs.existsSync(localPath);

    const item = {
      reference,
      localPath,
      exists
    };

    if (videoExtensions.includes(extension)) {

      videos.push(item);

    } else if (
      imageExtensions.includes(extension)
    ) {

      missingImages.push(item);

    } else {

      otherFiles.push(item);
    }
  }

  function writeList(fileName, list) {

    const output = list.map(item => {

      return [
        `REFERENCE: ${item.reference}`,
        `LOCAL FILE EXISTS: ${item.exists ? 'YES' : 'NO'}`,
        `LOCAL PATH: ${item.localPath}`,
        ''
      ].join('\n');

    }).join('\n');

    fs.writeFileSync(
      path.join(__dirname, fileName),
      output,
      'utf8'
    );
  }

  writeList(
    'unmapped-images.txt',
    missingImages
  );

  writeList(
    'unmapped-videos.txt',
    videos
  );

  writeList(
    'unmapped-other.txt',
    otherFiles
  );

  console.log(
    `\nUnique unmapped references: ${unmapped.size}`
  );

  console.log(
    `Image references: ${missingImages.length}`
  );

  console.log(
    `Video references: ${videos.length}`
  );

  console.log(
    `Other references: ${otherFiles.length}`
  );

  console.log('\nFiles created:');

  console.log(
    'backend\\unmapped-images.txt'
  );

  console.log(
    'backend\\unmapped-videos.txt'
  );

  console.log(
    'backend\\unmapped-other.txt'
  );

  console.log('\nNO Angular data files were changed.');
  console.log('NO files were uploaded.');
  console.log('NO local files were deleted.');
}

main();