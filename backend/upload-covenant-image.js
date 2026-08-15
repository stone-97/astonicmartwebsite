const path = require('path');
const fs = require('fs');
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

const localPath = path.join(
  projectRoot,
  'compressed images',
  'torque wrenches',
  'Covenant 3 4 Inches Torque Wrench 100–500nm.png'
);

const mappingFile = path.join(
  __dirname,
  'cloudinary-image-mapping.json'
);

const mappingKey =
  'assets/img/torque wrenches/Covenant 3 4 inches Torque Wrench 100–500Nm.png';

async function main() {

  console.log('======================================');
  console.log('ASTONIC MART COVENANT IMAGE UPLOAD');
  console.log('======================================');

  console.log(`\nLocal file:`);
  console.log(localPath);

  if (!fs.existsSync(localPath)) {
    console.error('\nERROR: Compressed image was not found.');
    process.exit(1);
  }

  const mapping =
    JSON.parse(
      fs.readFileSync(mappingFile, 'utf8')
    );

  console.log('\nUploading compressed image...');

  const result =
    await cloudinary.uploader.upload(
      localPath,
      {
        folder: 'Astonic-Mart/Products/torque wrenches',
        public_id: 'Covenant_3_4_inches_Torque_Wrench_100-500nm',
        overwrite: true,
        resource_type: 'image'
      }
    );

  console.log('\nUPLOADED SUCCESSFULLY');
  console.log(result.secure_url);

  mapping[mappingKey] = result.secure_url;

  fs.writeFileSync(
    mappingFile,
    JSON.stringify(mapping, null, 2),
    'utf8'
  );

  console.log('\nMapping updated successfully.');
  console.log(`Key: ${mappingKey}`);
  console.log(`URL: ${result.secure_url}`);

  console.log('\n======================================');
  console.log('DONE');
  console.log('======================================');
}

main().catch(error => {
  console.error('\nUPLOAD FAILED:');
  console.error(error.message || error);
  process.exit(1);
});