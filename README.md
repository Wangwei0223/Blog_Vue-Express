# Blog_Vue-Express
使用Vue + Express 搭建简单Blog

使用方法
默认已经安装node.js 环境
- clone 到 指定文件夹 /Demo
- cd Demo
- npm install
- node app.js 
- 服务器上 使用pm2 或者是 forever sudo npm install pm2 -g 或 sudo npm install forever -g 
- pm2 start app.js 或 forever start app.js

默认监听 3000端口 [公网网址](http://118.89.242.205:3000) (对!没买域名...)

若使用vue-cli 和 webpack: 即把npm run build 之后的文件 放入 public, 使用Express托管即可
