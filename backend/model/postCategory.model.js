const mongoose = require('mongoose');

const postCategorySchame = mongoose.Schema({
    postCategoryId : {
        type: Number,
        unique: true,
        require: true
    },
    postCategoryName: {
        type: String,
        unique: true,
        require: true
    },
    description: {
        type: String,
        unique: false,
        require: false
    }
})

const PostCategory = mongoose.model('PostCategory', postCategorySchame);

export default PostCategory;
