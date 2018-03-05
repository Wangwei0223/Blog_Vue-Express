const utility = require('utility');
const crypto = require('crypto');
const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const eventproxy = require('eventproxy');
const url = require('url');
const async = require('async');


module.exports = function (app) {
    // 不同路由
    app.get('/', (req, res) => {
        res.sendFile('/index.html',{root: path.join(__dirname,'../')});
    });

    app.get('/JavaScript', (req, res) => {
        res.sendFile('/JavaScript.html',{root: path.join(__dirname,'../public/html')});
    });

    app.get('/Network', (req, res) => {
        res.sendFile('/Network.html',{root: path.join(__dirname,'../public/html')});
    });

    app.get('/Linux', (req, res) => {
        res.sendFile('/linux.html',{root: path.join(__dirname,'../public/html')});
    });

    app.get('/Axios', (req, res) => {
        res.send('');
    });
};
