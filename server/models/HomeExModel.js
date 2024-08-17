const mongoose = require('mongoose')

const schema = mongoose.Schema({
    tetle:String,
    des:String,
    price:Number
})

const HomeExModel = mongoose.model('homes',schema)

module.exports = HomeExModel