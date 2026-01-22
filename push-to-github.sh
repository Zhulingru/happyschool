#!/bin/bash

# 推送到 GitHub 的腳本
# 使用方式：在終端機執行：./push-to-github.sh

echo "🚀 SDGs Tech Showcase - 推送到 GitHub"
echo "=================================="
echo ""

# 檢查是否已經有 remote
if git remote | grep -q origin; then
    echo "✅ 已設定 remote，直接推送..."
    git push -u origin main
    exit 0
fi

# 詢問 GitHub 資訊
echo "請輸入以下資訊："
echo ""
read -p "GitHub 使用者名稱 (username): " GITHUB_USER
read -p "Repository 名稱 (例如: sdgs-tech-showcase): " REPO_NAME

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
    echo "🌐 你的網站網址：https://${GITHUB_USER}.github.io/${REPO_NAME}/"
    echo ""
    echo "📋 下一步："
    echo "1. 前往 https://github.com/${GITHUB_USER}/${REPO_NAME}/settings/pages"
    echo "2. Source 選擇 'Deploy from a branch'"
    echo "3. Branch 選擇 'main' 和 '/ (root)'"
    echo "4. 點擊 Save，等待幾分鐘後網站就會上線！"
else
    echo ""
    echo "❌ 推送失敗，請確認："
    echo "1. Repository 是否已在 GitHub 建立"
    echo "2. Repository 名稱是否正確"
    echo "3. 是否有權限推送到該 repository"
fi
