'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require('mongoose');

function connect() {
    return new Promise(function (resolve, reject) {
        var interval = setInterval(function () {
            mongoose.connect('mongodb://localhost/deal3ce', function (err) {
                if (!err) {
                    clearInterval(interval);
                    resolve('Connect database Success!!!');
                } else {
                    console.log('ping databse');
                }
            });
        }, 1000);
    });
}

exports.default = connect;