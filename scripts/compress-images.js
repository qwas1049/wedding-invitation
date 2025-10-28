// scripts/compress-images.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.resolve('public/images');
const desktopDir = path.resolve('public/images/desktop');
const mobileDir = path.resolve('public/images/mobile');

// 建立輸出資料夾
[desktopDir, mobileDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 讀取所有 jpg/jpeg/png
const files = fs.readdirSync(inputDir).filter(f =>
  f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')
);

async function compress() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);

    // 桌機版 1920px
    await sharp(inputPath)
      .resize({ width: 1920 })
      .jpeg({ quality: 75 })
      .toFile(path.join(desktopDir, file));

    // 手機版 800px
    await sharp(inputPath)
      .resize({ width: 800 })
      .jpeg({ quality: 75 })
      .toFile(path.join(mobileDir, file));

    console.log(`✅ 已處理 ${file}`);
  }
  console.log('🎉 全部完成！');
}

compress().catch(console.error);
