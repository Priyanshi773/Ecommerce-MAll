import React from 'react'
import hm1 from "../../assets/hm1.webp";
import hm2 from "../../assets/hm2.webp";
import hm3 from "../../assets/hm3.webp";
import hm4 from "../../assets/hm4.webp";
import hm5 from "../../assets/hm5.webp";
import hm6 from "../../assets/hm6.webp";

export const HM = () => {
  return (
      <div className="min-h-screen bg-gray-100 py-10 px-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        H&M Dresses Collection 👗
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={hm1} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Floral Dress</h2>
            <p className="text-gray-600">₹1999</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={hm2} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Summer Dress</h2>
            <p className="text-gray-600">₹2499</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={hm3} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Party Dress</h2>
            <p className="text-gray-600">₹2999</p>
          </div>
        </div>

         {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={hm4} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Party Dress</h2>
            <p className="text-gray-600">₹2999</p>
          </div>
        </div>

         {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={hm5} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Party Dress</h2>
            <p className="text-gray-600">₹2999</p>
          </div>
        </div>

         {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={hm6} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Party Dress</h2>
            <p className="text-gray-600">₹2999</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default HM;
