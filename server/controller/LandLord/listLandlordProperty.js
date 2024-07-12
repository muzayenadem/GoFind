const propertyModel = require('../../models/propertyModel')
const jwt = require('jsonwebtoken')

const listLandlordProperty = async (req,res) =>{
    try {
        
        const landlordToken = req.cookies.landLordToken
        
        const verified = jwt.verify(landlordToken,process.env.LANDLORDPASSWORD)

        const properties = await propertyModel.find({landLordId:verified.landLordId})

        res.status(200).send(properties)
        console.log({properties})
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = listLandlordProperty