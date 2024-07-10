const landLordModel = require('../../models/landLordModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const landLordLogin = async (req,res) =>{
   try {
       const {email,password} = req.body
       if(!email || !password)
       return res.status(404).send('wrong email or password')

       const ifLandLordBefore = await landLordModel.findOne({email})

       if(!ifLandLordBefore)
       return res.status(404).send("wrong email")

       const assuredPassword = await bcrypt.compare(password,ifLandLordBefore.password)

       if(!assuredPassword)
       return res.status(401).send('wrong password')

       const token = jwt.sign({landLordId:ifLandLordBefore._id},process.env.LANDLORDPASSWORD)
       res.cookie('landLordToken', token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        path: '/'
    }).send('successfully logined!')
   } catch (error) {
       res.status(500).send(error.message)
   }
}
module.exports = landLordLogin