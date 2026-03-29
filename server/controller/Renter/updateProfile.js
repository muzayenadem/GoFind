const renterModel = require("../../models/renterModel.js");
async function updateProfile(req,res) {
    try {
        let {data} = req.body
        const {renterId} = req.renter
        data = JSON.parse(data)

        const {fname,lname,email,phone} = data
        const renter = renterModel.findById(renterId)

        if(!renter) return res.status(404).send("file was not found") 
             
        const updateRenterData = await renterModel.findByIdAndUpdate(
            {_id:renterId},
            {$set:{
                firstName: fname ? fname : null,
                lastName: lname ? lname : null,
                email: email ? email : null,
                phone: phone ? phone : null,
                // {req?.file?.path && img: req.file.path},
                img: req?.file && req?.file?.path,
            }},
            {new:true}
        )

        console.log({updateRenterData})
        const updatedRenterData = await updateRenterData.save()
        console.log({updatedRenterData})
        return res.status(201).send({message:"profile updated successfully 1",data:updatedRenterData})

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({"error":error.message})
    }    
}
module.exports = updateProfile