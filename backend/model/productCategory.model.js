const mongoose = require('mongoose');

const productCategorySchema = mongoose.Schema({
    productId: {
        type: Number,
        unique: true,
        require: true
    },
    name: {
        type: String,
        unique: false,
        require: true
    },
    description: {
        type: String,
        unique: false,
        require: false
    }
})

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

export default ProductCategory;
