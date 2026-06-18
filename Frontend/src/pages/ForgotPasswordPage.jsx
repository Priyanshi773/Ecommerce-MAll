import { useState } from "react";
import axios from "axios";
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
         <div className="h-screen w-full flex flex-row bg-blue-500 items-center justify-center gap-4">
        <div className="w-[450px] min-h-[550px] bg-white rounded-xl shadow-2xl">
            <h1 className="mt-10 text-center font-bold text-4xl ">Forgot Password</h1>
            <div className="flex flex-col items-center gap-6 mt-10 ">

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="w-96 px-4 py-4 rounded-lg text-2xl font-bold border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    onClick={sendOTP}
                    className="w-48 px-8 py-6 bg-blue-700 text-2xl text-white rounded-xl"
                >
                    Send
                </button>

                {otpSent && (
                    <>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            className="w-96 px-4 py-4 rounded-lg text-2xl font-bold border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setOtp(e.target.value)}
                        />

                        <button
                            onClick={verifyOTP}
                            className="w-48 px-8 py-6 bg-blue-700 text-2xl text-white rounded-xl"
                        >
                            Verfiy
                        </button>
                    </>
                )}

      </div>
            </div>
        </div>
    )
}