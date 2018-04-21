const mongoose = require('mongoose');

function connect() {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            mongoose.connect('mongodb://localhost/deal3ce', (err) => {
                if(!err) {
                    clearInterval(interval);
                    resolve('Connect database Success!!!');
                } else {
                    console.log('ping databse')
                }
            })
        }, 1000);
    })
}

export default connect;
