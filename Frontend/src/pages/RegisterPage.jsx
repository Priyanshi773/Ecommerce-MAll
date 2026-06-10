import { useState } from "react";
import axios from "axios";
import blue from "../assets/blue.jpg";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await axios.post("http://localhost:3000/api/auth/register", {
      username,
      email,
      password,
    });
    alert("registered");

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-full flex flex-row bg-cover items-center justify-center gap-4"
      style={{ backgroundImage: `url(${blue})` }}>

      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl flex flex-col gap-4 w-96">

        <h1 className="text-3xl font-bold text-center text-blue-900">
          Register
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          className="p-5 rounded-lg text-2xl font-bold border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          className="p-5 rounded-lg text-2xl font-bold border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          className="p-5 rounded-lg text-2xl font-bold border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="bg-blue-600 text-xl  text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>

      </div>
    </div>
  );
}