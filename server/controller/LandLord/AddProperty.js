const jwt = require('jsonwebtoken')
const propertyModel = require('../../models/propertyModel')

const addProperty = async (req,res) =>{ 
    try {
        const {landLordId} = req.landlord
        let {property} = req.body
        property = JSON.parse(property)

        const files = req.files
        const images = files?.map(file => file.path)
        property.images = images

        const addedProperty = new propertyModel({
            landLordId,
            ...property
        })

        const savedProperty = await addedProperty.save()
        console.log({savedProperty,data:"succed"})
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = addProperty
