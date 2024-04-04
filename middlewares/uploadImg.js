import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Get the directory name of the current module file
const __dirname = dirname(fileURLToPath(import.meta.url));
const destinationDir = join(__dirname, "../public/images/products");

// Ensure the destination directory exists
if (!fs.existsSync(destinationDir)) {
	fs.mkdirSync(destinationDir, { recursive: true });
}

const multerStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../public/images/"));
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + "-" + uniqueSuffix);
	},
});

const multerFilter = (req, file, cb) => {
	if (file.mimetype.startsWith("image")) {
		cb(null, true);
	} else {
		cb(
			{
				message: "Unsupported File Format",
			},
			false
		);
	}
};

export const uploadPhoto = multer({
	storage: multerStorage,
	fileFilter: multerFilter,
	limits: { fileSize: 2000000 },
});

// export const productImgResize = async (req, res, next) => {
// 	if (!req.files) return next();
// 	await Promise.all(
// 		req.files.map(async (file) => {
// 			await sharp(file.path)
// 				.resize(300, 300)
// 				.toFormat("jpeg")
// 				.jpeg({ quality: 90 })
// 				.toFile(`public/images/products/${file.filename}`);
// 		})
// 	);
// 	next();
// };

export const productImgResize = async (req, res, next) => {
	if (!req.files) return next();
	await Promise.all(
		req.files.map(async (file) => {
			const destinationPath = join(destinationDir, file.filename);
			await sharp(file.path)
				.resize(300, 300)
				.toFormat("jpeg")
				.jpeg({ quality: 90 })
				.toFile(destinationPath);
			fs.unlinkSync(destinationPath);
		})
	);
	next();
};
