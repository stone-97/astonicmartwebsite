const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src', 'app', 'core', 'data');
const REPORT = path.join(__dirname, 'remaining-product-image-search.txt');
const BACKUP_DIR = path.join(__dirname, 'backup-before-local-image-apply');

const MIN_SCORE = 5;

function normalize(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function meaningfulWords(text) {
    const stopWords = new Set([
        'the', 'and', 'with', 'for', 'from', 'piece', 'pieces',
        'set', 'type', 'kit', 'plus', 'pro', 'industrial',
        'portable', 'heavy', 'duty', 'machine', 'tool',
        'tools', 'equipment', 'product', 'generic'
    ]);

    return normalize(text)
        .split(' ')
        .filter(word => word.length >= 4 && !stopWords.has(word));
}

function extractModel(product) {
    const models = product.match(
        /\b[A-Z]{2,}[A-Z0-9]*[-]?[A-Z0-9]{2,}\b|\b[A-Z]{2,}\d{2,}[A-Z0-9-]*\b/gi
    );

    if (!models) return [];

    return models
        .map(normalize)
        .filter(x => x.length >= 4);
}

function imageFilename(imagePath) {
    return normalize(path.basename(imagePath));
}

function isStrongEnough(product, imagePath, score) {
    if (score < MIN_SCORE) return false;

    const productNormalized = normalize(product);
    const imageNormalized = imageFilename(imagePath);

    // Strongest possible case:
    // product model appears directly in the image filename.
    const models = extractModel(product);

    for (const model of models) {
        if (imageNormalized.includes(model)) {
            return true;
        }
    }

    // Otherwise require several meaningful product words.
    const words = meaningfulWords(product);

    let matched = 0;

    for (const word of words) {
        if (imageNormalized.includes(word)) {
            matched++;
        }
    }

    // Require at least 3 meaningful words for non-model matches.
    return matched >= 3;
}

function parseReport() {
    const report = fs.readFileSync(REPORT, 'utf8');
    const lines = report.split(/\r?\n/);

    const products = [];
    let current = null;

    for (const line of lines) {
        if (line.startsWith('PRODUCT: ')) {
            current = {
                product: line.substring('PRODUCT: '.length).trim(),
                matches: []
            };

            products.push(current);
            continue;
        }

        const match = line.match(/^SCORE\s+(\d+):\s+(.+)$/);

        if (!match || !current) continue;

        current.matches.push({
            score: Number(match[1]),
            imagePath: match[2].trim()
        });
    }

    return products;
}

function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function findProductInFile(content, productName) {
    const escaped = escapeRegExp(productName);

    const regex = new RegExp(
        `(\\{\\s*id\\s*:[\\s\\S]*?name\\s*:\\s*['"\`]${escaped}['"\`][\\s\\S]*?)(?=\\n\\s*\\},?\\s*\\n|$)`,
        'i'
    );

    return content.match(regex);
}

function makeImageArray(imagePaths) {
    return imagePaths
        .map(p => {
            const normalized = p.replace(/\\/g, '/');

            return `        '${normalized}'`;
        })
        .join(',\n');
}

console.log('======================================');
console.log('ASTONIC MART LOCAL IMAGE APPLY');
console.log('======================================');
console.log('');

const products = parseReport();

console.log(`Remaining products found in report: ${products.length}`);
console.log('');

const approved = [];

for (const product of products) {

    const candidates = product.matches
        .filter(item =>
            isStrongEnough(
                product.product,
                item.imagePath,
                item.score
            )
        )
        .sort((a, b) => b.score - a.score);

    if (candidates.length === 0) {
        continue;
    }

    const highestScore = candidates[0].score;

    // Keep only candidates at the highest score.
    const best = candidates.filter(
        item => item.score === highestScore
    );

    approved.push({
        product: product.product,
        images: best.map(x => x.imagePath),
        score: highestScore
    });
}

console.log('======================================');
console.log('APPROVED LOCAL IMAGE MATCHES');
console.log('======================================');

if (approved.length === 0) {
    console.log('No safe matches were found.');
    process.exit(0);
}

for (const item of approved) {
    console.log('');
    console.log(`PRODUCT: ${item.product}`);
    console.log(`SCORE: ${item.score}`);

    for (const image of item.images) {
        console.log(`  ${image}`);
    }
}

console.log('');
console.log('======================================');
console.log(`SAFE MATCHES FOUND: ${approved.length}`);
console.log('======================================');
console.log('');

const APPLY = process.argv.includes('--apply');

if (!APPLY) {
    console.log('PREVIEW ONLY.');
    console.log('');
    console.log('NO Angular data files were changed.');
    console.log('NO images were deleted.');
    console.log('');
    console.log('If the matches above look correct, run:');
    console.log('');
    console.log('node backend\\apply-strong-image-matches.js --apply');
    console.log('');

    process.exit(0);
}

// ---------------------------------------------------------
// APPLY MODE
// ---------------------------------------------------------

console.log('APPLY MODE ENABLED.');
console.log('');

if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

const affectedFiles = new Set();

for (const item of approved) {

    for (const dataFile of fs.readdirSync(DATA_DIR)) {

        if (!dataFile.endsWith('.data.ts')) continue;

        const fullPath = path.join(DATA_DIR, dataFile);
        const content = fs.readFileSync(fullPath, 'utf8');

        if (!content.includes(item.product)) continue;

        // Only touch products that do NOT already have Cloudinary images.
        const blockRegex = new RegExp(
            `\\{[\\s\\S]*?name\\s*:\\s*['"\`]${escapeRegExp(item.product)}['"\`][\\s\\S]*?(?=\\n\\s*\\},?\\s*\\n|$)`,
            'i'
        );

        const blockMatch = content.match(blockRegex);

        if (!blockMatch) {
            console.log(`Could not safely locate: ${item.product}`);
            continue;
        }

        const block = blockMatch[0];

        if (/cloudinary\.com/i.test(block)) {
            console.log(`SKIPPED — already has Cloudinary: ${item.product}`);
            continue;
        }

        const imagesMatch = block.match(
            /images\s*:\s*\[[\s\S]*?\]/
        );

        if (!imagesMatch) {
            console.log(`SKIPPED — no images array: ${item.product}`);
            continue;
        }

        const newImages = `images: [\n${makeImageArray(item.images)}\n    ]`;

        const newBlock = block.replace(
            /images\s*:\s*\[[\s\S]*?\]/,
            newImages
        );

        if (newBlock === block) {
            console.log(`SKIPPED — no change: ${item.product}`);
            continue;
        }

        // Backup the original file once.
        const backupPath = path.join(
            BACKUP_DIR,
            dataFile
        );

        if (!fs.existsSync(backupPath)) {
            fs.copyFileSync(fullPath, backupPath);
        }

        const newContent = content.replace(
            block,
            newBlock
        );

        fs.writeFileSync(
            fullPath,
            newContent,
            'utf8'
        );

        affectedFiles.add(dataFile);

        console.log(`APPLIED: ${item.product}`);
        console.log(`FILE: ${dataFile}`);
        console.log(`IMAGES: ${item.images.length}`);
        console.log('');
    }
}

console.log('======================================');
console.log('APPLY COMPLETE');
console.log('======================================');
console.log(`Products processed: ${approved.length}`);
console.log(`Data files changed: ${affectedFiles.size}`);
console.log('');
console.log(`Backup folder: ${BACKUP_DIR}`);
console.log('');
console.log('NO images were deleted.');
console.log('NO Cloudinary images were changed.');
console.log('======================================');