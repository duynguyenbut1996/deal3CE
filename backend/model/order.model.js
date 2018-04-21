const mongooes = require('mongoose');

const orderSchema = mongooes.Schema({
   createAt: Date,
   userId: {
       type: String,
       unique: true,
       require: true
   },
   price: {
       type: Number,
       unique: false,
       require: true
   }
})

const Order = mongooes.model('Order', orderSchema);

export default Order;
