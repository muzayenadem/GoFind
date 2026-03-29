const multer = require("multer");
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const cloudinary = require("../config/cloudinary");
const storage = (folder_name) => new CloudinaryStorage({
    cloudinary,
    params:{
        folder:folder_name,
        allowed_formats: ['jpg','png','jpeg','webp'],
    },
});

// we need to use this function to uload file to different folder

function upload_to_cloudinary(folder_name){
    const upload_it = multer({storage:storage(folder_name)})
    return upload_it
}
module.exports = upload_to_cloudinary