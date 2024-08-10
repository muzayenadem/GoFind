const propertyModel = require('../../models/propertyModel')

const singleProperty = async(req,res) =>{
    try {
        const params = req.params.id
        const property = await propertyModel.findOne({_id:params})

        if(!property)
        return res.status(200).send('there is no property with this data')

        res.status(200).send({property,images:property.images})
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = singleProperty