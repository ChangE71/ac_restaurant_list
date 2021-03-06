# 巴豆夭
採用 Node.js 和 Express 打造的餐廳清單網站，使用者可以在此站上查看餐廳訊息，並可透過餐廳名稱尋找餐廳資訊

## 專案畫面
![巴豆夭 首頁](https://user-images.githubusercontent.com/69975614/102311403-c741d200-3fa7-11eb-901e-2286a8a935da.png)
![巴豆夭 show頁面](https://user-images.githubusercontent.com/69975614/102311385-bdb86a00-3fa7-11eb-87fb-064a94ad80b8.png)
![巴豆夭 搜尋](https://user-images.githubusercontent.com/69975614/102311415-cc068600-3fa7-11eb-9913-f919229493b2.png)


## 功能描述 (features)
- 在首頁上查看所有餐廳列表
- 在首頁點選餐廳卡片檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map
- 透過搜尋功能找到特定餐廳
- 點選左上角"巴豆夭"返回首頁

## 環境建置(prerequisites)
- Node.js v10.15.0
- Express v4.17.1
- Express-handlebars v5.2.0

## 安裝與執行步驟 (installation and execution)

1. 將專案clone到本地環境
```
git clone https://github.com/ChangE71/ac_restaurant_list
```
2. 進入專案資料夾
```
cd restaurant_list
```
3. 至 package.json 檔案裝查看需安裝的npm套件，並搭配以下指令安裝
```
npm install
``` 
4. 安裝 nodemon 套件。提醒: 若先前在本地開發環境中以`<npm install -g nodemon>` 指令安裝過可跳至下步驟
5. 啟動伺服器，執行 app.js 檔案
  -  使用 `<nodemon app.js>` 或 `<npm run dev>` 執行
  -  使用 看到回應 "server is serving" 代表成功執行
6. 開啟任一瀏覽器瀏覽器輸入 http://localhost:3000 開始使用
