
const fs = require('fs');
const path = require('path');

const missingFile = path.join(__dirname, 'missing-cloudinary-matches.txt');
const assetsFolder = path.join(__dirname, '..', 'src', 'assets', 'img');
const outputFile = path.join(__dirname, 'local-image-alternatives.txt');

console.log('======================================');
console.log('ASTONIC MART LOCAL IMAGE ALTERNATIVES');
console.log('======================================');

if (!fs.existsSync(missingFile)) {
    console.error('ERROR: missing-cloudinary-matches.txt not found.');
    process.exit(1);
}

if (!fs.existsSync(assetsFolder)) {
    console.error('ERROR: src/assets/img not found.');
    process.exit(1);
}

const report = fs.readFileSync(missingFile, 'utf8');

const missing = [...new Set(
    [...report.matchAll(/^MISSING:\s+(.+)$/gm)]
        .map(match => match[1].trim())
)];

function normalize(value) {
    return value
        .toLowerCase()
        .replace(/\\/g, '/')
        .replace(/^assets\/img\//, '')
        .replace(/\.[^.\/]+$/, '')
        .replace(/[^a-z0-9]+/g, '');
}

function words(value) {
    return normalize(value)
        .split(/(?=[0-9])|(?<=[a-z])(?=[0-9])/)
        .filter(Boolean);
}

const files = [];

function scan(folder) {
    for (const item of fs.readdirSync(folder, { withFileTypes: true })) {
        const fullPath = path.join(folder, item.name);

        if (item.isDirectory()) {
            scan(fullPath);
        }
        else {
            const ext = path.extname(item.name).toLowerCase();

            if (['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'].includes(ext)) {
                files.push({
                    fullPath,
                    relativePath: path.relative(
                        path.join(__dirname, '..', 'src'),
                        fullPath
                    ).replace(/\\/g, '/'),
                    name: item.name,
                    normalized: normalize(item.name),
                    words: words(item.name)
                });
            }
        }
    }
}

console.log('Scanning local image folder...');

scan(assetsFolder);

console.log(`Local image files found: ${files.length}`);
console.log(`Missing references to check: ${missing.length}`);

const output = [];

output.push('ASTONIC MART LOCAL IMAGE ALTERNATIVES');
output.push('=====================================');
output.push('');

let possibleMatches = 0;
let noMatches = 0;

for (const missingPath of missing) {

    const missingName = path.basename(missingPath);
    const missingNormalized = normalize(missingName);
    const missingWords = words(missingName);

    const candidates = files
        .map(file => {

            let score = 0;

            if (
                file.normalized === missingNormalized &&
                missingNormalized.length > 0
            ) {
                score += 100;
            }

            if (
                file.normalized.includes(missingNormalized) ||
                missingNormalized.includes(file.normalized)
            ) {
                score += 60;
            }

            for (const word of missingWords) {
                if (word.length >= 4 && file.normalized.includes(word)) {
                    score += 5;
                }
            }

            return {
                ...file,
                score
            };
        })
        .filter(file => file.score >= 20)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

    output.push('--------------------------------------');
    output.push(`MISSING: ${missingPath}`);

    if (candidates.length === 0) {
        noMatches++;
        output.push('POSSIBLE LOCAL MATCHES: NONE');
    }
    else {
        possibleMatches++;

        output.push('POSSIBLE LOCAL MATCHES:');

        for (const candidate of candidates) {
            output.push(
                `SCORE ${candidate.score}: ${candidate.relativePath}`
            );
        }
    }

    output.push('');
}

output.push('======================================');
output.push('SUMMARY');
output.push('======================================');
output.push(`Missing references checked: ${missing.length}`);
output.push(`With possible local matches: ${possibleMatches}`);
output.push(`With no possible matches: ${noMatches}`);
output.push('');
output.push('NO Angular data files were changed.');
output.push('NO files were uploaded.');
output.push('NO local files were deleted.');

fs.writeFileSync(outputFile, output.join('\n'), 'utf8');

console.log('');
console.log('======================================');
console.log('ALTERNATIVE SEARCH COMPLETE');
console.log('======================================');
console.log(`Possible local matches: ${possibleMatches}`);
console.log(`No possible matches    : ${noMatches}`);
console.log('');
console.log(`Report saved to: ${outputFile}`);
console.log('');
console.log('NO Angular data files were changed.');
console.log('NO files were uploaded.');
console.log('NO local files were deleted.');