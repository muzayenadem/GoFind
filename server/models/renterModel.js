const mongoose = require('mongoose')
const { type } = require('os')

const schema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    }
})

const renterModel = mongoose.model('Renters',schema)

module.exports = renterModel