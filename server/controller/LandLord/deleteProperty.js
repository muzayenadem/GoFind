const propertyModel = require('../../models/propertyModel')

const deleteProperty = async (req,res) =>{
    try {
        const {id} = req.body
        const deletedProperty = await propertyModel.deleteOne({_id:id})
        
        if(!deletedProperty)
        return res.status(404).send('property not deleted')

        console.log(deletedProperty)
        res.status(200).send('property succefully deleted')
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = deleteProperty