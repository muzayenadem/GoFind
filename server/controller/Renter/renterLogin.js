 const renterModel = require('../../models/renterModel')
 const jwt = require('jsonwebtoken')
 const bcrypt = require('bcrypt')
 const renterLogin = async (req,res) =>{
    try {
        const {email,password} = req.body
        if(!email || !password)
        return res.status(401).send('wrong email or password')

        const ifRenterBefore = await renterModel.findOne({email})

        if(!ifRenterBefore)
        return res.status(402).send("wrong email")

        const assuredPassword = await bcrypt.compare(password,ifRenterBefore.password)

        if(!assuredPassword)
        return res.status(403).send('wrong password')

        const token = jwt.sign({renterId:ifRenterBefore._id},process.env.RENTERPASSWORD)
        res.cookie('renterToken',token,{httpOnly:true}).send('successfully logined!')
        console.log({token})
    } catch (error) {
        res.status(500).send(error.message)
    }
 }
 module.exports = renterLogin