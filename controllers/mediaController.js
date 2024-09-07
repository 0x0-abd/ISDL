const cloudinary = require('../config/cloudinary');
// const path = require('path')

exports.uploadImage = async (req, res) => {
    console.log("File upload started")
    if(!req.file) {
        return res.status(400).send('No file uplaoded');
    }
    const file = req.file;

    const uploadResult = await cloudinary.uploader
    .upload(
        req.file.path,
        {
            folder: "gfc-items",
            format: "png"
        }
    )
    .catch((error) => {
        console.log(error);
    });
    // console.log("Testing Upload")

    if(uploadResult) {
        const optimizeUrl = cloudinary.url(uploadResult.public_id, {
            transformation: [
                {
                    quality: 'auto',
                    gravity: 'auto',
                    width: 500,
                    height: 500,
                    crop: 'fill' // Ensure the image is resized properly
                }
            ]
        });
        // console.log(optimizeUrl);
        return res.status(200).json({ message: 'File uploaded successfully', optimizeUrl, uploadResult });
    }

    res.status(500).json({ error: 'File upload failed' });
}