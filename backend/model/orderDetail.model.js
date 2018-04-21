const mongooes = require('mongoose');

const orderDetailSchema = mongooes.Schema({
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

const OrderDeltai = mongooes.model('OrderDeltai', orderDetailSchema);

export default OrderDeltai;
