const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(process.cwd(), 'src', 'app', 'core', 'data');
const IMAGE_DIR = path.join(process.cwd(), 'src', 'assets', 'img');
const OUTPUT = path.join(process.cwd(), 'backend', 'remaining-product-image-search.txt');

function getFiles(dir) {
    let results = [];

    if (!fs.existsSync(dir)) return results;

    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, item.name);

        if (item.isDirectory()) {
            results = results.concat(getFiles(full));
        } else if (/\.(jpg|jpeg|png|webp|avif|gif)$/i.test(item.name)) {
            results.push(full);
        }
    }

    return results;
}

function normalize(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function keywords(text) {
    return normalize(text)
        .split(' ')
        .filter(word => word.length >= 4);
}

console.log('======================================');
console.log('ASTONIC MART REMAINING PRODUCT IMAGE SEARCH');
console.log('======================================');

const dataFiles = fs.readdirSync(DATA_DIR)
    .filter(file => file.endsWith('.data.ts'));

const localImages = getFiles(IMAGE_DIR);

console.log(`Local image files found: ${localImages.length}`);
console.log(`Data files checked: ${dataFiles.length}`);

const imageRecords = localImages.map(file => ({
    path: file,
    name: path.basename(file),
    normalized: normalize(path.basename(file))
}));

const results = [];

for (const dataFile of dataFiles) {
    const fullPath = path.join(DATA_DIR, dataFile);
    const content = fs.readFileSync(fullPath, 'utf8');

    const productBlocks = content.split(/(?=\{\s*id\s*:)/);

    for (const block of productBlocks) {

        const nameMatch = block.match(/name\s*:\s*['"`]([^'"`]+)['"`]/);

        if (!nameMatch) continue;

        const productName = nameMatch[1];

        // Only inspect products whose image arrays are now empty
        // or contain no Cloudinary URLs.
       const imagesMatch = block.match(/images\s*:\s*\[([\s\S]*?)\]/);

if (!imagesMatch) continue;

const imageContent = imagesMatch[1].trim();

// Only search products whose images array is empty.
if (imageContent.length > 0) continue;

        const productWords = keywords(productName);

        const matches = [];

        for (const image of imageRecords) {
            let score = 0;
            const imageText = image.normalized;

            for (const word of productWords) {
                if (imageText.includes(word)) {
                    score++;
                }
            }

            if (score > 0) {
                matches.push({
                    score,
                    path: path.relative(process.cwd(), image.path)
                });
            }
        }

        matches.sort((a, b) => b.score - a.score);

        results.push({
            file: dataFile,
            product: productName,
            matches: matches.slice(0, 10)
        });
    }
}

let output = '';

for (const result of results) {
    output += '--------------------------------------\n';
    output += `FILE: ${result.file}\n`;
    output += `PRODUCT: ${result.product}\n`;

    if (result.matches.length === 0) {
        output += 'LOCAL MATCHES: NONE\n';
    } else {
        output += 'LOCAL MATCHES:\n';

        for (const match of result.matches) {
            output += `SCORE ${match.score}: ${match.path}\n`;
        }
    }

    output += '\n';
}

fs.writeFileSync(OUTPUT, output, 'utf8');

console.log('');
console.log('======================================');
console.log('SEARCH COMPLETE');
console.log('======================================');
console.log(`Remaining products searched: ${results.length}`);
console.log(`Report saved to: ${OUTPUT}`);
console.log('');
console.log('NO Angular data files were changed.');
console.log('NO images were deleted.');
console.log('NO Cloudinary uploads were performed.');