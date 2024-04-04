import cloudinary from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});

export const cloudinaryImgUpload = async (fileToUpload) => {
	return new Promise((resolve) => {
		cloudinary.uploader.upload(fileToUpload, (result) => {
			resolve(
				{
					url: result.secure_url,
				},
				{
					resource_type: "auto",
				}
			);
		});
	});
};
