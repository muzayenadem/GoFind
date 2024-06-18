const HomeExModel = require('../../models/HomeExModel')

const allHomes = async(req,res) =>{
    try {
        const params = req.params.id
        //let homes = []
        const regex = new RegExp(params,'i')
        if(params == 'default'){
          const  homes = await HomeExModel.find({})
          res.status(200).send(homes)
        }
        else{
            homes = await HomeExModel.find({$or:[{des:regex}]} )
            if(!homes)
            return res.status(402).send('there is no an product with this id')
            res.status(200).send(homes)
            }

        console.log({params})
    } catch (error) {
        res.status(500).send({error})
    }
}

module.exports = allHomes