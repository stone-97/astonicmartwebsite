const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const projectRoot = path.join(__dirname, '..');
const dataDir = path.join(projectRoot, 'src', 'app', 'core', 'data');
const outputDir = path.join(projectRoot, 'dist', 'astonicmarts', 'browser');

const dataFiles = fs.readdirSync(dataDir)
  .filter(file => file.endsWith('.data.ts'));

const tempDir = path.join(__dirname, '.merchant-feed-temp');

if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

fs.mkdirSync(tempDir, { recursive: true });

/*
 * Transpile all product data TypeScript files into temporary JavaScript files.
 */
for (const file of dataFiles) {
  const sourcePath = path.join(dataDir, file);
  const source = fs.readFileSync(sourcePath, 'utf8');

  const result = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true
    },
    fileName: file
  });

  const outputFile = file.replace(/\.ts$/, '.js');

  fs.writeFileSync(
    path.join(tempDir, outputFile),
    result.outputText,
    'utf8'
  );
}

/*
 * Load every exported product array.
 */
const allProducts = [];

for (const file of dataFiles) {
  const jsFile = path.join(tempDir, file.replace(/\.ts$/, '.js'));

  try {
    delete require.cache[require.resolve(jsFile)];

    const moduleData = require(jsFile);

    for (const key of Object.keys(moduleData)) {
      const value = moduleData[key];

      if (Array.isArray(value)) {
        for (const product of value) {
          if (
            product &&
            typeof product.id === 'number' &&
            product.name &&
            product.price !== undefined
          ) {
            allProducts.push(product);
          }
        }
      }
    }
  } catch (error) {
    console.warn(`Could not load ${file}:`, error.message);
  }
}

/*
 * Remove duplicate product IDs.
 */
const uniqueProducts = [];
const seenIds = new Set();

for (const product of allProducts) {
  if (!seenIds.has(product.id)) {
    seenIds.add(product.id);
    uniqueProducts.push(product);
  }
}

/*
 * XML escaping.
 */
function escapeXml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/*
 * Convert product description into clean text.
 */
function cleanDescription(value) {
  return String(value ?? '')
    .replace(/\r?\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}



/*
 * Build Google Merchant Center XML.
 */
const items = uniqueProducts.map(product => {
  const price = Number(
    product.discountPrice !== undefined
      ? product.discountPrice
      : product.price
  );

  const availability =
    product.inStock === false
      ? 'out of stock'
      : 'in stock';

const image =
  product.images?.find(img =>
    /\.(jpe?g|png|gif|webp)(\?|$)/i.test(img)
  ) ||
  product.images?.find(img =>
    /\.avif(\?|$)/i.test(img)
  )?.replace(
    '/image/upload/',
    '/image/upload/f_jpg/'
  ).replace(
    /\.avif(\?|$)/i,
    '.jpg$1'
  ) || '';

  const productUrl =
    `https://astonicmart.com/product/${product.id}`;

  return `
    <item>
      <g:id>${escapeXml(product.id)}</g:id>
      <g:title>${escapeXml(product.name)}</g:title>
      <g:description>${escapeXml(cleanDescription(product.description))}</g:description>
      <g:link>${escapeXml(productUrl)}</g:link>
      <g:image_link>${escapeXml(image)}</g:image_link>
      <g:availability>${availability}</g:availability>
      <g:price>${price.toFixed(2)} NGN</g:price>
      <g:condition>new</g:condition>
      <g:brand>${escapeXml(product.brand || 'Astonic Mart')}</g:brand>
    </item>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Astonic Mart Product Feed</title>
    <link>https://astonicmart.com</link>
    <description>Astonic Mart safety and industrial tools</description>
    ${items}
  </channel>
</rss>`;

/*
 * Make sure the production folder exists.
 */
fs.mkdirSync(outputDir, { recursive: true });

const outputFile = path.join(
  outputDir,
  'google-merchant-feed.xml'
);

fs.writeFileSync(outputFile, xml, 'utf8');

/*
 * Clean temporary files.
 */
fs.rmSync(tempDir, { recursive: true, force: true });

console.log('');
console.log('========================================');
console.log(' Google Merchant Center Feed Generated');
console.log('========================================');
console.log(`Products found: ${uniqueProducts.length}`);
console.log(`Feed: ${outputFile}`);
console.log('');