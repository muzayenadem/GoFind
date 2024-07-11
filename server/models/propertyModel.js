const mongoose = require('mongoose')

const propretySchema = mongoose.Schema({
    landLordId:{
        required:true,
        type:String
    },
    property:Object
})

const propertyModel = mongoose.model('Properties',propretySchema)

module.exports = propertyModel