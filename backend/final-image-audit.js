const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, '..', 'src', 'app', 'core', 'data');
const mappingFile = path.join(__dirname, 'cloudinary-image-mapping.json');
const outputFile = path.join(__dirname, 'final-image-audit.txt');

const mappings = JSON.parse(fs.readFileSync(mappingFile, 'utf8'));

const dataFiles = fs.readdirSync(dataFolder)
  .filter(file =>
    file.endsWith('.ts') &&
    !file.endsWith('.backup.ts') &&
    !file.endsWith('.corrupted.ts')
  );

let report = '';
let affectedProducts = 0;
let productsWithValidImages = 0;
let productsWithNoValidImages = 0;
let missingReferences = 0;

for (const file of dataFiles) {
  const filePath = path.join(dataFolder, file);
  const content = fs.readFileSync(filePath, 'utf8');

  const productBlocks = content.split(/\n\s*\{\s*\n/);

  for (const block of productBlocks) {
    const nameMatch = block.match(/name:\s*['"`]([^'"`]+)['"`]/);

    if (!nameMatch) continue;

    const productName = nameMatch[1];

    const imageMatch = block.match(/images:\s*\[([\s\S]*?)\]/);

    if (!imageMatch) continue;

    const references = [
      ...imageMatch[1].matchAll(/['"`]([^'"`]+)['"`]/g)
    ].map(match => match[1]);

    const missing = [];
    const validCloudinary = [];

    for (const reference of references) {

      if (reference.includes('res.cloudinary.com')) {
        validCloudinary.push(reference);
        continue;
      }

      if (!reference.startsWith('assets/img/')) {
        continue;
      }

      const mapped = mappings[reference];

      if (mapped) {
        validCloudinary.push(mapped);
      } else {
        missing.push(reference);
        missingReferences++;
      }
    }

    if (missing.length === 0) continue;

    affectedProducts++;

    if (validCloudinary.length > 0) {
      productsWithValidImages++;
    } else {
      productsWithNoValidImages++;
    }

    report += '\n========================================\n';
    report += `FILE: ${file}\n`;
    report += `PRODUCT: ${productName}\n`;
    report += `MISSING IMAGES: ${missing.length}\n`;
    report += `VALID CLOUDINARY IMAGES: ${validCloudinary.length}\n`;
    report += '----------------------------------------\n';

    for (const image of missing) {
      report += `MISSING: ${image}\n`;
    }

    if (validCloudinary.length > 0) {
      report += '\nVALID CLOUDINARY IMAGES:\n';

      for (const image of validCloudinary) {
        report += `${image}\n`;
      }
    }
  }
}

const summary = `ASTONIC MART FINAL IMAGE AUDIT
=========================================

Active data files checked: ${dataFiles.length}

Products affected: ${affectedProducts}

Products with at least one valid Cloudinary image:
${productsWithValidImages}

Products with NO valid Cloudinary images:
${productsWithNoValidImages}

Missing image references:
${missingReferences}

IMPORTANT:
NO Angular data files were changed.
NO images were deleted.
NO Cloudinary uploads were performed.
`;

fs.writeFileSync(outputFile, summary + report, 'utf8');

console.log(summary);
console.log(`Report saved to: ${outputFile}`);