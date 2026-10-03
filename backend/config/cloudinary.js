import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {

    cloudinary.config({
        cloud_name: 'dj5icypiv',
        api_key: '993892812273174',
        api_secret: 'CoDXhCGBlrObgfRvsTEjebfHK0w'
    });

}

export default connectCloudinary;