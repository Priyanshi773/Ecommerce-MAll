import { useState } from "react";
import axios from "axios";
import blue from "../assets/blue.jpg";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const sendOTP = async () => {
        await axios.post("http://localhost:3000/api/auth/otp/send-otp", {
            email
        });

        alert("OTP Sent");
        setOtpSent(true);
    };

   const verifyOTP = async () => {
  try {
    console.log("EMAIL:", email);
    console.log("OTP:", otp);

    const res = await axios.post(
      "http://localhost:3000/api/auth/otp/verify-otp",
      {
        email,
        otp,
      }
    );

    console.log("BACKEND RESPONSE:", res.data);

    alert(res.data.message); 

    navigate("/reset-password", { state: { email } });

  } catch (err)
   {
    console.log("ERROR RESPONSE:", err.response?.data);

    alert(err.response?.data?.message || "Something went wrong");
  }
};

    return (
        <div className="h-screen w-full flex flex-row bg-cover items-center justify-center gap-4"
            style={{ backgroundImage: `url(${blue})` }}>

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl flex flex-col gap-4 w-96">

                <h1 className="text-3xl font-bold text-center text-blue-900">
                    Forgot Password
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="p-5 rounded-lg text-2xl font-bold border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    onClick={sendOTP}
                    className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Send
                </button>

                {otpSent && (
                    <>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            className="p-3 rounded-lg border border-gray-300"
                            onChange={(e) => setOtp(e.target.value)}
                        />

                        <button
                            onClick={verifyOTP}
                            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                        >
                            Verfiy
                        </button>
                    </>
                )}


            </div>
        </div>
    )
}