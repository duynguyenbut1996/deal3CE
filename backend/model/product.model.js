const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    productId: {
        type: Number,
        unique: true,
        require: true
    },
    productName: {
        type: String,
        unique: false,
        require: true
    },
    category: {
        type: Number,
        unique: false,
        require: true
    },
    descriptionShort: {
        type: String,
        unique: false,
        require: false
    },
    description: {
        type: String,
        unique: false,
        require: false
    },
    price: {
        type: Number,
        unique: false,
        require: true
    },
    imges: {
        data: Buffer,
        contentType: String
    },
    newProduct: {
        type: Boolean,
        unique: false,
        require: false
    },
    views: {
        type: Number,
        unique: false,
        require: false
    },
    createAt: Date
})

const Product = mongoose.model('Product', ProductSchema);

export default Product;
