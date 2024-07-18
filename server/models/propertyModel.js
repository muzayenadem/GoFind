const mongoose = require('mongoose')

const propretySchema = mongoose.Schema({
    landLordId:{
        required:true,
        type:String
    },
    category:{
        required:true,
        type:String
    },
    type:{
        type:String,
    },
    quantity:{
        required:true,
        type:Number,
    },
    theSamePlace:Boolean,
    subCategory:String,
    multiple:Boolean,
    name:String,
    permissions:Object,
    location:Object,
    locationWithName:Object,
    details:Object,
    area:Object,
    images:Array,
    amenities:Object,
    price:Number

})

const propertyModel = mongoose.model('Properties',propretySchema)

module.exports = propertyModel