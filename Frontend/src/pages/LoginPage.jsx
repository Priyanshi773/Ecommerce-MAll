import { useState } from "react";
import API from "../Api.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = async () => {
        try {
            const res = await API.post("/auth/Login", {
                email,
                password,
            });

            console.log("LOGIN RESPONSE:", res.data);
            console.log("ROLE:", res.data.user.role);

            localStorage.setItem("user", JSON.stringify(res.data.user));

            alert(res.data.message || "Login successfully");

            if (res.data.user.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/Homepage");
            }

            setEmail("");
            setPassword("");

        } catch (err) {
            const msg = err.response?.data?.message;
            console.log("LOGIN ERROR:", msg);

            if (msg === "Invalid email") {
                alert("Invalid Email");
            } else if (msg === "Invalid password") {
                alert("Invalid password");
            } else {
                alert("something went wrong ");
            }
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-blue-500 px-4">
            <div className="w-full max-w-[450px] min-h-[500px] bg-white rounded-xl shadow-2xl">
                <h1 className="mt-10 text-center font-bold text-3xl md:text-4xl">Login</h1>
                <div className="flex flex-col items-center gap-6 mt-10 px-6 pb-10">

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        className="w-full px-4 py-3 md:py-4 rounded-lg text-lg md:text-2xl font-bold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        className="w-full px-4 py-3 md:py-4 rounded-lg text-lg md:text-2xl font-bold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <h1 onClick={() => navigate("/forgot-password")} className="text-blue-400 font-semibold text-base md:text-lg underline cursor-pointer">Forgot password ?</h1>

                    <button
                        onClick={Login}
                        className="w-48 px-8 py-4 md:py-6 bg-blue-700 text-xl md:text-2xl text-white rounded-xl"
                    >
                        Login
                    </button>

                </div>
            </div>
        </div>
    )
}