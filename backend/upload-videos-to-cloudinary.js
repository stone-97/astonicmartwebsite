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

const videoRoot = 'C:\\projects\\astonic-videos';

const mappingFile = path.join(
  __dirname,
  'cloudinary-video-mapping.json'
);

function loadMapping() {
  if (!fs.existsSync(mappingFile)) {
    return {};
  }

  return JSON.parse(
    fs.readFileSync(mappingFile, 'utf8')
  );
}

function getVideoFiles() {
  return fs.readdirSync(videoRoot)
    .filter(file =>
      /\.(mp4|webm|mov|m4v)$/i.test(file)
    );
}

function createPublicId(fileName) {
  return path.parse(fileName).name
    .replace(/&/g, 'and')
    .replace(/\s+/g, '_')
    .replace(/[()]/g, '')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .replace(/_+/g, '_')
    .replace(/-+/g, '-');
}

async function uploadVideo(fileName, mapping) {

  const localPath = path.join(
    videoRoot,
    fileName
  );

  console.log(`\nUploading video: ${fileName}`);

  if (!fs.existsSync(localPath)) {
    console.log('FILE DOES NOT EXIST');
    return 'missing';
  }

  const publicName =
    createPublicId(fileName);

  try {

    const result =
      await cloudinary.uploader.upload(
        localPath,
        {
          folder: 'Astonic-Mart/Videos',
          public_id: publicName,
          overwrite: true,
          resource_type: 'video'
        }
      );

    mapping[fileName] =
      result.secure_url;

    console.log(
      `UPLOADED: ${result.secure_url}`
    );

    return 'uploaded';
} catch (error) {

    console.log('FAILED TO UPLOAD VIDEO');

    console.log(
      JSON.stringify(
        error,
        null,
        2
      )
    );

    return 'failed';
  }
}

async function main() {

  console.log(
    '======================================'
  );

  console.log(
    'ASTONIC MART CLOUDINARY VIDEO UPLOAD'
  );

  console.log(
    '======================================'
  );

  console.log(
    `Video folder: ${videoRoot}`
  );

  const mapping =
    loadMapping();

  const videos =
    getVideoFiles();

  console.log(
    `\nVideos found: ${videos.length}`
  );

  let uploaded = 0;
  let failed = 0;
  let missing = 0;
  let skipped = 0;

  for (const video of videos) {

    if (mapping[video]) {

      console.log(
        `\nSKIPPING ALREADY MAPPED: ${video}`
      );

      skipped++;
      continue;
    }

    const result =
      await uploadVideo(
        video,
        mapping
      );

    if (result === 'uploaded') {
      uploaded++;
    }

    if (result === 'failed') {
      failed++;
    }

    if (result === 'missing') {
      missing++;
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
      'Video mapping saved.'
    );
  }

  console.log(
    '\n======================================'
  );

  console.log(
    'VIDEO UPLOAD RESULT'
  );

  console.log(
    '======================================'
  );

  console.log(
    `Uploaded : ${uploaded}`
  );

  console.log(
    `Skipped  : ${skipped}`
  );

  console.log(
    `Failed   : ${failed}`
  );

  console.log(
    `Missing  : ${missing}`
  );

  console.log(
    `Mappings : ${Object.keys(mapping).length}`
  );

  console.log(
    '\nNo Angular data files were changed.'
  );

  console.log(
    'No local videos were deleted.'
  );
}

main().catch(error => {

  console.error(
    '\nFATAL ERROR:'
  );

  console.error(error);

});