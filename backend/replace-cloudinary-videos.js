const fs = require('fs');
const path = require('path');

const dataRoot = path.join(
  __dirname,
  '..',
  'src',
  'app',
  'core',
  'data'
);

const mappingFile = path.join(
  __dirname,
  'cloudinary-video-mapping.json'
);

function loadMapping() {
  if (!fs.existsSync(mappingFile)) {
    throw new Error(
      `Mapping file not found: ${mappingFile}`
    );
  }

  return JSON.parse(
    fs.readFileSync(mappingFile, 'utf8')
  );
}

function getDataFiles(dir) {
  let files = [];

  for (const item of fs.readdirSync(dir, {
    withFileTypes: true
  })) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      files = files.concat(
        getDataFiles(fullPath)
      );
    }

    if (
      item.isFile() &&
      item.name.endsWith('.data.ts')
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

function replaceVideoReferences() {

  const mapping = loadMapping();

  const dataFiles = getDataFiles(dataRoot);

  console.log(
    `\nData files found: ${dataFiles.length}`
  );

  let totalReplacements = 0;

  for (const file of dataFiles) {

    let content =
      fs.readFileSync(file, 'utf8');

    const originalContent = content;

    for (const [fileName, cloudinaryUrl] of Object.entries(mapping)) {

      const escapedFileName =
        fileName.replace(
          /[.*+?^${}()|[\]\\]/g,
          '\\$&'
        );

      /*
       * Replace references regardless of whether
       * the old path was assets/video/... or
       * assets/img/...
       *
       * Only the actual filename is matched.
       */
      const pattern = new RegExp(
        `['"](?:assets\\/video|assets\\/img)\\/[^'"]*${escapedFileName}['"]`,
        'g'
      );

      const matches =
        content.match(pattern);

      if (!matches) {
        continue;
      }

      content =
        content.replace(
          pattern,
          `'${cloudinaryUrl}'`
        );

      console.log(
        `\nFILE: ${file}`
      );

      console.log(
        `VIDEO: ${fileName}`
      );

      console.log(
        `REPLACEMENTS: ${matches.length}`
      );

      totalReplacements +=
        matches.length;
    }

    if (content !== originalContent) {

      fs.writeFileSync(
        file,
        content,
        'utf8'
      );

      console.log(
        'SAVED'
      );
    }
  }

  console.log(
    '\n======================================'
  );

  console.log(
    'CLOUDINARY VIDEO REPLACEMENT RESULT'
  );

  console.log(
    '======================================'
  );

  console.log(
    `Total replacements: ${totalReplacements}`
  );

  console.log(
    '\nNo videos were deleted.'
  );

  console.log(
    'No mapping file was changed.'
  );
}

try {
  replaceVideoReferences();
} catch (error) {

  console.error(
    '\nFATAL ERROR:'
  );

  console.error(
    error.message || error
  );

  process.exit(1);
}