const mongooes = require('mongoose');

const postDetailSchema = mongooes.Schema({
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
})

const PostDetail = mongooes.model('postDeltai', postDetailSchema);

export default PostDetail;