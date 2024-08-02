const mongoose = require('mongoose')

const schema = mongoose.Schema({
    propertyId:{
        type:String
    },
    people:{
        type:Array(String)
    },
    views:{
        type:Number,
        default:0
    }
})

const viewsModel = mongoose.model('Views',schema)
module.exports = viewsModel