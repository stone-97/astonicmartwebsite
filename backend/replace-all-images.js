const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, '..', 'src', 'app', 'core', 'data');
const referencesFile = path.join(__dirname, 'image-references.txt');

const references = fs.readFileSync(referencesFile, 'utf8')
  .split(/\r?\n/)
  .filter(Boolean);

let totalReplacements = 0;
let filesChanged = 0;

console.log('Starting image replacement...');
console.log(`References loaded: ${references.length}`);

const dataFiles = fs.readdirSync(dataFolder)
  .filter(file => file.endsWith('.ts'));

for (const file of dataFiles) {
  const filePath = path.join(dataFolder, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  for (const line of references) {
    const separator = ' => ';

    if (!line.includes(separator)) {
      continue;
    }

    const [localPath, cloudinaryUrl] = line.split(separator);

    if (!localPath || !cloudinaryUrl) {
      continue;
    }

    const escapedPath = localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const regex = new RegExp(escapedPath, 'g');

    const matches = content.match(regex);

    if (matches) {
      content = content.replace(regex, cloudinaryUrl);
      totalReplacements += matches.length;
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesChanged++;

    console.log(`UPDATED: ${file}`);
  }
}

console.log('\n==============================');
console.log('REPLACEMENT COMPLETE');
console.log('==============================');
console.log(`Data files changed: ${filesChanged}`);
console.log(`Image references replaced: ${totalReplacements}`);