const jwt = require('jsonwebtoken')
const propertyModel = require('../../models/propertyModel')
const admin = require('../../firebase/admin')

const addProperty = async (req,res) =>{
  const bucket = admin.storage().bucket(); 
    try {
        const landlord = req.cookies.landLordToken
        if(!landlord)
        return res.status(404).send('not logginned')

        const verified = jwt.verify(landlord,process.env.LANDLORDPASSWORD )

        if(!verified)
        return res.status(403).send('not authanticated')

        let {property} = req.body
        const files = req.files
        property = JSON.parse(property)   
          
        const uploadPromises = files.map(async (file) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            const fileRef = bucket.file(`proportyImages/${fileName}`);
      
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
          property.images = imagesUrl
        const addedProperty = new propertyModel({
            landLordId:verified.landLordId,
            property
        })
        const savedProperty = await addedProperty.save()
        console.log({savedProperty})
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = addProperty