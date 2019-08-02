const mongoose = require('mongoose')
const config = require('../../app/config')
try {
  mongoose.connect(config.db, { useNewUrlParser: true })
} catch (error) {
  console.log(error)
}

module.exports = mongoose
