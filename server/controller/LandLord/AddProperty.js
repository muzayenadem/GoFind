const jwt = require('jsonwebtoken')
const propertyModel = require('../../models/propertyModel')

const addProperty = async (req,res) =>{
    try {
        const {property} = req.body
        console.log({property})
        const landlord = req.cookies.landLordToken
        if(!landlord)
        return res.status(404).send('not logginned')

        const verified = jwt.verify(landlord,process.env.LANDLORDPASSWORD )

        if(!verified)
        return res.status(403).send('not authanticated')

        const addedProperty = new propertyModel({
            landLordId:verified.landLordId,
            property
        })
        const savedProperty = await addedProperty.save()
        console.log({savedProperty})
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = addProperty