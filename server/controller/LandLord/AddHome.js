const HomeExModel = require('../../models/HomeExModel')


const AddHome = async(req,res) =>{
    try {
        const {title,des,price} = req.body
        
        const addedHome = new HomeExModel({
            title,
            des,
            price
        })
        const added = await addedHome.save()
        console.log(added)
    } catch (error) {
        res.status(500).send({error})
    }
}
 module.exports = AddHome