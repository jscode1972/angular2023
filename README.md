## 接下來呢?
* layout 切換
* 做 material tabs
* 元件練習 
* weblink 小題目太難維護, 改回各單元
*

## npm install
* $ npm i admin-lte@^3.2 (--save 已是預設不用加)
* $ ng add @angular/material (不是 npm!!)


## 設定 angular.json 
* 加入 CSS (font-awosome / adminlte ) 複製相對路徑,不要傻傻敲字, adminlte.js 就不加入
* "./node_modules/adminlte/dist/css/AdminLTE.min.css"
* adminlte.*.js 不要用


### 常用指令
- git add .
- git status
- git commit -m "註解"
- git remote add origin https://github.com/(你的帳號)/(你的專案名稱)
- git push -u origin master  ### 此指令不行
- git push -u origin         ### 改用





[看看人家玩什麼](https://stackoverflow.com/questions/74845036/what-version-of-angular-material-do-i-need)
```
"chart.js": "^3.6.0",
"chartjs-plugin-zoom": "^1.2.1",
"file-saver": "^2.0.5",
"ng2-charts": "^3.0.0-rc.3",
"ngx-cookie-service": "12.0.3",
```

```
### 初建指令
…or create a new repository on the command line
echo "# Angular2024" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jscode1972/Angular2024.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/jscode1972/Angular2024.git
git branch -M main
git push -u origin main

### 常用指令
- git add .
- git status
- git commit -m "註解"
- git remote add origin https://github.com/(你的帳號)/(你的專案名稱)
- git push -u origin master  ### 此指令不行
- git push -u origin         ### 改用

```
├── src
│   ├── app
│   │   ├── admin 
│   │   │   ├── directives
│   │   │   ├── pages
│   │   │   │   ├── dashboard
│   │   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── rights
│   │   │   │   │   ├── rights.component.ts
│   │   │   │   ├── user
│   │   │   │   │   ├── user.component.ts
│   │   │   │   ├── admin.component.ts
│   │   │   │   ├── admin.component.html
│   │   │   │   ├── admin.component.css
│   │   │   │   ├── index.ts
│   │   │   ├── pipes
│   │   │   ├── admin.module.ts
│   │   │   ├── admin.routing.module.ts
│   │   │   ├── index.ts
│   │   ├── core
│   │   │   ├── models
│   │   │   │   ├── index.ts
│   │   │   │   ├── repos.ts
│   │   │   ├── services
│   │   │   │   ├── github.service.ts
│   │   │   │   ├── index.ts
│   │   │   ├── core.module.ts
│   │   │   ├── index.ts
│   │   ├── github
│   │   │   ├── pages
│   │   │   │   ├── repolist
│   │   │   │   │   ├── repolist.component.ts
│   │   │   │   │   ├── repolist.component.html
│   │   │   ├── github.routing.module.ts
│   │   │   ├── github.module.ts
│   │   │   ├── index.ts
│   │   ├── home
│   │   │   ├── pages
│   │   │   │   ├── aboutus
│   │   │   │   │   ├── about-us.component.ts
│   │   │   │   ├── contactus
│   │   │   │   │   ├── contact-us.component.ts
│   │   │   │   ├── home
│   │   │   │   │   ├── home-us.component.ts
│   │   │   │   ├── index.ts
│   │   │   ├── home-routing.module.ts
│   │   │   ├── home.module.ts
│   │   │   ├── index.ts
│   │   ├── shared
│   │   │   ├── layout
│   │   │   │   ├── footer
│   │   │   │   │   ├── footer.component.ts
│   │   │   │   │   ├── footer.component.html
│   │   │   │   ├── header
│   │   │   │   │   ├── header.component.ts
│   │   │   │   │   ├── header.component.html
│   │   │   ├── index.ts
│   ├── app-routing.module.ts  
│   ├── app-wildcard-routing.module.ts
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── not-found.component.ts
```