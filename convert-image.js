const fs = require('fs');
const path = require('path');

// 简单的 JPEG 到 WebP 转换（使用 Canvas API 如果可用）
const inputPath = 'blog/Generated Image February 09, 2026 - 9_03PM.jpeg';
const outputPath = 'blog/blue-ink-signature-comparison.webp';

console.log('Note: Node.js does not have built-in WebP conversion.');
console.log('Please use one of these methods:');
console.log('');
console.log('1. Online converter: https://cloudconvert.com/jpeg-to-webp');
console.log('2. Install sharp: npm install sharp');
console.log('3. Use ImageMagick: magick convert input.jpeg output.webp');
console.log('');
console.log('For now, I will rename the file to a simpler name:');

const newJpegPath = 'blog/blue-ink-signature-comparison.jpg';
fs.copyFileSync(inputPath, newJpegPath);
console.log(`Copied to: ${newJpegPath}`);
console.log('');
console.log('To convert to WebP with sharp, run:');
console.log('npm install sharp');
console.log('node convert-with-sharp.js');
