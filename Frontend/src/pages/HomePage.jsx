import React from "react";
import dress from "../assets/dress.jpg";
import food from "../assets/food.jpg";
import game from "../assets/game.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/logout");

      alert(res.data.message || "Logged out");

      navigate("/LoginPage");

    } catch (err) {
      console.log("Logout Error:", err.response?.data);

      alert("Logout failed");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center py-10">

      {/* Logout Button */}
      <div className="w-full flex justify-end px-6">
        <button
          onClick={logout}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
        >
          Logout
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-7xl font-black uppercase tracking-widest text-indigo-900 drop-shadow-lg mb-12">
        Welcome to Mallora
      </h1>

      {/* Cards Row */}
      <div className="flex gap-16 justify-center flex-wrap mt-4 ">

        {/* Card 1 */}
        <div onClick={() => navigate("/Dresses")} className="w-100 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                transition-all duration-300 ">
          <img src={dress} className="w-full h-140 object-cover" />
          <div className="p-4">
            <h2 className="flex justify-center align-middle text-2xl font-bold">Shopping Zone </h2>
          </div>
        </div>

        {/* Card 2 */}
        <div onClick={() => navigate("/Food")} className="w-100 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                transition-all duration-300 ">
          <img src={food} className="w-full h-140 object-cover" />
          <div className="p-4">
            <h2 className=" flex  justify-center  align-middle text-2xl font-bold">FoodCourt</h2>
          </div>
        </div>

        {/* Card 3 */}
        <div  onClick={() => navigate("/Game")} className="w-100 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                transition-all duration-300">
          <img src={game} className="w-full h-140 object-cover" />
          <div className="p-4">
            <h2 className="flex justify-center align-middle text-2xl font-bold">GameZone </h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;