const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: path.join(__dirname, '.env') });

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src', 'app', 'core', 'data');
const BACKUP_DIR = path.join(__dirname, 'backup-before-final-local-fix');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const products = [
    {
        name: 'TOTAL 8" 20V Mitre Saw + 2 x 4Ah Batteries + Charger (TMSLI20212)',
        files: [
            'src/assets/img/circular and mitre saws/TOTAL 8 inch 20V Mitre Saw - 2 x 4Ah Batteries - Charger Total TMSLI20212.jpg',
            'src/assets/img/circular and mitre saws/TOTAL 8 inch 20V Mitre Saw - 2 x 4Ah Batteries - Charger Total TMSLI20212-2.jpg',
            'src/assets/img/circular and mitre saws/TOTAL 8 inch 20V Mitre Saw - 2 x 4Ah Batteries - Charger Total TMSLI20212-3.jpg'
        ]
    },
    {
        name: 'Beta Safety Earmuff',
        files: [
            'src/assets/img/earmuffs/beta earmuff.jpg'
        ]
    },
    {
        name: 'Covenant 3/4',
        files: [
            'src/assets/img/torque wrenches/Covenant 3 4 inches Torque Wrench 100–500Nm.png'
        ]
    },
    {
        name: 'RIH Pneumatics 3/8',
        files: [
            'src/assets/img/air-compressor accessories/RIH 3by8inch Air Filter Regulator Lubricator Combo AW3000-03 AL3000-03.avif',
            'src/assets/img/air-compressor accessories/RIH 3by8inch Air Filter Regulator Lubricator Combo AW3000-03 AL3000-03-2.jpeg',
            'src/assets/img/air-compressor accessories/RIH 3by8inch Air Filter Regulator Lubricator Combo AW3000-03 AL3000-03-3.jpeg',
            'src/assets/img/air-compressor accessories/RIH 3by8inch Air Filter Regulator Lubricator Combo AW3000-03 AL3000-03-4.jpeg',
            'src/assets/img/air-compressor accessories/RIH 3by8inch Air Filter Regulator Lubricator Combo AW3000-03 AL3000-03-5.avif'
        ]
    }
];

function findProductBlock(content, productName) {
    const escaped = productName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const regex = new RegExp(
        `\\{[\\s\\S]*?name\\s*:\\s*['"\`]${escaped}['"\`][\\s\\S]*?(?=\\n\\s*\\},?\\s*\\n|$)`,
        'i'
    );

    const match = content.match(regex);

    return match ? match[0] : null;
}

function makeImageArray(urls) {
    return `images: [\n${urls
        .map(url => `            '${url}'`)
        .join(',\n')}\n        ]`;
}

async function main() {

    console.log('======================================');
    console.log('ASTONIC MART FINAL LOCAL IMAGE FIX');
    console.log('======================================');
    console.log('');

    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR, { recursive: true });
    }

    for (const product of products) {

        console.log('--------------------------------------');
        console.log(`PRODUCT: ${product.name}`);

        const uploadedUrls = [];

        for (const relativePath of product.files) {

            const fullPath = path.join(ROOT, relativePath);

            console.log(`LOCAL: ${relativePath}`);

            if (!fs.existsSync(fullPath)) {
                console.log('SKIPPED — file not found');
                continue;
            }

            try {

                const result = await cloudinary.uploader.upload(
                    fullPath,
                    {
                        folder: 'Astonic-Mart/Products/final-local-images',
                        use_filename: true,
                        unique_filename: true,
                        resource_type: 'image'
                    }
                );

                uploadedUrls.push(result.secure_url);

                console.log('UPLOADED');

            } catch (error) {

                console.log('UPLOAD FAILED');
                console.log(error.message);

            }
        }

        if (uploadedUrls.length === 0) {
            console.log('NO IMAGES UPLOADED');
            continue;
        }

        let updated = false;

        for (const dataFile of fs.readdirSync(DATA_DIR)) {

            if (!dataFile.endsWith('.data.ts')) continue;

            const fullDataPath = path.join(DATA_DIR, dataFile);
            let content = fs.readFileSync(fullDataPath, 'utf8');

            if (!content.includes(product.name)) continue;

            const block = findProductBlock(content, product.name);

            if (!block) {
                console.log(`BLOCK NOT FOUND: ${dataFile}`);
                continue;
            }

            const imagesMatch = block.match(
                /images\s*:\s*\[[\s\S]*?\]/
            );

            if (!imagesMatch) {
                console.log(`NO IMAGES ARRAY: ${dataFile}`);
                continue;
            }

            const newImages = makeImageArray(uploadedUrls);

            const newBlock = block.replace(
                /images\s*:\s*\[[\s\S]*?\]/,
                newImages
            );

            if (newBlock === block) {
                console.log('NO CHANGE NEEDED');
                continue;
            }

            const backupPath = path.join(BACKUP_DIR, dataFile);

            if (!fs.existsSync(backupPath)) {
                fs.copyFileSync(fullDataPath, backupPath);
            }

            content = content.replace(block, newBlock);

            fs.writeFileSync(
                fullDataPath,
                content,
                'utf8'
            );

            console.log(`ANGULAR DATA UPDATED: ${dataFile}`);
            console.log(`Cloudinary images: ${uploadedUrls.length}`);

            updated = true;
            break;
        }

        if (!updated) {
            console.log('ANGULAR DATA NOT UPDATED');
        }
    }

    console.log('');
    console.log('======================================');
    console.log('FINAL LOCAL IMAGE FIX COMPLETE');
    console.log('======================================');
    console.log(`Backup: ${BACKUP_DIR}`);
    console.log('');
    console.log('NO LOCAL IMAGES WERE DELETED.');
}

main().catch(error => {
    console.error('');
    console.error('FATAL ERROR:');
    console.error(error);
    process.exit(1);
});