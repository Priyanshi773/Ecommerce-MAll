import React, { useState } from 'react'
import { FaStar, FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { useCart } from "../Dresses/CartContext";

import hm1 from "../../assets/hm1.webp";
import hm2 from "../../assets/hm2.webp";
import hm3 from "../../assets/hm3.webp";
import hm4 from "../../assets/hm4.webp";
import hm5 from "../../assets/hm5.webp";
import hm6 from "../../assets/hm6.webp";

export const HM = () => {

  const navigate = useNavigate();

  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");
  const [cart, setCart] = useState(0);

  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);   // context wala
    setCart(cart + 1); // badge count
    showToast("added to cart 🛍️");
  };


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
        H&M Dresses Collection 👗
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
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
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

            <button onClick={() =>
              handleAddToCart({
                id: 1,
                name: "Cotton Dress",
                price: 999,
                image: hm1,
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

            <button onClick={() =>
              handleAddToCart({
                id: 2,
                name: " 🌷 Wrap Dress",
                price: 1599,
                image: hm2,
              })
            }
              className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>


        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black">
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

            <button onClick={() =>
              handleAddToCart({
                id: 3,
                name: " ✨ Satin Midi Dress ",
                price: 1299,
                image: hm3,
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

            <button onClick={() =>
              handleAddToCart({
                id: 4,
                name: "  👚 Printed Casual Top ",
                price: 999,
                image: hm4,
              })
            }
              className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 5*/}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black">
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

            <button onClick={() =>
              handleAddToCart({
                id: 5,
                name: " 🎀 Puff Sleeve Top  ",
                price: 799,
                image: hm5,
              })
            }
              className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
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

            <button onClick={() =>
              handleAddToCart({
                id: 6,
                name: " ☀️ Sleeveless Summer Dress",
                price: 1999,
                image: hm6,
              })
            }
              className="mt-auto flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-gray-800 transition">
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>



      </div>

      {/* ✅ TOAST UI */}
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

export default HM;
