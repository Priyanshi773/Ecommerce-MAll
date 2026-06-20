import React from 'react'
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";

const Burger = () => {

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">

            {/* Heading */}
            <h1 className="text-6xl font-bold text-center mb-10">
               Burger King 
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={b1} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Korean Kimchi Veg Whopper</h2>
                        <p className="text-gray-800" >The Korean Kimchi Paneer Burger is a popular, limited-time menu item from Burger King India. 
                            It features a crispy paneer patty dunked in a sweet-and-spicy Korean glaze, and served on a toasted premium brioche bun</p>
                        <p className="text-gray-600 text-2xl font-bold">₹199/- </p>
                        <button className="mt-6 flex items-center justify-center gap-2 text-white px-8 py-2 rounded-lg bg-gray-800 transition ">
                           Add to Cart
                        </button>
                        
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={b2} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Veg Makhni Burst Burger</h2>
                         <p className="text-gray-800"> A bold fusion of the classic Whopper with 
                        authentic Korean flavor profiles. It is notoriously saucy, packed with heat,
                         and balanced by a tangy-sweet kimchi sauce. </p>
                        <p className="text-gray-600  text-2xl font-bold">₹69/- </p>
                                                <button className="mt-6 flex items-center justify-center gap-2 text-white px-8 py-2 rounded-lg bg-gray-800 transition ">
                           Add to Cart
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={b3} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Crispy Veg Double Patty</h2>
                         <p className="text-gray-800"> The Crispy Veg Double Patty is a fan-favorite,
                             budget-friendly burger featuring two crunchy, golden-fried vegetable 
                             patties layered with fresh onions, creamy mayo, and signature sauces, all served in a soft premium bun </p>
                        <p className="text-gray-600  text-2xl font-bold ">₹89/- </p>
                                                <button className="mt-6 flex items-center justify-center gap-2 text-white px-10 py-2 rounded-lg bg-gray-800 transition ">
                           Add to Cart
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Burger;