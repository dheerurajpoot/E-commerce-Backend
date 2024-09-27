import express from "express";
import "dotenv/config";
import dbconnect from "./config/dbconnect.js";
import authRoute from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import brandRoute from "./routes/brandRoute.js";
import couponRoute from "./routes/couponRoute.js";
import colorRoute from "./routes/colorRoute.js";
import contactRoute from "./routes/contactRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
const app = express();

// db connect
dbconnect();
app.get("/", function (req, res) {
	res.send("server is running....,");
});

app.use((req, res, next) => {
	res.header(
		"Access-Control-Allow-Origin",
		"https://drstore-admin.vercel.app"
	);
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	res.header("Access-Control-Allow-Credentials", "true");
	next();
});

// CORS Configuration
const corsOptions = {
	origin: [
		"http://localhost:3001",
		"https://drstore-admin.vercel.app",
		"https://drstore.vercel.app",
	],
	methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use("/api/user", authRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/brand", brandRoute);
app.use("/api/coupon", couponRoute);
app.use("/api/color", colorRoute);
app.use("/api/contact", contactRoute);
app.use("/api/upload", uploadRoute);

app.listen(3000, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
