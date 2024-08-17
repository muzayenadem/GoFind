const propertyModel = require("../../../models/propertyModel")
const viewsModel = require("../../../models/viewsModel")
const jwt = require('jsonwebtoken')
const readViews = async(req,res) =>{
    try {
        //  const id = req.params.id
        //  const singleProperty = await propertyModel.findOne({})
        // if(!singleProperty)
        // return res.status(403).send('there is no data with this id')

        const isViewedBefore = await viewsModel.find({})
        if(!isViewedBefore)
        return res.status(404).send('not visited before')

        res.status(200).send(isViewedBefore)
        console.log(isViewedBefore)
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = readViews