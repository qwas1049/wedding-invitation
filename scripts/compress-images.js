// scripts/compress-images.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.resolve('public/images/original');
const outputDir = path.resolve('public/images');

// 建立輸出資料夾
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// 讀取所有 jpg/jpeg/png
const files = fs.readdirSync(inputDir).filter(f =>
  f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')
);

async function compress() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);

    await sharp(inputPath)
      .resize({ width: 1920 })
      .jpeg({ quality: 90 })
      .toFile(path.join(outputDir, file));

    console.log(`✅ 已處理 ${file}`);
  }
  console.log('🎉 全部完成！');
}

compress().catch(console.error);
