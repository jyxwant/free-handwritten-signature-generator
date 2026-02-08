const sharp = require('sharp');
const fs = require('fs');

const inputPath = 'blog/Generated Image February 08, 2026 - 10_44AM.jpeg';
const outputPath = 'blog/signature-transparent-comparison.webp';

sharp(inputPath)
  .webp({ quality: 85 })
  .toFile(outputPath)
  .then(() => {
    console.log('✓ Successfully converted to WebP:', outputPath);
    // Delete the original file
    fs.unlinkSync(inputPath);
    console.log('✓ Deleted original JPEG file');
  })
  .catch(err => {
    console.error('Error converting image:', err);
  });
