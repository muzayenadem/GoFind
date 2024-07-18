const propertyModel = require('../../models/propertyModel')

const allHomes = async(req,res) =>{
    try {
        const params = req.params.id
        const ip = req.ip
        //let homes = []
        const regex = new RegExp(params,'i')
        if(params == 'default'){
          const  homes = await propertyModel.find({})
          res.status(200).send(homes)
        }
        else{
           homes = await propertyModel.find({$or:[{name:regex}]} )
           //homes = await propertyModel.find({})
            if(!homes)
            return res.status(402).send('there is no an product with this id')
            res.status(200).send(homes)
            }

        console.log({params,ip})
    } catch (error) {
        console.log({error:error.message})
        // res.status(500).send({error})
    }
}

module.exports = allHomes