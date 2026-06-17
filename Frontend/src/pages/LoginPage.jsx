import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = async () => {
        try {
         const res =   await axios.post("http://localhost:3000/api/auth/Login", {
                email,
                password
            });
           
            alert(res.data.message || "Login successfully");

            navigate("/Homepage");

            setEmail("");
            setPassword("");

        } catch (err) {

           const msg = err.response?.data?.message;

             console.log("LOGIN ERROR:", msg);


           if( msg === "Invalid email"){
        alert("Invalid Email");
        }
        
        else if(msg === "Invalid password"){
              alert("Invalid password");
        }

        else {
            alert("something went wrong ");
        }
    }

    };

    return (
      <div className="h-screen w-full flex flex-row bg-blue-500 items-center justify-center gap-4">
        <div className="w-[450px] min-h-[500px] bg-white rounded-xl shadow-2xl">
            <h1 className="mt-10 text-center font-bold text-4xl ">Login</h1>
            <div className="flex flex-col items-center gap-6 mt-10 ">

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="w-96 px-4 py-4 rounded-lg text-2xl font-bold border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="w-96 px-4 py-4 rounded-lg text-2xl font-bold border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <h1  onClick={() => navigate("/forgot-password")} className="text-blue-400 font-semibold text-lg underline"> Forgot password ?</h1>

                 <button
                    onClick={Login}
                    className="w-48 px-8 py-6 bg-blue-700 text-2xl text-white rounded-xl"
                >
                    Login
                </button>

            </div>
        </div>
      </div>

    )
}