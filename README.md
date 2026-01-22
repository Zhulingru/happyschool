# SDGs 科技素養專題成果展 | Tech Literacy Project Showcase

一個太陽龐克風格的一頁式展示網站，用於展示學生的 Delightex 作品。

A steampunk-styled single-page showcase website for displaying student Delightex projects.

## 🚀 功能特色 | Features

- ✅ **響應式設計** | Responsive Design - 手機優先，支援各種裝置
- ✅ **雙語支援** | Bilingual Support - 中文/英文切換
- ✅ **SDG 篩選** | SDG Filtering - 依永續發展目標篩選作品
- ✅ **太陽龐克風格** | Steampunk Style - 獨特的視覺設計
- ✅ **快速載入** | Fast Loading - 優化效能，適合 QR Code 掃描
- ✅ **PWA 支援** | PWA Support - 可加入主畫面
- ✅ **無障礙設計** | Accessibility - 符合基本無障礙標準

## 📁 專案結構 | Project Structure

```
happyschool/
├── index.html          # 主頁面
├── styles.css          # 樣式表
├── app.js              # 主要 JavaScript
├── manifest.json       # PWA 設定
├── README.md           # 說明文件
├── data/
│   └── projects.json   # 作品資料
└── assets/
    ├── thumbs/         # 作品縮圖
    ├── sdgs/           # SDG 圖示（可選）
    ├── team/           # 教師照片
    └── icon-192.png    # PWA 圖示
    └── icon-512.png    # PWA 圖示
```

## 🛠️ 設定與部署 | Setup & Deployment

### 1. 更新作品資料 | Update Project Data

編輯 `data/projects.json`，填入實際的作品資訊：

```json
{
  "id": "p1",
  "title": {
    "zh": "作品標題（中文）",
    "en": "Project Title (English)"
  },
  "sdgs": [11, 12],
  "summary": {
    "zh": "作品簡介（中文）",
    "en": "Project Summary (English)"
  },
  "thumb": "assets/thumbs/p1.webp",
  "delightex_url": "https://your-delightex-url.com",
  "mode": "external",
  "credits": {
    "zh": "第 1 組",
    "en": "Group 1"
  },
  "tags": {
    "zh": ["標籤1", "標籤2"],
    "en": ["Tag1", "Tag2"]
  }
}
```

### 2. 準備圖片資源 | Prepare Images

- **作品縮圖** | Project Thumbnails
  - 放置於 `assets/thumbs/`
  - 建議尺寸：800x450px (16:9)
  - 格式：WebP（提供 JPG/PNG 後備）
  - 檔案大小：< 200KB

- **教師照片** | Teacher Photos
  - 放置於 `assets/team/`
  - 建議尺寸：300x300px（正方形）
  - 格式：JPG/PNG

### 3. GitHub Pages 部署 | GitHub Pages Deployment

#### 方法一：使用 main 分支根目錄

1. 在 GitHub 建立新 repository
2. 將所有檔案推送到 main 分支
3. 進入 Settings > Pages
4. Source 選擇 "Deploy from a branch"
5. Branch 選擇 "main" 和 "/ (root)"
6. 儲存後等待幾分鐘，網站即可在 `https://<username>.github.io/<repo>/` 上線

#### 方法二：使用 /docs 資料夾

1. 建立 `docs` 資料夾
2. 將所有檔案複製到 `docs/`
3. 推送到 GitHub
4. Settings > Pages > Source 選擇 "/docs folder"

### 4. 更新 Delightex 連結 | Update Delightex Links

在 `data/projects.json` 中更新每個作品的 `delightex_url` 欄位。

### 5. 自訂內容 | Customize Content

- **課程摘要**：編輯 `index.html` 中的 summary section
- **教師簡介**：編輯 `index.html` 中的 team section
- **翻譯文字**：編輯 `app.js` 中的 `translations` 物件

## 🎨 自訂樣式 | Customize Styles

主要顏色變數在 `styles.css` 的 `:root` 中定義：

```css
:root {
    --color-brass: #D4AF37;    /* 黃銅色 */
    --color-copper: #CD853F;   /* 銅色 */
    --color-bronze: #8B4513;   /* 青銅色 */
    --color-dark: #1a1a1a;     /* 深色背景 */
    /* ... */
}
```

## 📱 QR Code 設定 | QR Code Setup

1. 使用 QR Code 產生器（如 [QR Code Generator](https://www.qr-code-generator.com/)）
2. 輸入 GitHub Pages 網址
3. 測試在不同裝置上掃描
4. 建議使用短網址服務（如 bit.ly）以便未來更新

## 🔧 技術細節 | Technical Details

- **框架** | Framework: Vanilla JavaScript（無框架）
- **字型** | Fonts: Orbitron（標題）、Cinzel（內文）
- **圖片格式** | Image Format: WebP with fallback
- **瀏覽器支援** | Browser Support: 現代瀏覽器（Chrome, Firefox, Safari, Edge）

## 📝 待辦事項 | TODO

- [ ] 替換佔位圖片為實際作品縮圖
- [ ] 更新 Delightex 連結
- [ ] 填入實際課程摘要
- [ ] 更新教師照片與簡介
- [ ] 測試所有功能
- [ ] 產生 QR Code

## 📄 授權 | License

本專案僅供教育用途。

This project is for educational purposes only.

## 👥 聯絡 | Contact

如有問題，請聯絡課程教師。

For questions, please contact the course instructor.

---

**最後更新** | Last Updated: 2024
