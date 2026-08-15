require('dotenv').config({ path: './backend/.env' });

const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const imageFolder = path.join(
  __dirname,
  '..',
  'src',
  'assets',
  'img',
  'air compressors'
);

const outputFile = path.join(
  __dirname,
  'air-compressors-cloudinary.json'
);

function normalizeName(name) {
  return name
    .replace(/\.(jpg|jpeg|png|webp)$/i, '')
    .replace(/\s+/g, '_')
    .replace(/[()]/g, '')
    .replace(/_-+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

async function createMapping() {

  const files = fs.readdirSync(imageFolder);

  const localImages = files.filter(file =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  const result = await cloudinary.api.resources({
    type: 'upload',
    prefix: 'Astonic-Mart/Products/air compressors/',
    max_results: 500
  });

  const cloudinaryImages = result.resources;

  const mapping = {};
  const missing = [];

  for (const localFile of localImages) {

    const localName = normalizeName(localFile);

    const match = cloudinaryImages.find(resource => {

      const cloudName = normalizeName(
        path.basename(resource.public_id)
      );

      return cloudName === localName;
    });

    if (match) {

      mapping[localFile] = match.secure_url;

      console.log(`MATCHED: ${localFile}`);
      console.log(`→ ${match.secure_url}\n`);

    } else {

      missing.push(localFile);

      console.log(`MISSING: ${localFile}\n`);
    }
  }

  fs.writeFileSync(
    outputFile,
    JSON.stringify(mapping, null, 2),
    'utf8'
  );

  console.log('==============================');
  console.log('FINAL MAPPING RESULT');
  console.log('==============================');
  console.log(`Local images: ${localImages.length}`);
  console.log(`Cloudinary images: ${cloudinaryImages.length}`);
  console.log(`Matched: ${Object.keys(mapping).length}`);
  console.log(`Missing: ${missing.length}`);

  if (missing.length > 0) {

    console.log('\nMISSING IMAGES:');

    missing.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });

  } else {

    console.log('\nSUCCESS: ALL IMAGES MATCHED!');
  }

  console.log(`\nSaved to: ${outputFile}`);
}

createMapping();