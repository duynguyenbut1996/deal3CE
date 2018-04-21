const mongoose = require('mongoose')

const vsitCounterSchema = mongoose.Schema({
    tm: {
        type: Number,
        unique: true,
        require: false
    }
})

const vsitCounter = mongoose.model('VsitCounter', vsitCounter);

export default vsitCounter;