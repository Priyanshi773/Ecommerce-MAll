import UserModel from "../models/user.model.js";


export const getAllUsers = async(req,res)=>{

    try{

        const users = await UserModel.find({}, "username email role");

        res.status(200).json({
            success:true,
            users
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};