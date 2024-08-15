const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const punycode =require('punycode/')
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config();
mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('database successfully connected')
})
.catch((err)=>{
    console.log(err.message)
})
const router = require('./router/router')

const app = express()
const PORT = process.env.PORT || 3000;
app.use(cors({ 
    origin:['https://gofind.vercel.app','http://localhost:5173','https://gofind-git-ecommerce-muzayen.vercel.app','https://gofind-muzayen.vercel.app','https://gofind-git-gofind-muzayen.vercel.app'],
     credentials:true,
     methods: 'GET,POST,PUT,DELETE',
     allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
   }))

  // app.options('/sendmessage', cors()); // enable pre-flight requests

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.use(router)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });