const mongoose = require('mongoose');

const PostSchame = new mongoose.Schema({
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
})

const Post = mongoose.model('Post', PostSchame)

export default Post;