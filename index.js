import express from "express";
import "dotenv/config";
import dbconnect from "./config/dbconnect.js";
import authRoute from "./routes/authRoute.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();

dbconnect();
app.get("/", function (req, res) {
	res.send("server is running....,");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user", authRoute);
app.listen(3000, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
