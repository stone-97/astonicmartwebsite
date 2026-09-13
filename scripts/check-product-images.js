const fs = require('fs');

const FEED = 'dist/astonicmarts/browser/google-merchant-feed.xml';
const OUTPUT = 'scripts/broken-product-images.txt';

if (!fs.existsSync(FEED)) {
  console.error('Merchant feed not found:', FEED);
  process.exit(1);
}

const xml = fs.readFileSync(FEED, 'utf8');

const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(match => {
  const item = match[1];

  const get = (tag) => {
    const match = item.match(
      new RegExp(`<g:${tag}>([\\s\\S]*?)<\\/g:${tag}>`)
    );
    return match ? match[1].trim() : '';
  };

  return {
    id: get('id'),
    title: get('title'),
    image: get('image_link')
  };
});

console.log(`Found ${items.length} products in Merchant Center feed.`);
console.log('Checking images...\n');

const broken = [];
let checked = 0;

async function checkProduct(product) {
  try {
    const response = await fetch(product.image, {
      method: 'GET',
      redirect: 'follow'
    });

    const contentType = response.headers.get('content-type') || '';

    if (!response.ok) {
      return {
        ...product,
        reason: `HTTP ${response.status}`,
        contentType
      };
    }

    if (!contentType.toLowerCase().startsWith('image/')) {
      return {
        ...product,
        reason: 'Not an image',
        contentType
      };
    }

    return null;
  } catch (error) {
    return {
      ...product,
      reason: 'Could not load image',
      contentType: '',
      error: error.message
    };
  }
}

async function run() {
  const batchSize = 10;

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);

    const results = await Promise.all(batch.map(checkProduct));

    for (const result of results) {
      checked++;

      if (result) {
        broken.push(result);
        console.log(
          `❌ Product ${result.id} — ${result.title}\n   ${result.reason}\n   ${result.image}\n`
        );
      }
    }

    process.stdout.write(
      `Checked ${checked}/${items.length}\r`
    );
  }

  console.log('\n');
  console.log('========================================');
  console.log(' IMAGE CHECK COMPLETE');
  console.log('========================================');
  console.log(`Products checked: ${items.length}`);
  console.log(`Broken/problem images: ${broken.length}`);
  console.log('');

  if (broken.length === 0) {
    console.log('✅ No broken/problem main images found.');
    return;
  }

  const output = broken.map(product => {
    return [
      `Product ID: ${product.id}`,
      `Title: ${product.title}`,
      `Reason: ${product.reason}`,
      `Content-Type: ${product.contentType || 'Unknown'}`,
      `Image: ${product.image}`,
      '----------------------------------------'
    ].join('\n');
  }).join('\n');

  fs.writeFileSync(OUTPUT, output, 'utf8');

  console.log(`❌ Problem products saved to: ${OUTPUT}`);
}

run();