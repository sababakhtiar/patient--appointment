"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const graphql_1 = require("graphql");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadToCloudinary = async (filename) => {
    const mainDir = path_1.default.dirname(require.main?.filename || "");
    const filePath = path_1.default.join(mainDir, "assets/images", filename);
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
