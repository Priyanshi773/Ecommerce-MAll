import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
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

         navigate("/LoginPage");

    };

    return (
                <div className="h-screen w-full flex flex-row bg-blue-500 items-center justify-center gap-4">
        <div className="w-[450px] min-h-[550px] bg-white rounded-xl shadow-2xl">
            <h1 className="mt-10 text-center font-bold text-4xl ">Reset Password</h1>
           <div className="flex flex-col items-center gap-6 mt-10 ">
                <input
                    type="password"
                    placeholder="Enter New Password"
                    className="w-96 px-4 py-4 rounded-lg text-2xl font-bold border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <button
                    onClick={resetPassword}
                    className="w-48 px-8 py-6 bg-blue-700 text-2xl text-white rounded-xl">
                    Reset Password
                </button>

           </div>
            </div>
        </div>
    );
}