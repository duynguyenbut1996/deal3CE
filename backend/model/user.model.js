const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: {
        type: Number,
        unique: true,
        require: true
    },
    userCategoryId: {
        type: Number,
        unique: true,
        require: true
    },
    name: {
        type: String,
        unique: false,
        require: true
    },
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        unique: false,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    createAt: Date,
    lastLogin: Date,
    active: {
        type: Number,
        unique: false,
        require: false
    }
});

const User = mongoose.model('User', userSchema);

export default User;
