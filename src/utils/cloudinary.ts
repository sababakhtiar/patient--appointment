import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { GraphQLError } from "graphql";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (filename: string): Promise<string> => {
  const mainDir = path.dirname(require.main?.filename || "");
  const filePath = path.join(mainDir, "assets", "images", filename);

  if (!fs.existsSync(filePath)) {
    throw new GraphQLError(
      `File '${filename}' does not exist in the uploads directory.`
    );
  }

  try {
    const uploadedFile = await cloudinary.uploader.upload(filePath);
    return uploadedFile.secure_url;
  } catch (error: any) {
    throw new GraphQLError(
      `${filename} upload to Cloudinary failed: ${error.message}`
    );
  }
};

export default cloudinary;
