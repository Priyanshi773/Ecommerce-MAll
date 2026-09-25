import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
    try {
     await mongoose.connect(config.MONGO_URI)

     console.log(" DB is connected ");
    }
    catch (error){
        console.log(" connection error " , error ); 
    }
}

export default connectDB;