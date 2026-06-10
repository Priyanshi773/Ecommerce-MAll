import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: [true, "username must be unique"],
    },

    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email must be unique"],
    },

    password: {
        type: String,
        required: [true, "password is required"],
        unique: [true, "password must be unique"],
    },
    role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer"
    },
})

const UserModel = mongoose.model("User", userSchema);

export default UserModel;