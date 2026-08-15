const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(process.cwd(), 'src', 'app', 'core', 'data');
const AUDIT_FILE = path.join(process.cwd(), 'backend', 'final-image-audit.txt');

const backupDir = path.join(
    process.cwd(),
    'backup-before-missing-image-cleanup'
);

console.log('======================================');
console.log('ASTONIC MART SAFE IMAGE CLEANUP');
console.log('======================================');
console.log('');

if (!fs.existsSync(backupDir)) {
    console.error('BACKUP NOT FOUND. STOPPING.');
    process.exit(1);
}

const audit = fs.readFileSync(AUDIT_FILE, 'utf8');

// Split audit into product blocks
const blocks = audit.split(/\n={40,}\n/);

let changedFiles = 0;
let removedReferences = 0;
let skippedProducts = 0;

for (const block of blocks) {

    // Only process products that HAVE at least one valid Cloudinary image.
    if (!block.includes('VALID CLOUDINARY IMAGES:') ||
        block.includes('VALID CLOUDINARY IMAGES: 0')) {
        continue;
    }

    const fileMatch = block.match(/FILE:\s*(.+)/);
    if (!fileMatch) continue;

    const fileName = fileMatch[1].trim();
    const filePath = path.join(DATA_DIR, fileName);

    if (!fs.existsSync(filePath)) {
        continue;
    }

    const missingMatches = [
        ...block.matchAll(/MISSING:\s*(.+)/g)
    ].map(m => m[1].trim());

    if (missingMatches.length === 0) {
        continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    for (const reference of missingMatches) {

        // Remove ONLY the exact broken local reference.
        const escaped = reference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        const pattern = new RegExp(
            `\\s*'${escaped}',?`,
            'g'
        );

        const before = content;

        content = content.replace(pattern, '');

        if (content !== before) {
            removedReferences++;
        }
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        changedFiles++;
    }
}

console.log('CLEANUP COMPLETE');
console.log('======================================');
console.log(`Files changed              : ${changedFiles}`);
console.log(`Broken references removed  : ${removedReferences}`);
console.log('');
console.log('Products with ZERO valid Cloudinary images were NOT changed.');
console.log('No images were deleted.');
console.log('');
console.log('Backup remains at:');
console.log(backupDir);