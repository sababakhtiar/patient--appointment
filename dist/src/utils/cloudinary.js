"use strict";
// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";
// import path from "path";
// import { GraphQLError } from "graphql";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToCloudinary = void 0;
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
// export const uploadToCloudinary = async (filename: string): Promise<string> => {
//   const mainDir = path.dirname(require.main?.filename || "");
//   const filePath = path.join(mainDir,"assets","images",filename);
//   if (!fs.existsSync(filePath)) {
//     throw new GraphQLError(
//       `File '${filename}' does not exist in the images directory.`
//     );
//   }
//   try {
//     const uploadedFile = await cloudinary.uploader.upload(filePath);
//     return uploadedFile.secure_url;
//   } catch (error) {
//     throw new GraphQLError(
//       `${filename} upload to Cloudinary failed`
//     );
//   }
// };
// export default cloudinary;
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const graphql_1 = require("graphql");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadToCloudinary = async (filename, fileUpload) => {
    // If fileUpload is provided, use it for upload
    if (fileUpload) {
        const { createReadStream } = fileUpload;
        try {
            const uploadPromise = new Promise((resolve, reject) => {
                const uploadStream = cloudinary_1.v2.uploader.upload_stream({ folder: "uploads" }, (error, result) => {
                    if (error) {
                        reject(new graphql_1.GraphQLError(`Upload to Cloudinary failed: ${error.message}`));
                    }
                    else if (result) {
                        resolve(result.secure_url);
                    }
                });
                // Pipe the file stream to Cloudinary
                createReadStream().pipe(uploadStream);
            });
            // Await the uploadPromise to get the secure_url
            return await uploadPromise;
        }
        catch (error) {
            throw new graphql_1.GraphQLError(`Error during upload: ${error.message}`);
        }
    }
    // If fileUpload is not provided, proceed with file system upload
    const mainDir = path_1.default.dirname(require.main?.filename || "");
    const filePath = path_1.default.join(mainDir, "assets", "images", filename);
    if (!fs_1.default.existsSync(filePath)) {
        throw new graphql_1.GraphQLError(`File '${filename}' does not exist in the images directory.`);
    }
    try {
        const uploadedFile = await cloudinary_1.v2.uploader.upload(filePath);
        return uploadedFile.secure_url;
    }
    catch (error) {
        throw new graphql_1.GraphQLError(`${filename} upload to Cloudinary failed`);
    }
};
exports.uploadToCloudinary = uploadToCloudinary;
exports.default = cloudinary_1.v2;
