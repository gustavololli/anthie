import fs from 'fs';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

async function generateFavicons() {
  const svgBuffer = fs.readFileSync('./public/favicon.svg');

  console.log('Generating apple-touch-icon.png (180x180)...');
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('./public/apple-touch-icon.png');

  console.log('Generating icon-192.png (192x192)...');
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile('./public/icon-192.png');

  console.log('Generating icon-512.png (512x512)...');
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile('./public/icon-512.png');

  console.log('Generating temp 64x64 png for favicon.ico...');
  const iconBuffer = await sharp(svgBuffer)
    .resize(64, 64)
    .png()
    .toBuffer();

  console.log('Generating favicon.ico...');
  const icoBuffer = await pngToIco(iconBuffer);
  fs.writeFileSync('./public/favicon.ico', icoBuffer);

  console.log('Done!');
}

generateFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
