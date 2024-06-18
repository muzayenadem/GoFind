const landLordModel = require('../../models/landLordModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const landLordSignup = async (req,res) =>{
    
    try {
        const {firstName,lastName,email,phone,password,confirmpassword} = req.body

        if(!firstName || !lastName || !email || !phone || !password || !confirmpassword)
        return res.status(404).send('you need to fill all place')

        const ifUserExistBefore = await landLordModel.findOne({email})
        
        if(ifUserExistBefore)
        return res.status(404).send("this email is already exist")

        if(password !== confirmpassword)
        return res.status(404).send('password is not matched')


        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newLandLord = new landLordModel({
            firstName,
            lastName,
            email,
            phone,
            password:hashedPassword
        })

        const savedLandLord = await newLandLord.save()

        console.log(savedLandLord)
      
        const token = jwt.sign({landLordId:savedLandLord._id},process.env.LANDLORDPASSWORD)
        res.cookie('landLordToken',token,{
            httpOnly: true
         }).send()

    } catch (error) {
        res.status(500).send(error.message)
    }
 }
 module.exports = landLordSignup