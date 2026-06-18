import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
    const res  =  await axios.post("http://localhost:3000/api/auth/register", {
      username,
      email,
      password,
    });

    navigate("/Homepage");

    setUsername("");
    setEmail("");
    setPassword("");
  }

    catch(err){
      
      const msg  = err.response?.data?.message; 

      console.log( "Register Error :" , msg  );

      if( msg === "username or email already exists"){
           alert( "Email or username already exists"); 
      }
     
      if( msg === "username already exists"){
           alert( "username already exists"); 
      }
     
      if( msg === "email already exists"){
           alert( "Email  already exist"); 
      }

    }
  
  };

  return (
     <div className="h-screen w-full flex flex-row bg-blue-500 items-center justify-center gap-4">
     <div className="w-[450px] min-h-[500px] bg-white rounded-xl shadow-2xl">
       <h1 className="mt-10 text-center font-bold text-4xl ">Register</h1>
      <div className="flex flex-col items-center gap-6 mt-10 ">

        <input
          type="text"
          placeholder="Username"
          value={username}
          className="w-96 px-4 py-4 rounded-lg text-2xl font-bold border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setUsername(e.target.value)}
        />

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

         <button
                    onClick={register}
                    className="w-48 px-8 py-6 bg-blue-700 text-2xl text-white rounded-xl"
                >
                    Register
                </button>
      </div>
     </div>
     </div>
  );
}