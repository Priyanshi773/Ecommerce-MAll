import React, { useState } from 'react'
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useCart } from "../Dresses/CartContext";

import dress1 from "../../assets/dress1.avif";
import dress2 from "../../assets/dress2.avif";
import dress3 from "../../assets/dress3.avif";
import dress4 from "../../assets/dress4.avif";
import dress5 from "../../assets/dress5.avif";
import dress6 from "../../assets/dress6.avif";

export const ZARA = () => {

  const navigate = useNavigate();

  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");
  const [cart , setCart] = useState(0);

  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    setCart(cart+1);
    showToast("added to cart");
  }

  const showToast = (msg) => {
    setMessage(msg);
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        ZARA Dresses Collection 👗
      </h1>

      <div onClick={() => navigate("/Cart")}
      className="fixed top-8 right-8 cursor-pointer ">
        <FaShoppingCart className="text-5xl text-black" />
        {cart > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm px-2 rounded-full">
            {cart}
          </span>
        )}
      </div>
      {/* Grid */}
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
          <img src={dress1} className="w-full h-96 object-cover object-top" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
              ✨ Red Chic Party Dress
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>4.8</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $3950
            </p>

            <button 
           onClick={() =>
                         handleAddToCart({
                           id: 1,
                           name: "✨ Red Chic Party Dress",
                           price: 3950,
                           image: dress1,
                         })
                       }
            className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
          <img src={dress2} className="w-full h-96 object-cover object-bottom" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
              💃White Evening Dress
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>4.2</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $2950
            </p>

            <button 
             onClick={() =>
                         handleAddToCart({
                           id: 2,
                           name: "💃 White Evening Dress",
                           price: 2950,
                           image: dress2,
                         })
                       }
             className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
          <img src={dress3} className="w-full h-96 object-cover object-bottom" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
              🎀 Red Midi Dress
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>4.4</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $2999
            </p>

            <button
               onClick={() =>
                         handleAddToCart({
                           id: 3,
                           name: "🎀 Red Midi Dress",
                           price: 2999,
                           image: dress3,
                         })
                       }
             className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>


        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
          <img src={dress4} className="w-full h-96 object-cover object-bottom" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
              🌟 Long Gown Dress
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>4.6</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $4950
            </p>

            <button 
             onClick={() =>
                         handleAddToCart({
                           id: 4,
                           name: "🌟 Long Gown Dress",
                           price: 4950,
                           image: dress4,
                         })
                       } 
             className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
          <img src={dress5} className="w-full h-96 object-cover object-top" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
              🌹 Net Black Dress
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>4.2</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $1999
            </p>

            <button 
              onClick={() =>
                         handleAddToCart({
                           id: 5,
                           name: "🌹 Net Black Dress",
                           price: 1999,
                           image: dress5,
                         })
                       }
             className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 6*/}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
          <img src={dress6} className="w-full h-96 object-cover object-bottom" />

          <div className="p-5 flex flex-col gap-3">

            <p className="font-bold text-2xl">
              ☀️ Printed Dress
            </p>

            <div className="flex items-center gap-2 text-xl font-bold">
              <FaStar className="text-yellow-500" />
              <p>5.0</p>
            </div>

            <p className="text-2xl font-bold text-gray-800">
              $4599
            </p>

            <button 
             onClick={() =>
                         handleAddToCart({
                           id: 6,
                           name: "☀️ Printed Dress",
                           price: 4599,
                           image: dress6,
                         })
                       }
             className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>

      </div>

      {toast && (
        <div
          className="fixed bottom-5 right-5 bg-black text-white px-10 py-5 rounded-lg shadow-lg z-50"
        >
          {message}
        </div>
      )}
    </div>

  )
}

export default ZARA;
