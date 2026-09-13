const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'app', 'core', 'data');

const files = fs.readdirSync(dataDir).filter(file =>
  file.endsWith('.data.ts')
);

const ids = new Set();

for (const file of files) {
  const source = fs.readFileSync(path.join(dataDir, file), 'utf8');

  for (const match of source.matchAll(/\bid\s*:\s*(\d+)/g)) {
    ids.add(Number(match[1]));
  }
}

const sortedIds = [...ids].sort((a, b) => a - b);

const output = sortedIds
  .map(id => `/product/${id}`)
  .join('\n');

fs.writeFileSync(
  path.join(__dirname, 'prerender-routes.txt'),
  output + '\n'
);

console.log(`Created ${sortedIds.length} product routes.`);
