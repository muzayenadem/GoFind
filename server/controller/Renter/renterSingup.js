const renterModel = require('../../models/renterModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const renterSignup = async (req,res) =>{
    
    try {
        const {firstName,lastName,email,phone,password,confirmPassword} = req.body

        if(!firstName || !lastName || !email || !phone || !password || !confirmPassword)
        return res.status(401).send('you need to fill all place')

        const ifUserExistBefore = await renterModel.findOne({email})
        
        if(ifUserExistBefore)
        return res.status(402).send("this email is already exist")

        if(password !== confirmPassword)
        return res.status(403).send('password is not matched')


        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newRenter = new renterModel({
            firstName,
            lastName,
            email,
            phone,
            password:hashedPassword
        })

        const savedRenter = await newRenter.save()

        console.log(savedRenter)
      
        const token = jwt.sign({renterId:savedRenter._id},process.env.RENTERPASSWORD)
        res.cookie('renterToken',token,{
            httpOnly: true
         })
         res.status(200).send('your account successfully created')
    } catch (error) {
        console.log({error:error.message})
        res.status(500).send(error.message)
    }
 }
 module.exports = renterSignup