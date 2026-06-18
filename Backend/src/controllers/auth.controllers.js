import UserModel from "../models/user.model.js";
import OtpModel from "../models/otp.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";


export async function register(req, res) {

    const { username, email, password } = req.body;

    const isAlreadyRegistered = await UserModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })
   
    if(isAlreadyRegistered){

        if (isAlreadyRegistered.email === email && isAlreadyRegistered.username === username) {
        return res.status(409).json({
            message: "username or email already exists"
        })
    }

    if (isAlreadyRegistered.email === email) {
        return res.status(409).json({
            message: " email already exists"
        })
    }

    if (isAlreadyRegistered.username === username) {
        return res.status(409).json({
            message: " username  already exists"
        })
    }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
        username,
        email,
        password: hashedPassword,
    })

    const token = jwt.sign({
        id: user._id,
    }, config.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    )

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    });


    res.status(201).json({
        message: " user created successfully",
        user: {
            username: user.username,
            email: user.email,
        },

    })

}

export async function Getme(req, res) {

    console.log("COOKIE HEADER:", req.headers.cookie);
    console.log("COOKIES:", req.cookies);

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "token not found"
        })
    }

    const decoded = jwt.verify(token, config.JWT_SECRET);

    console.log(decoded);

    const user = await UserModel.findById(decoded.id)

    res.status(200).json({
        message: "user fetched successfully",
        user: {
            username: user.username,
            email: user.email,
        }
    })
}

export async function Login(req, res) {

    const { email, password } = req.body

    const user = await UserModel.findOne({
        email
    })

    if (!user) {
        return res.status(401).json({
            message: "Invalid email "
        });
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid password"
        });
    }

    const token = jwt.sign(
        {
            id: user._id
        },
        config.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
        message: "Login successful",
        user: {
            username: user.username,
            email: user.email
        }
    });
}

export async function Logout(req, res) {

    res.clearCookie("token");

    return res.status(200).json({
        message: "Logged out successfully",
    });

}

export async function ResetPassword(req, res) {

    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).json({
            message: "Email and new password required",
        });
    }

    const record = await OtpModel.findOne({ email });

    if (!record || !record.verified) {
        return res.status(400).json({
            message: "OTP not verified",
        });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    await OtpModel.deleteMany({ email });

    return res.status(200).json({
        message: "Password reset successful",
    });

}