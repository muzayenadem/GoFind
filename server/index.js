const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('database successfully connected')
})
.catch((err)=>{
    console.log(err.message)
})
const router = require('./router/router')

const app = express()
app.use(cors({
    origin:['http://localhost:5174','http://localhost:5173'],
    credentials:true
   }))
app.use(express.json())
app.use(bodyParser.json())
app.use(express.static('Files'))
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.use(router)
app.listen(3500,()=>{
    console.log('the server is started')
})