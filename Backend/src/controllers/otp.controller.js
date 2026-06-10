import OTPModel from "../models/otp.model.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendOTP(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email required",
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await OTPModel.deleteMany({ email });

  await OTPModel.create({
    email,
    otp,
    expiresAt,
  })


  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is ${otp}`,
  });

  console.log(`OTP for ${email} is ${otp}`);

  return res.status(200).json({
    message: "OTP sent successfully",
  });
}

export async function verifyOTP(req, res) {

  const { email, otp } = req.body;

  console.log("🔍 VERIFY OTP API HIT");
  console.log("REQUEST BODY:", req.body);


  if (!email || !otp) {
    return res.status(400).json({
      message: "Email and OTP required",
    });
  }

  const record = await OTPModel.findOne({ email });

  if (!record) {
    return res.status(400).json({
      message: "OTP not found. Please request again.",
    });
  }

  if (record.expiresAt < new Date()) {
    await OTPModel.deleteOne({ email });

    return res.status(400).json({
      message: "OTP expired. Please request a new one.",
    });
  }

  if (record.otp !== otp) {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }

  console.log("🎯 OTP MATCHED SUCCESSFULLY");

  record.verified = true;
  await record.save();

  console.log("✅ OTP VERIFIED AND SAVED IN DB FOR:", email);

  return res.status(200).json({
    message: "OTP verified successfully",
  });


}