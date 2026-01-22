# 推送到 GitHub 的步驟

## 方法一：使用指令列（如果你知道 GitHub 帳號）

1. 在 GitHub 建立新 repository（如果還沒建立）
   - 前往：https://github.com/new
   - Repository 名稱：`sdgs-tech-showcase`（或你喜歡的名稱）
   - 選擇 Public
   - 不要勾選任何初始化選項
   - 點擊 "Create repository"

2. 執行以下指令（替換 `<username>` 和 `<repo-name>`）：

```bash
cd ~/Desktop/happyschool
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

## 方法二：使用 GitHub Desktop

1. 開啟 GitHub Desktop
2. File > Add Local Repository
3. 選擇 `~/Desktop/happyschool` 資料夾
4. 點擊 "Publish repository"
5. 輸入 repository 名稱
6. 選擇 Public
7. 點擊 "Publish repository"

## 方法三：手動複製指令

在 GitHub 建立 repository 後，GitHub 會顯示推送指令，複製並執行即可。
