# 婚禮邀約網站

簡約優雅的婚禮邀約網站模板

## 功能

✅ 首頁 - 新人照片、日期倒數計時器  
✅ 我們的故事 - 時間軸展示  
✅ 婚禮資訊 - 時間、地點、Google 地圖  
✅ 活動流程 - 儀式、宴客時間表  
✅ 相簿集 - 照片展示  
✅ 住宿交通 - 推薦飯店、交通資訊  

## 開始使用

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build
```

## 自訂內容

### 1. 修改婚禮日期
編輯 `src/components/Hero.tsx` 第 5 行：
```typescript
const weddingDate = new Date('2025-12-31T18:00:00'); // 改為你的婚禮日期
```

### 2. 修改新人名字
編輯 `src/components/Hero.tsx` 第 30 行：
```tsx
<h1 className="couple-names">新郎 & 新娘</h1>
```

### 3. 修改我們的故事
編輯 `src/components/OurStory.tsx` 的 `timeline` 陣列

### 4. 修改婚禮資訊
編輯 `src/components/WeddingInfo.tsx`：
- 日期、時間、地點
- Google 地圖嵌入連結

### 5. 修改活動流程
編輯 `src/components/Schedule.tsx` 的 `events` 陣列

### 6. 上傳照片
將照片放到 `public/photos/` 資料夾，然後修改 `src/components/Gallery.tsx` 的 `photos` 陣列

### 7. 修改住宿交通資訊
編輯 `src/components/Travel.tsx` 的 `hotels` 陣列和交通資訊

## 顏色主題

主要顏色定義在各個 CSS 檔案中：
- 主色：`#8b7355` (棕色)
- 輔助色：`#d4a574` (金色)
- 背景色：`#f9f7f4` (米白色)

可以全域搜尋替換這些顏色碼來改變主題色。

## 部署

### Vercel (推薦)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# 上傳 dist 資料夾到 Netlify
```

### GitHub Pages
```bash
npm run build
# 將 dist 資料夾內容推送到 gh-pages 分支
```

## 技術棧

- React 19
- TypeScript
- Vite
- CSS3

## License

MIT
