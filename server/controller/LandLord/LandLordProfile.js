const jwt = require('jsonwebtoken')
const landLordModel = require('../../models/landLordModel')
const landLordProfile = async(req,res)=>{
    try {
        const landLordToken = req.cookies.landLordToken

        if(!landLordToken)
        return res.status(404).send('there is n token')

        const verify = jwt.verify(landLordToken,process.env.LANDLORDPASSWORD)

        if(!verify)
        return res.status(401).send('not authanticated')

        const landlord = await landLordModel.find({_id:verify.landLordId})

        if(!landlord)
        return res.status(404).send('there is no user with this token')

        res.status(200).send(landlord[0])
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = landLordProfile