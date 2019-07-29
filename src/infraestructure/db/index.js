const Mongoose = require('mongoose');

try {
    Mongoose.connect('mongodb://localhost/barbecueschedule', { useNewUrlParser: true });
} catch (error) {
    console.log(error)
}

module.exports = Mongoose