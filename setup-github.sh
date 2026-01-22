#!/bin/bash

echo "🚀 設定 GitHub Repository 並推送專案"
echo "======================================"
echo ""

# 檢查是否已有 remote
if git remote | grep -q origin; then
    echo "✅ 已設定 remote，直接推送..."
    git push -u origin main
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ 推送成功！"
        REMOTE_URL=$(git remote get-url origin)
        echo "🌐 Repository: $REMOTE_URL"
    fi
    exit 0
fi

echo "請選擇："
echo "1. 我已經在 GitHub 建立了 repository"
echo "2. 我還沒建立，需要引導"
echo ""
read -p "請輸入選項 (1 或 2): " choice

if [ "$choice" = "1" ]; then
    echo ""
    read -p "請輸入 GitHub 使用者名稱: " GITHUB_USER
    read -p "請輸入 Repository 名稱: " REPO_NAME
    
    if [ -z "$GITHUB_USER" ] || [ -z "$REPO_NAME" ]; then
        echo "❌ 錯誤：請輸入完整資訊"
        exit 1
    fi
    
    echo ""
    echo "📝 設定 remote..."
    git remote add origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git
    
    echo "📤 推送到 GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ 成功推送到 GitHub！"
        echo "🌐 Repository: https://github.com/${GITHUB_USER}/${REPO_NAME}"
        echo "🌐 網站網址: https://${GITHUB_USER}.github.io/${REPO_NAME}/"
        echo ""
        echo "📋 下一步：啟用 GitHub Pages"
        echo "1. 前往: https://github.com/${GITHUB_USER}/${REPO_NAME}/settings/pages"
        echo "2. Source 選擇 'Deploy from a branch'"
        echo "3. Branch 選擇 'main'，Folder 選擇 '/ (root)'"
        echo "4. 點擊 Save"
    else
        echo ""
        echo "❌ 推送失敗，請確認："
        echo "1. Repository 是否已在 GitHub 建立"
        echo "2. Repository 名稱是否正確"
        echo "3. 是否有權限推送到該 repository"
    fi
    
elif [ "$choice" = "2" ]; then
    echo ""
    echo "📝 請按照以下步驟建立 repository："
    echo ""
    echo "1. 前往: https://github.com/new"
    echo "2. Repository 名稱建議: sdgs-tech-showcase"
    echo "3. 選擇 Public（GitHub Pages 需要）"
    echo "4. 不要勾選任何初始化選項"
    echo "5. 點擊 'Create repository'"
    echo ""
    echo "建立完成後，請重新執行此腳本並選擇選項 1"
    echo ""
    read -p "按 Enter 鍵開啟 GitHub 建立頁面..."
    open "https://github.com/new"
else
    echo "❌ 無效的選項"
    exit 1
fi
