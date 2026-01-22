# 部署指南 | Deployment Guide

## 🚀 快速部署到 GitHub Pages

### 步驟 1: 建立 GitHub Repository

1. 前往 [GitHub](https://github.com) 並登入
2. 點擊右上角 "+" > "New repository"
3. Repository 名稱建議：`sdgs-tech-showcase` 或 `happyschool`
4. 選擇 Public（GitHub Pages 免費版需要 Public）
5. **不要**勾選 "Initialize with README"（因為我們已經有檔案了）
6. 點擊 "Create repository"

### 步驟 2: 上傳檔案到 GitHub

#### 方法 A: 使用 GitHub Desktop（推薦新手）

1. 下載並安裝 [GitHub Desktop](https://desktop.github.com/)
2. 開啟 GitHub Desktop
3. File > Add Local Repository
4. 選擇 `~/Desktop/happyschool` 資料夾
5. 在左側輸入 commit message，例如："Initial commit: SDGs Tech Showcase"
6. 點擊 "Commit to main"
7. 點擊 "Publish repository"
8. 選擇剛才建立的 repository
9. 點擊 "Publish repository"

#### 方法 B: 使用 Git 指令列

```bash
cd ~/Desktop/happyschool

# 初始化 Git（如果還沒初始化）
git init

# 加入所有檔案
git add .

# 建立第一次 commit
git commit -m "Initial commit: SDGs Tech Showcase"

# 加入遠端 repository（替換 <username> 和 <repo-name>）
git remote add origin https://github.com/<username>/<repo-name>.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步驟 3: 啟用 GitHub Pages

1. 前往你的 GitHub repository 頁面
2. 點擊 "Settings"（設定）
3. 在左側選單找到 "Pages"
4. 在 "Source" 區塊：
   - 選擇 "Deploy from a branch"
   - Branch 選擇 "main"
   - Folder 選擇 "/ (root)"
5. 點擊 "Save"
6. 等待 1-2 分鐘，GitHub 會顯示你的網站網址：
   - `https://<username>.github.io/<repo-name>/`

### 步驟 4: 測試網站

1. 開啟網站網址
2. 測試所有功能：
   - ✅ 語言切換（中/英）
   - ✅ 作品卡片顯示
   - ✅ SDG 篩選
   - ✅ 點擊作品開啟 Delightex
   - ✅ 分享功能
   - ✅ 手機響應式設計

### 步驟 5: 產生 QR Code

1. 使用 QR Code 產生器：
   - [QR Code Generator](https://www.qr-code-generator.com/)
   - [QRCode Monkey](https://www.qrcode-monkey.com/)
2. 輸入你的 GitHub Pages 網址
3. 下載 QR Code 圖片
4. 可以列印或顯示在活動現場

## 📝 更新內容

### 更新作品資料

1. 編輯 `data/projects.json`
2. 更新 Delightex 連結、標題、簡介等
3. 使用 Git 提交變更：
   ```bash
   git add data/projects.json
   git commit -m "Update project data"
   git push
   ```
4. GitHub Pages 會自動更新（可能需要幾分鐘）

### 替換圖片

1. 準備實際圖片：
   - 作品縮圖：800x450px，WebP 或 JPG
   - 教師照片：300x300px，JPG 或 PNG
2. 替換 `assets/thumbs/` 和 `assets/team/` 中的檔案
3. 更新 `data/projects.json` 中的圖片路徑（如果需要）
4. 提交並推送變更

## 🔧 疑難排解

### 網站無法顯示

- 檢查 GitHub Pages 設定是否正確
- 確認 repository 是 Public
- 等待 5-10 分鐘讓 GitHub 處理

### 圖片無法載入

- 檢查圖片路徑是否正確
- 確認圖片檔案已上傳到 GitHub
- 檢查檔案名稱大小寫（GitHub 在某些情況下區分大小寫）

### 功能無法運作

- 開啟瀏覽器開發者工具（F12）檢查錯誤
- 確認所有 JavaScript 檔案已正確載入
- 檢查 `data/projects.json` 格式是否正確

## 📱 測試清單

部署後請測試：

- [ ] 桌面版瀏覽器（Chrome, Firefox, Safari）
- [ ] 手機瀏覽器（iOS Safari, Android Chrome）
- [ ] 平板瀏覽器
- [ ] 語言切換功能
- [ ] SDG 篩選功能
- [ ] 作品連結開啟
- [ ] 分享功能
- [ ] QR Code 掃描

## 🎯 下一步

1. ✅ 替換佔位圖片為實際作品縮圖
2. ✅ 更新 Delightex 連結
3. ✅ 填入實際課程摘要
4. ✅ 更新教師照片
5. ✅ 產生並測試 QR Code
6. ✅ 在活動現場測試

---

**需要幫助？** 請參考 [README.md](README.md) 或聯絡課程教師。
