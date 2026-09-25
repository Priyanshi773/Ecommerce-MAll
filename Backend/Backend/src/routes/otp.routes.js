import {Router } from "express";
import {sendOTP , verifyOTP} from "../controllers/otp.controller.js";

const otpRouter = Router();

otpRouter.post('/send-otp' , sendOTP)

otpRouter.post('/verify-otp' , verifyOTP)

export default otpRouter;