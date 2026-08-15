const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: path.join(__dirname, '.env') });

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src', 'app', 'core', 'data');
const BACKUP_DIR = path.join(__dirname, 'backup-before-final-local-migration');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log('======================================');
console.log('ASTONIC MART FINAL LOCAL IMAGE MIGRATION');
console.log('======================================');
console.log('');

function findLocalFile(imageReference) {

    let clean = imageReference
        .replace(/^['"`]/, '')
        .replace(/['"`,]+$/, '')
        .trim();

    clean = clean.replace(/\\/g, '/');

    // Remove leading src/ because ROOT already contains src
    if (clean.startsWith('src/')) {
        clean = clean.substring(4);
    }

    const possiblePaths = [
        path.join(ROOT, 'src', clean),
        path.join(ROOT, clean)
    ];

    for (const filePath of possiblePaths) {

        if (fs.existsSync(filePath)) {
            return filePath;
        }
    }

    return null;
}

function getCloudinaryFolder(filePath) {

    const relative = path.relative(
        path.join(ROOT, 'src', 'assets', 'img'),
        filePath
    );

    const folder = path.dirname(relative);

    if (!folder || folder === '.') {
        return 'Astonic-Mart/Products';
    }

    return `Astonic-Mart/Products/${folder.replace(/\\/g, '/')}`;
}

function extractReferences(content) {

    const regex = /(['"`])((?:src\/)?assets\/img\/[^'"`\r\n]+)\1/g;

    const results = [];
    let match;

    while ((match = regex.exec(content)) !== null) {

        const reference = match[2];

        // Ignore video references
        if (/\.(mp4|mov|webm|avi|mkv)$/i.test(reference)) {
            continue;
        }

        if (!results.includes(reference)) {
            results.push(reference);
        }
    }

    return results;
}

async function uploadImage(filePath) {

    const folder = getCloudinaryFolder(filePath);

    return cloudinary.uploader.upload(filePath, {
        folder,
        resource_type: 'image',
        use_filename: true,
        unique_filename: false,
        overwrite: true
    });
}

async function main() {

    const dataFiles = fs.readdirSync(DATA_DIR)
        .filter(file => file.endsWith('.data.ts'));

    const allReferences = [];

    for (const dataFile of dataFiles) {

        const fullPath = path.join(DATA_DIR, dataFile);
        const content = fs.readFileSync(fullPath, 'utf8');

        const references = extractReferences(content);

        for (const reference of references) {

            allReferences.push({
                dataFile,
                fullPath,
                reference
            });
        }
    }

    console.log(`Remaining local image references found: ${allReferences.length}`);
    console.log('');

    if (allReferences.length === 0) {

        console.log('NO LOCAL IMAGE REFERENCES REMAIN.');
        console.log('');
        return;
    }

    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR, { recursive: true });
    }

    const backupsMade = new Set();
    let migrated = 0;
    let skipped = 0;

    for (const item of allReferences) {

        console.log('--------------------------------------');
        console.log(`FILE: ${item.dataFile}`);
        console.log(`LOCAL: ${item.reference}`);

        const localFile = findLocalFile(item.reference);

        if (!localFile) {

            console.log('SKIPPED — local file not found.');
            skipped++;
            continue;
        }

        console.log(`FOUND: ${localFile}`);
        console.log('Uploading...');

        try {

            const result = await uploadImage(localFile);

            console.log('UPLOADED');
            console.log(`CLOUDINARY: ${result.secure_url}`);

            let content = fs.readFileSync(
                item.fullPath,
                'utf8'
            );

            if (!backupsMade.has(item.dataFile)) {

                const backupPath = path.join(
                    BACKUP_DIR,
                    item.dataFile
                );

                fs.copyFileSync(
                    item.fullPath,
                    backupPath
                );

                backupsMade.add(item.dataFile);
            }

            content = content.split(item.reference).join(
                result.secure_url
            );

            fs.writeFileSync(
                item.fullPath,
                content,
                'utf8'
            );

            console.log('ANGULAR DATA UPDATED.');

            migrated++;

        } catch (error) {

            console.log('UPLOAD FAILED');
            console.log(error.message);

            skipped++;
        }
    }

    console.log('');
    console.log('======================================');
    console.log('FINAL MIGRATION COMPLETE');
    console.log('======================================');
    console.log(`Migrated: ${migrated}`);
    console.log(`Skipped: ${skipped}`);
    console.log(`Backups: ${BACKUP_DIR}`);
    console.log('');
    console.log('NO LOCAL IMAGES WERE DELETED.');
    console.log('======================================');
}

main().catch(error => {

    console.error('');
    console.error('FATAL ERROR:');
    console.error(error);

    process.exit(1);
});