import express from "express";
import "dotenv/config";
import dbconnect from "./config/dbconnect.js";
import authRoute from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import brandRoute from "./routes/brandRoute.js";
import couponRoute from "./routes/couponRoute.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
const app = express();

dbconnect();
app.get("/", function (req, res) {
	res.send("server is running....,");
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/brand", brandRoute);
app.use("/api/coupon", couponRoute);

app.listen(3000, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
