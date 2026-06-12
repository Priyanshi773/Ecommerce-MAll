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
            <h2 className="text-2xl font-bold">👗 Western A-Line Dress</h2>
    <p className="text-gray-800">
      A trendy A-line dress with a flattering fit and modern silhouette.
      Perfect for college wear, outings, and weekend plans.
    </p>
    <p className="text-gray-600 text-2xl font-bold">₹1,599</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={hm2} className="w-full h-80 object-cover" />
           <h2 className="text-2xl font-bold">🌷 Wrap Dress</h2>
    <p className="text-gray-800">
      A stylish wrap dress designed to enhance your silhouette with elegance.
      Ideal for office wear, dinners, and casual outings.
    </p>
    <p className="text-gray-600 text-2xl font-bold">₹1,799</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={hm3} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold">✨ Satin Midi Dress</h2>
    <p className="text-gray-800">
      A luxurious satin midi dress with a smooth finish and elegant flow.
      Perfect for parties, dinners, and festive occasions.
    </p>
    <p className="text-gray-600 text-2xl font-bold">₹2,499</p>
          </div>
        </div>

         {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={hm4} className="w-full h-80 object-cover" />
          <div className="p-4">
           <h2 className="text-2xl font-bold">👚 Printed Casual Top</h2>
    <p className="text-gray-800">
      A trendy printed top with a modern design and comfortable fit.
      Perfect for college wear, casual outings, and weekend plans.
    </p>
    <p className="text-gray-600 text-2xl font-bold">₹699</p>
          </div>
        </div>

         {/* Card 5*/}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={hm5} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold">🎀 Puff Sleeve Top</h2>
            <p className="text-gray-800" >Elegant puff-sleeve top that adds a fashionable touch to your wardrobe.
               Ideal for brunches, parties, and special occasions.</p>
            <p className="text-gray-600 text-2xl font-bold">₹999</p>
          </div>
        </div>

         {/* Card 6 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={hm6} className="w-full h-80 object-cover" />
          <div className="p-4">
           <h2 className="text-2xl font-bold">☀️ Sleeveless Summer Dress</h2>
    <p className="text-gray-800">
      Lightweight and breathable summer dress designed for ultimate comfort.
      Perfect for hot days, vacations, and casual outings.
    </p>
    <p className="text-gray-600 text-2xl font-bold">₹1,299</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default HM;
