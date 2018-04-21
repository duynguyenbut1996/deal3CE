const mongoose = require('mongoose')

const userCategorySchame = mongoose.Schema({
    userId: {
        type: Number,
        unique: true,
        require: true
    },
    userName: {
        type: String,
        unique: true,
        require: true
    }
})

const UserCategory = mongoose.model('UserCategory', userCategorySchame);

export default UserCategory;
