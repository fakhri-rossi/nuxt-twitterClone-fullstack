import { v2 as _cloudinary } from "cloudinary";


const cloudinary = () => {
  const config = useRuntimeConfig();
  
  _cloudinary.config({
    cloud_name: config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
    secure: true,
  })

  return _cloudinary;
}

export const uploadToCloudinary = (image) => {

  return new Promise((resolve, reject) => {
    cloudinary().uploader.upload(image, (error, data) => {
      if(error){
        reject(error)
      }
      resolve(data);
    })
  })
}