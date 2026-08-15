const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const dataRoot = path.join(
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

function loadMapping() {
  return JSON.parse(
    fs.readFileSync(mappingFile, 'utf8')
  );
}

function findImageReferences(content) {

  const matches = content.match(
    /assets\/img\/[^'"`]+/g
  );

  if (!matches) {
    return [];
  }

  return matches.map(
    value => value.trim()
  );
}

function main() {

  console.log('======================================');
  console.log('ASTONIC MART CLOUDINARY DRY RUN');
  console.log('======================================');

  const mapping = loadMapping();

  const files = fs
    .readdirSync(dataRoot)
    .filter(file =>
      file.endsWith('.data.ts')
    );

  console.log(
    `Data files found: ${files.length}`
  );

  let totalReferences = 0;
  let mapped = 0;
  let unmapped = 0;

  const unmappedImages = new Set();

  for (const file of files) {

    const filePath = path.join(
      dataRoot,
      file
    );

    const content =
      fs.readFileSync(
        filePath,
        'utf8'
      );

    const references =
      findImageReferences(content);

    console.log(
      `\n${file}: ${references.length} image references`
    );

    for (const reference of references) {

      totalReferences++;

      if (mapping[reference]) {
        mapped++;
      } else {
        unmapped++;
        unmappedImages.add(reference);
      }
    }
  }

  console.log('\n======================================');
  console.log('DRY RUN RESULT');
  console.log('======================================');

  console.log(
    `Total image references : ${totalReferences}`
  );

  console.log(
    `Mapped to Cloudinary   : ${mapped}`
  );

  console.log(
    `Not mapped             : ${unmapped}`
  );

  console.log(
    `Unique unmapped images : ${unmappedImages.size}`
  );

  console.log('\nIMPORTANT:');

  console.log(
    'NO Angular data files were changed.'
  );

  console.log(
    'NO images were deleted.'
  );

  console.log(
    'NO Cloudinary uploads were performed.'
  );

  console.log('\nFirst unmapped images:');

  [...unmappedImages]
    .slice(0, 20)
    .forEach(image =>
      console.log(image)
    );
}

main();