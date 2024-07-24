const propertyModel = require('../../models/propertyModel')

const singlePropertyDetail = async(req,res)=>{
    const id = req.params.id
    try {
        const singleProperty = await propertyModel.findOne({_id:id})
        if(!singleProperty)
        return res.status(403).send('there is no data with this id')

        res.status(200).send(singleProperty)


    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = singlePropertyDetail