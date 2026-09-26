import { useState } from "react";
import API from "../Api.jsx";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const res = await API.post("auth/register", {
        username,
        email,
        password,
      });

      navigate("/Homepage");

      setUsername("");
      setEmail("");
      setPassword("");
    }

    catch (err) {

      const msg = err.response?.data?.message;

      console.log("Register Error :", msg);

      if (msg === "username or email already exists") {
        alert("Email or username already exists");
      }

      if (msg === "username already exists") {
        alert("username already exists");
      }

      if (msg === "email already exists") {
        alert("Email  already exist");
      }

    }

  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-blue-500 px-4">
      <div className="w-full max-w-[450px] min-h-[500px] bg-white rounded-xl shadow-2xl">
        <h1 className="mt-10 text-center font-bold text-3xl md:text-4xl">Register</h1>
        <div className="flex flex-col items-center gap-6 mt-10 px-6 pb-10">

          <input
            type="text"
            placeholder="Username"
            value={username}
            className="w-full px-4 py-3 md:py-4 rounded-lg text-lg md:text-2xl font-bold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setUsername(e.target.value)}
          />

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

          <button
            onClick={register}
            className="w-48 px-8 py-4 md:py-6 bg-blue-700 text-xl md:text-2xl text-white rounded-xl"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}