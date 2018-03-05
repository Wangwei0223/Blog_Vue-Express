/**
 * 安装Express cd到要安装的文件夹 npm init
 * npm install express --registry=https://registry.npm.taobao.org
 * touch app.js
 */

//引入一个模块
const express = require('express');
// 调用express实例
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
const routes = require(__dirname + '/routes')(app);

app.listen(3002, () => {
    console.log('app is listening at port 3000');
});


