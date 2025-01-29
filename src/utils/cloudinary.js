import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
(async function name() {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    //Upload image
    const uploadOnCloudinary = async (localFilePath) => {
        try{
            if(!localFilePath) return null
            const response =  await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            })
            // file has been uploaded succesfully
            console.log("File uploaded successfully on cloudinary", response.url);
            return response;
        } catch (error) {
            fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
            return null;
        }
    }
})

export {uploadOnCloudinary}