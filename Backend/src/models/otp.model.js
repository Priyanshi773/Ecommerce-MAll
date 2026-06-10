import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
})

const OtpModel = mongoose.model("OTP" , userSchema);

export default OtpModel;