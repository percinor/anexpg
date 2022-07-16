"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var spgdb = require("./spgdb");
var port = process.env['PORT'] || 3000;
var server = express();
server.use(bodyParser.json({ limit: '1mb' }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('dist/anexpg'));
//server.use('/static', express.static(path.join(__dirname, 'public')))
var pgdb = new spgdb.spgdb;
server.post('/api', function (req, res) {
    var para = req.body;
    pgdb.sqlexe(para, res);
});
server.get('*', function (req, res) {
    var options = {
        root: path.join(__dirname, 'dist/anexpg')
    };
    return res.sendFile('index.html', options);
});
server.listen(port, function () { console.log('server is running'); });
