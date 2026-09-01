const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'app', 'core', 'data');
const outputFile = path.join(__dirname, 'src', 'sitemap.xml');

const files = fs.readdirSync(dataDir)
  .filter(file => file.endsWith('.data.ts'));

const ids = new Set();

for (const file of files) {
  const content = fs.readFileSync(
    path.join(dataDir, file),
    'utf8'
  );

  const matches = content.matchAll(/^\s*id:\s*(\d+)/gm);

  for (const match of matches) {
    ids.add(Number(match[1]));
  }
}

const staticUrls = [
  'https://astonicmart.com/',
  'https://astonicmart.com/shopcategories'
];

const productUrls = [...ids]
  .sort((a, b) => a - b)
  .map(id => `https://astonicmart.com/product/${id}`);

const urls = [...staticUrls, ...productUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(outputFile, xml, 'utf8');

console.log(`Sitemap created successfully.`);
console.log(`Unique product URLs: ${ids.size}`);
console.log(`Total URLs: ${urls.length}`);
console.log(`File: ${outputFile}`);
