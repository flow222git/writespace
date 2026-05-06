# 心理位移書寫空間

一個純前端的心理位移書寫工具。使用者依序經過「主題、我、你、他 / 她、回到我、小行動」，最後產生一份完整的整理筆記。

這個版本不需要後端、不需要 API key，也不會連線到 AI 服務。書寫內容只會保存在使用者自己的瀏覽器 `localStorage`，完成一輪後會自動加入「書寫記錄」，可用月曆與搜尋回顧、翻閱、編輯、刪除，並可下載成 Markdown。

## 檔案

部署 GitHub Pages 只需要：

```text
index.html
styles.css
app.js
```

## 本機預覽

可以直接打開 `index.html`，或用簡單靜態伺服器：

```bash
python3 -m http.server 4173
```

然後打開：

```text
http://127.0.0.1:4173
```

## GitHub Pages 部署

1. 建立 GitHub repo
2. 上傳 `index.html`、`styles.css`、`app.js`
3. 到 repo 的 `Settings` → `Pages`
4. Source 選擇 `Deploy from a branch`
5. Branch 選擇 `main` / root
6. 儲存後等待 GitHub Pages 產生網址
