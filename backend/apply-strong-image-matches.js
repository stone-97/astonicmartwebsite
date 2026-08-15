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

function isSafeMatch(product, imagePath, score) {

    if (score < MIN_SCORE) return false;

    const imageName = imageFilename(imagePath);
    const productName = normalize(product);

    // ----------------------------------------------------
    // RULE 1: Product model appears in image filename
    // ----------------------------------------------------

    const models = extractModel(product);

    for (const model of models) {
        if (imageName.includes(model)) {
            return true;
        }
    }

    // ----------------------------------------------------
    // RULE 2: Strong exact-name overlap
    // ----------------------------------------------------

    const productWords = productName
        .split(' ')
        .filter(word => word.length >= 5);

    if (productWords.length === 0) {
        return false;
    }

    let matched = 0;

    for (const word of productWords) {
        if (imageName.includes(word)) {
            matched++;
        }
    }

    const ratio = matched / productWords.length;

    // Require at least 70% of meaningful words.
    if (ratio >= 0.70 && matched >= 4) {
        return true;
    }

    return false;
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

function makeImageArray(imagePaths) {

    return imagePaths
        .map(p => {

            const normalized = p.replace(/\\/g, '/');

            return `        '${normalized}'`;

        })
        .join(',\n');
}

console.log('======================================');
console.log('ASTONIC MART STRICT LOCAL IMAGE MATCH');
console.log('======================================');
console.log('');

const products = parseReport();

console.log(`Remaining products found: ${products.length}`);
console.log('');

const approved = [];
const uncertain = [];
const noMatch = [];

for (const product of products) {

    if (product.product.toLowerCase().includes('tile vibrator')) {
        continue;
    }

    const candidates = product.matches
        .filter(item =>
            isSafeMatch(
                product.product,
                item.imagePath,
                item.score
            )
        )
        .sort((a, b) => b.score - a.score);

    if (candidates.length === 0) {

        if (product.matches.length > 0) {
            uncertain.push(product);
        } else {
            noMatch.push(product);
        }

        continue;
    }

    const highestScore = candidates[0].score;

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
console.log('SAFE MATCHES');
console.log('======================================');

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
console.log(`SAFE MATCHES: ${approved.length}`);
console.log(`UNCERTAIN MATCHES: ${uncertain.length}`);
console.log(`NO MATCHES: ${noMatch.length}`);
console.log('======================================');
console.log('');

console.log('IMPORTANT:');
console.log('Only SAFE MATCHES will ever be applied.');
console.log('UNCERTAIN products will NOT be changed.');
console.log('NO MATCH products will NOT be changed.');
console.log('');

const APPLY = process.argv.includes('--apply');

if (!APPLY) {

    console.log('PREVIEW ONLY.');
    console.log('');
    console.log('No Angular files changed.');
    console.log('No images deleted.');
    console.log('');
    console.log('If the SAFE MATCHES look correct, run:');
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

    let applied = false;

    for (const dataFile of fs.readdirSync(DATA_DIR)) {

        if (!dataFile.endsWith('.data.ts')) continue;

        const fullPath = path.join(DATA_DIR, dataFile);

        const content = fs.readFileSync(fullPath, 'utf8');

        if (!content.includes(item.product)) {
            continue;
        }

        const blockRegex = new RegExp(
            `\\{[\\s\\S]*?name\\s*:\\s*['"\`]${escapeRegExp(item.product)}['"\`][\\s\\S]*?(?=\\n\\s*\\},?\\s*\\n|$)`,
            'i'
        );

        const blockMatch = content.match(blockRegex);

        if (!blockMatch) {
            console.log(`SKIPPED — could not safely locate: ${item.product}`);
            continue;
        }

        const block = blockMatch[0];

const imagesMatch = block.match(
    /images\s*:\s*\[([\s\S]*?)\]/
);

if (!imagesMatch) {
    console.log(`SKIPPED — no images array: ${item.product}`);
    continue;
}

const imageArrayContent = imagesMatch[1];

if (/cloudinary\.com/i.test(imageArrayContent)) {
    console.log(`SKIPPED — images already use Cloudinary: ${item.product}`);
    console.log(`NOT APPLIED: ${item.product}`);
    continue;
}
        const newImages =
            `images: [\n${makeImageArray(item.images)}\n    ]`;

        const newBlock = block.replace(
            /images\s*:\s*\[[\s\S]*?\]/,
            newImages
        );

        if (newBlock === block) {
            console.log(`SKIPPED — no change: ${item.product}`);
            continue;
        }

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

        applied = true;
        break;
    }

    if (!applied) {
        console.log(`NOT APPLIED: ${item.product}`);
        console.log('');
    }
}

console.log('======================================');
console.log('APPLY COMPLETE');
console.log('======================================');
console.log(`Safe products processed: ${approved.length}`);
console.log(`Data files changed: ${affectedFiles.size}`);
console.log('');
console.log(`Backup folder: ${BACKUP_DIR}`);
console.log('');
console.log('NO images were deleted.');
console.log('NO Cloudinary images were changed.');
console.log('======================================');