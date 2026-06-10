import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URI) {
    throw new error(" MONGO_URI is not defined in environment variables");
}

if(!process.env.JWT_SECRET) {
    throw new error("  JWT_SECRET is not defined in environment variables");
}

if(!process.env.EMAIL) {
    throw new error("  Email is not defined in environment variables");
}

if(!process.env.EMAIL_PASS) {
    throw new error("  Email pass  is not defined in environment variables");
}

const config = {
    MONGO_URI: process.env.MONGO_URI ,
    JWT_SECRET : process.env.JWT_SECRET ,
    EMAIL: process.env.EMAIL ,
    EMAIL_PASS: process.env.EMAIL_PASS 
}


export default config;