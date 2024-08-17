const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('what   hhhh')
})

app.listen(3500,()=>{
    console.log('maybeee')
})