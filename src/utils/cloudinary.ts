// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";
// import path from "path";
// import { GraphQLError } from "graphql";

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


import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { GraphQLError } from "graphql";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => fs.ReadStream;
}

export const uploadToCloudinary = async (
  filename: string,
  fileUpload?: FileUpload
): Promise<string> => {
  // If fileUpload is provided, use it for upload
  if (fileUpload) {
    const { createReadStream } = fileUpload;

    try {
      const uploadPromise = new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "uploads" },
          (error, result) => {
            if (error) {
              reject(new GraphQLError(`Upload to Cloudinary failed: ${error.message}`));
            } else if (result) {
              resolve(result.secure_url);
            }
          }
        );

        // Pipe the file stream to Cloudinary
        createReadStream().pipe(uploadStream);
      });

      // Await the uploadPromise to get the secure_url
      return await uploadPromise;
    } catch (error) {
      throw new GraphQLError(`Error during upload: ${(error as Error).message}`);
    }
  }

  // If fileUpload is not provided, proceed with file system upload
  const mainDir = path.dirname(require.main?.filename || "");
  const filePath = path.join(mainDir, "assets", "images", filename);

  if (!fs.existsSync(filePath)) {
    throw new GraphQLError(
      `File '${filename}' does not exist in the images directory.`
    );
  }

  try {
    const uploadedFile = await cloudinary.uploader.upload(filePath);
    return uploadedFile.secure_url;
  } catch (error) {
    throw new GraphQLError(`${filename} upload to Cloudinary failed`);
  }
};

export default cloudinary;





