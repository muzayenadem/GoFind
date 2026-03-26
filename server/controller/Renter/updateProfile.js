const renterModel = require("../../models/renterModel.js");
const admin = require('../../firebase/admin.js')
async function updateProfile(req,res) {
    const bucket = admin.storage().bucket(); 
    try {
        let {data} = req.body
        const {renterId} = req.renter
        console.log({renterId})
        data = JSON.parse(data)
        const files = req.files;
        console.log({data,files})
        const {fname,lname,email,phone} = data
        const renter = renterModel.findById(renterId)
        if(!renter) return res.status(404).send("file was not found")

        const uploadPromises = files.map(async (file) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            const fileRef = bucket.file(`renterImages/${fileName}`);
    
            const stream = fileRef.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
            });
    
            await new Promise((resolve, reject) => {
            stream.on('error', reject);
            stream.on('finish', resolve);
            stream.end(file.buffer);
            });
    
            await fileRef.makePublic();
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileRef.name}`;

            return publicUrl
        });
    
        const imagesUrl = await Promise.all(uploadPromises);
            
        const updateRenterData = await renterModel.findByIdAndUpdate(
            {_id:renterId},
            {$set:{
                firstName: fname ? fname : null,
                lastName: lname ? lname : null,
                email: email ? email : null,
                phone: phone ? phone : null,
                img:imagesUrl ? imagesUrl : null,
            }},
            {new:true}
        )

        const updatedRenterData = await updateRenterData.save()

        // const {fname,lname,email,phone} = data
        // console.log({fname,lname,email,phone})
        return res.status(201).send({message:"profile updated successfully 1",data:updatedRenterData})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({"error":error.message})
    }    
}
module.exports = updateProfile