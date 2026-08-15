const fs = require('fs');
const path = require('path');

const mappingFile = path.join(__dirname, 'cloudinary-image-mapping.json');
const auditFile = path.join(__dirname, 'final-image-audit.txt');
const outputFile = path.join(__dirname, 'missing-cloudinary-matches.txt');

console.log('======================================');
console.log('ASTONIC MART CLOUDINARY MATCH CHECK');
console.log('======================================');

if (!fs.existsSync(mappingFile)) {
    console.error('ERROR: cloudinary-image-mapping.json not found.');
    process.exit(1);
}

if (!fs.existsSync(auditFile)) {
    console.error('ERROR: final-image-audit.txt not found.');
    process.exit(1);
}

const mapping = JSON.parse(fs.readFileSync(mappingFile, 'utf8'));
const audit = fs.readFileSync(auditFile, 'utf8');

const entries = Object.entries(mapping);

console.log(`Cloudinary mappings loaded: ${entries.length}`);

const missingLines = audit
    .split(/\r?\n/)
    .filter(line => line.startsWith('MISSING: '));

const uniqueMissing = [...new Set(
    missingLines.map(line => line.replace(/^MISSING:\s*/, '').trim())
)];

console.log(`Missing references found: ${uniqueMissing.length}`);

function normalize(value) {
    return value
        .toLowerCase()
        .replace(/\\/g, '/')
        .replace(/^assets\/img\//, '')
        .replace(/\.[^.\/]+$/, '')
        .replace(/[^a-z0-9]+/g, '');
}

const mappingNormalized = entries.map(([localPath, cloudinaryUrl]) => ({
    localPath,
    cloudinaryUrl,
    normalized: normalize(localPath)
}));

const results = [];

for (const missing of uniqueMissing) {
    const normalizedMissing = normalize(missing);

    const exact = mappingNormalized.filter(item =>
        item.normalized === normalizedMissing
    );

    const filename = path.basename(missing);
    const filenameNormalized = normalize(filename);

    const filenameMatches = mappingNormalized.filter(item =>
        normalize(path.basename(item.localPath)) === filenameNormalized
    );

    results.push({
        missing,
        exact,
        filenameMatches
    });
}

let exactCount = 0;
let filenameCount = 0;
let noMatchCount = 0;

const output = [];

output.push('ASTONIC MART MISSING CLOUDINARY MATCHES');
output.push('======================================');
output.push('');
output.push(`Missing references checked: ${uniqueMissing.length}`);
output.push('');

for (const result of results) {
    output.push('--------------------------------------');
    output.push(`MISSING: ${result.missing}`);

    if (result.exact.length > 0) {
        exactCount++;

        output.push('MATCH TYPE: NORMALIZED EXACT MATCH');

        for (const match of result.exact) {
            output.push(`MAPPED LOCAL: ${match.localPath}`);
            output.push(`CLOUDINARY: ${match.cloudinaryUrl}`);
        }
    }
    else if (result.filenameMatches.length > 0) {
        filenameCount++;

        output.push('MATCH TYPE: FILENAME MATCH');

        for (const match of result.filenameMatches) {
            output.push(`MAPPED LOCAL: ${match.localPath}`);
            output.push(`CLOUDINARY: ${match.cloudinaryUrl}`);
        }
    }
    else {
        noMatchCount++;
        output.push('MATCH: NONE');
    }

    output.push('');
}

output.push('======================================');
output.push('SUMMARY');
output.push('======================================');
output.push(`Exact matches : ${exactCount}`);
output.push(`Filename matches : ${filenameCount}`);
output.push(`No matches : ${noMatchCount}`);
output.push('');
output.push('NO Angular data files were changed.');
output.push('NO files were uploaded.');
output.push('NO local files were deleted.');

fs.writeFileSync(outputFile, output.join('\n'), 'utf8');

console.log('');
console.log('======================================');
console.log('MATCH CHECK COMPLETE');
console.log('======================================');
console.log(`Exact matches    : ${exactCount}`);
console.log(`Filename matches : ${filenameCount}`);
console.log(`No matches       : ${noMatchCount}`);
console.log('');
console.log(`Report saved to: ${outputFile}`);
console.log('');
console.log('NO Angular data files were changed.');
console.log('NO files were uploaded.');
console.log('NO local files were deleted.');