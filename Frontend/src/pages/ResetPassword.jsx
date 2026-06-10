import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import blue from "../assets/blue.jpg";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
    const navigate = useNavigate();

    const email = useLocation().state?.email;
    const [newPassword, setNewPassword] = useState("");


    const resetPassword = async () => {
        const res = await axios.post(
            "http://localhost:3000/api/auth/reset-password",
            {
                email,
                newPassword,
            }
        );

        alert(res.data.message);

         navigate("/login");

    };

    return (
        <div className="h-screen w-full flex flex-row bg-cover items-center justify-center gap-4"
            style={{ backgroundImage: `url(${blue})` }}>

            <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 flex flex-col gap-5">

                <h1 className="text-2xl font-bold text-center text-blue-900">
                    Reset Password
                </h1>

            

                <input
                    type="password"
                    placeholder="Enter New Password"
                    className="p-5 text-2xl font-bold border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <button
                    onClick={resetPassword}
                    className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Reset Password
                </button>

            </div>
        </div>
    );
}