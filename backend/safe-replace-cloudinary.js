const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const dataFolder = path.join(
  projectRoot,
  'src',
  'app',
  'core',
  'data'
);

const mappingFile = path.join(
  __dirname,
  'cloudinary-image-mapping.json'
);

const backupFolder = path.join(
  projectRoot,
  'backup-before-cloudinary'
);

console.log('======================================');
console.log('ASTONIC MART CLOUDINARY REPLACEMENT');
console.log('======================================');

if (!fs.existsSync(mappingFile)) {
  console.error('ERROR: cloudinary-image-mapping.json not found.');
  process.exit(1);
}

const mapping = JSON.parse(
  fs.readFileSync(mappingFile, 'utf8')
);

const mappingEntries = Object.entries(mapping);

console.log(
  `Cloudinary mappings loaded: ${mappingEntries.length}`
);

if (mappingEntries.length === 0) {
  console.error('ERROR: Mapping file is empty.');
  process.exit(1);
}

// --------------------------------------------------
// CREATE BACKUP
// --------------------------------------------------

if (fs.existsSync(backupFolder)) {
  console.error(
    '\nERROR: Backup folder already exists:'
  );

  console.error(backupFolder);

  console.error(
    '\nThis is a safety protection.'
  );

  console.error(
    'The script will NOT overwrite an existing backup.'
  );

  process.exit(1);
}

fs.mkdirSync(
  backupFolder,
  { recursive: true }
);

console.log('\nCreating backup...');

const dataFiles = fs
  .readdirSync(dataFolder)
  .filter(file => file.endsWith('.ts'));

for (const file of dataFiles) {

  const source = path.join(
    dataFolder,
    file
  );

  const destination = path.join(
    backupFolder,
    file
  );

  fs.copyFileSync(
    source,
    destination
  );

  console.log(`BACKUP: ${file}`);
}

console.log(
  `\nBackup created: ${backupFolder}`
);

// --------------------------------------------------
// REPLACEMENT
// --------------------------------------------------

let totalReplacements = 0;
let filesChanged = 0;

for (const file of dataFiles) {

  const filePath = path.join(
    dataFolder,
    file
  );

  let content = fs.readFileSync(
    filePath,
    'utf8'
  );

  const originalContent = content;

  for (const [localPath, cloudinaryUrl] of mappingEntries) {

    const escapedPath =
      localPath.replace(
        /[.*+?^${}()|[\]\\]/g,
        '\\$&'
      );

    const regex =
      new RegExp(escapedPath, 'g');

    const matches =
      content.match(regex);

    if (matches) {

      content =
        content.replace(
          regex,
          cloudinaryUrl
        );

      totalReplacements += matches.length;
    }
  }

  if (content !== originalContent) {

    fs.writeFileSync(
      filePath,
      content,
      'utf8'
    );

    filesChanged++;

    console.log(
      `UPDATED: ${file}`
    );
  }
}

// --------------------------------------------------
// RESULT
// --------------------------------------------------

console.log('\n======================================');
console.log('CLOUDINARY REPLACEMENT COMPLETE');
console.log('======================================');

console.log(
  `Data files changed : ${filesChanged}`
);

console.log(
  `References replaced: ${totalReplacements}`
);

console.log(
  `Cloudinary mappings : ${mappingEntries.length}`
);

console.log(
  `Backup location     : ${backupFolder}`
);

console.log('\nIMPORTANT:');

console.log(
  '309 missing local images were NOT removed.'
);

console.log(
  'The missing video was NOT changed.'
);

console.log(
  'The one invalid Cloudinary image was NOT changed.'
);

console.log(
  'Local image files were NOT deleted.'
);