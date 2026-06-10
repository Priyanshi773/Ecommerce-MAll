import express from "express";
import authRouter from "./routes/auth.routes.js";
import otpRouter from "./routes/otp.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express(); // ✅ FIRST create app

// middleware
app.use(express.json());
app.use(cookieParser());

// CORS (after app is created)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// routes
app.use("/api/auth", authRouter);
app.use("/api/auth/otp", otpRouter);

export default app;