const fs = require('fs');
const path = require('path');

const dataFile = path.join(
  __dirname,
  '..',
  'src',
  'app',
  'core',
  'data',
  'electrical_equipments.data.ts'
);

const mappingFile = path.join(
  __dirname,
  'air-compressors-cloudinary.json'
);

const source = fs.readFileSync(dataFile, 'utf8');

const mapping = JSON.parse(
  fs.readFileSync(mappingFile, 'utf8')
);

let updated = 0;
let missing = 0;

const result = source.replace(
  /'assets\/img\/air compressors\/([^']+)'/g,
  (fullMatch, fileName) => {

    if (mapping[fileName]) {

      updated++;

      console.log(`REPLACE: ${fileName}`);
      console.log(`→ ${mapping[fileName]}`);

      return `'${mapping[fileName]}'`;
    }

    missing++;

    console.log(`MISSING: ${fileName}`);

    return fullMatch;
  }
);

console.log('\n==============================');
console.log('REPLACEMENT CHECK');
console.log('==============================');

console.log(`Images replaced: ${updated}`);
console.log(`Images not found: ${missing}`);

if (missing > 0) {

  console.log('\nSTOP: Some images could not be mapped.');

  process.exit(1);
}

fs.writeFileSync(dataFile, result, 'utf8');

console.log('\nSUCCESS: Air-compressor image paths replaced.');