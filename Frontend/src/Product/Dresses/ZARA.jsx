import React from 'react'
import dress1 from "../../assets/dress1.avif";
import dress2 from "../../assets/dress2.avif";
import dress3 from "../../assets/dress3.avif";
import dress4 from "../../assets/dress4.avif";
import dress5 from "../../assets/dress5.avif";
import dress6 from "../../assets/dress6.avif";

export const ZARA = () => {
  return (
      <div className="min-h-screen bg-gray-100 py-10 px-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        ZARA Dresses Collection 👗
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress1} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Floral Dress</h2>
            <p className="text-gray-600">₹1999</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress2} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Summer Dress</h2>
            <p className="text-gray-600">₹2499</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress3} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Party Dress</h2>
            <p className="text-gray-600">₹2999</p>
          </div>
        </div>

         {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress4} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Party Dress</h2>
            <p className="text-gray-600">₹2999</p>
          </div>
        </div>

         {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress5} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Party Dress</h2>
            <p className="text-gray-600">₹2999</p>
          </div>
        </div>

         {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={dress6} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Party Dress</h2>
            <p className="text-gray-600">₹2999</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default ZARA;
