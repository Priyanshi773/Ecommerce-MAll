import React from 'react'
import { FaStar, FaShoppingCart } from 'react-icons/fa';
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
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">

        {/* Card 1 */}
        <div  className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
          <img src={hm1} className="w-full h-96 object-cover object-bottom" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
              Cotton Dress
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>4.8</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $999
            </p>

            <button className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>   
        </div>

        {/* Card 2 */}
        <div  className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
          <img src={hm2} className="w-full h-96 object-cover object-bottom" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
              🌷 Wrap Dress
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>5.0</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $1599
            </p>

            <button className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>   
        </div>   
       

        {/* Card 3 */}
         <div  className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black">
          <img src={hm3} className="w-full h-96 object-cover object-bottom" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
             ✨ Satin Midi Dress
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>4.6</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $1299
            </p>

            <button className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>   
        </div>

        {/* Card 4 */}
        <div  className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
          <img src={hm4} className="w-full h-96 object-cover object-bottom" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
             👚 Printed Casual Top
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>4.1</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $999
            </p>

            <button className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>   
        </div>

        {/* Card 5*/}
        <div  className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black">
          <img src={hm5} className="w-full h-96 object-cover object-bottom" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
               🎀 Puff Sleeve Top
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>4.2</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $799
            </p>

            <button className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>   
        </div>

        {/* Card 6 */}
        <div  className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
          <img src={hm6} className="w-full h-96 object-cover object-bottom" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
              ☀️ Sleeveless Summer Dress
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>4.5</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $1999
            </p>

            <button className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>   
        </div>



      </div>
    </div>

  )
}

export default HM;
