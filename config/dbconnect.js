import mongoose from "mongoose";
import 'dotenv/config'

// Connect MongoDB.
const dbConnect = ()=>{
  mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Database Connected Successfully");
  }).catch((error)=>{
    console.log(error);
  })
}
export default dbConnect;