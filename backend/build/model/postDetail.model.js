'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongooes = require('mongoose');

var postDetailSchema = mongooes.Schema({
    orderId: {
        type: Number,
        unique: false,
        require: true
    },
    productType: {
        type: Number,
        unique: false,
        require: true
    },
    amount: {
        type: Number,
        unique: false,
        require: true
    },
    price: {
        type: Number,
        unique: false,
        require: true
    }
});

var PostDetail = mongooes.model('postDeltai', postDetailSchema);

exports.default = PostDetail;