const jwt = require('jsonwebtoken')
const renterModel = require('../../models/renterModel')
const renterProfile = async(req,res)=>{
    try {
        const renterToken = req.cookies.renterToken

        if(!renterToken)
        return res.status(404).send('there is n token')

        const verify = jwt.verify(renterToken,process.env.RENTERPASSWORD)

        if(!verify)
        return res.status(401).send('not authanticated')

        const renter = await renterModel.find({_id:verify.renterId})

        if(!renter)
        return res.status(404).send('there is no user with this token')

        res.status(200).send(renter)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = renterProfile