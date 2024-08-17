const homeExModel = require('../../models/HomeExModel')

const searchedHome = async(req,res) => {
    try {
        const params = req.params.id
        console.log(params)
        const regex = new RegExp(params,'i')
         const homes = await homeExModel.find({$or:[{des:regex}]} )
        if(!homes)
        return res.status(402).send('there is no an product with this id')

        res.status(200).send(homes)
        console.log(homes)
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
}

module.exports = searchedHome