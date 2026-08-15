const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, '..', 'src', 'app', 'core', 'data');
const mappingFile = path.join(__dirname, 'cloudinary-image-mapping.json');
const outputFile = path.join(__dirname, 'missing-product-images-report.txt');

const mapping = JSON.parse(fs.readFileSync(mappingFile, 'utf8'));

const dataFiles = fs.readdirSync(dataFolder)
  .filter(file =>
    file.endsWith('.ts') &&
    !file.endsWith('.backup.ts') &&
    !file.endsWith('.corrupted.ts')
  );

const missing = new Set(
  fs.readFileSync(
    path.join(__dirname, 'missing-image-references.txt'),
    'utf8'
  )
  .split(/\r?\n/)
  .map(line => line.replace(/^REFERENCE:\s*/, '').trim())
  .filter(Boolean)
);

let report = [];
let productCount = 0;

for (const file of dataFiles) {
  const filePath = path.join(dataFolder, file);
  const content = fs.readFileSync(filePath, 'utf8');

  const productBlocks = content.split(/\n\s*\{\s*\n/);

  for (const block of productBlocks) {
    const productNameMatch = block.match(/name:\s*['"`]([^'"`]+)['"`]/);

    if (!productNameMatch) {
      continue;
    }

    const productName = productNameMatch[1];

    const imageMatches = [
      ...block.matchAll(/['"`](assets\/img\/[^'"`]+)['"`]/g)
    ].map(match => match[1]);

    const missingImages = imageMatches.filter(image => missing.has(image));

    if (missingImages.length === 0) {
      continue;
    }

    const validImages = imageMatches.filter(image => mapping[image]);

    productCount++;

    report.push(`========================================`);
    report.push(`FILE: ${file}`);
    report.push(`PRODUCT: ${productName}`);
    report.push(`MISSING IMAGES: ${missingImages.length}`);
    report.push(`VALID CLOUDINARY IMAGES: ${validImages.length}`);
    report.push(`----------------------------------------`);

    for (const image of missingImages) {
      report.push(`MISSING: ${image}`);
    }

    for (const image of validImages) {
      report.push(`VALID: ${mapping[image]}`);
    }

    report.push('');
  }
}

report.unshift(
  'ASTONIC MART MISSING PRODUCT IMAGE REPORT',
  '=========================================',
  `Products affected: ${productCount}`,
  ''
);

fs.writeFileSync(outputFile, report.join('\n'), 'utf8');

console.log('======================================');
console.log('MISSING PRODUCT IMAGE REPORT');
console.log('======================================');
console.log(`Products affected: ${productCount}`);
console.log(`Report saved to: ${outputFile}`);