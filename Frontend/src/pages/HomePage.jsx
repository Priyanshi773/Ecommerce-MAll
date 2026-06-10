import React from "react";
import dress from "../assets/dress.jpg";
import food from "../assets/food.jpg";
import game from "../assets/game.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center py-10">

      {/* Heading */}
      <h1 className="text-7xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-600 via-blue-700 to-cyan-500 bg-clip-text text-transparent mb-12">
        Welcome to Mallora
      </h1>

      {/* Cards Row */}
      <div className="flex gap-12 justify-center flex-wrap ">

        {/* Card 1 */}
        <div className="w-100 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img src={dress} className="w-full h-140 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Shopping Zone </h2>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-100 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img src={food} className="w-full h-140 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">FoodCourt</h2>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-100 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <img src={game} className="w-full h-140 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">GameZone </h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;