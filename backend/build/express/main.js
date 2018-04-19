'use strict';

var _init = require('../database/init');

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

(0, _init2.default)().then(function (message) {
    console.log(message);

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
});