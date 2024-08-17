const landLordModel = require('../../models/landLordModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const landLordSignup = async (req,res) =>{
    
    try {
        const {firstName,lastName,email,phone,password,confirmPassword} = req.body

        if(!firstName || !lastName || !email || !phone || !password || !confirmPassword)
        return res.status(401).send('you need to fill all place')

        const ifUserExistBefore = await landLordModel.findOne({email})
        
        if(ifUserExistBefore)
        return res.status(402).send("this email is already exist")

        if(password !== confirmPassword)
        return res.status(403).send('password is not matched')


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
        res.cookie('landLordToken', token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
        }).send('your account successfully created')

    } catch (error) {
        console.log({error:error.message})
        res.status(500).send(error.message)
    }
 }
 module.exports = landLordSignup