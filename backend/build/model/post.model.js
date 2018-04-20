'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require('mongoose');

var PostSchame = new mongoose.Schema({
    postId: {
        type: Number,
        unique: true,
        require: true
    },
    postTypeId: {
        type: Number,
        unique: false,
        require: true
    },
    userId: {
        type: Number,
        unique: false,
        require: true
    },
    title: {
        type: String,
        unique: false,
        require: false
    },
    content: {
        type: String,
        unique: false,
        require: false
    },
    contentDetail: {
        type: String,
        unique: false,
        require: false
    },
    createAt: {
        type: Date
    },
    updateDate: {
        type: Date
    },
    count: {
        type: Number
    },
    publish: {
        type: Number
    },
    panigation: {
        type: Number
    }
});

var Post = mongoose.model('Post', PostSchame);

exports.default = Post;