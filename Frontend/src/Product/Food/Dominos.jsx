import React from 'react'
import pizza1 from "../../assets/pizza1.jpeg";
import pizza2 from "../../assets/pizza2.jpeg";
import pizza3 from "../../assets/pizza3.jpeg";

const Dominos = () => {

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">

            {/* Heading */}
            <h1 className="text-4xl font-bold text-center mb-10">
                DOMINO'S
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={pizza1} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Veg Extravaganza</h2>
                      <p className="text-gray-800 "> Veg Extravaganza is a highly popular, fully loaded vegetarian pizza
                         premium offering curated by Domino's Pizza India.</p>
                        <p className="text-gray-600 text-2xl font-bold">₹309/-</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={pizza2} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Margherita</h2>
                         <p className="text-gray-800 "> Domino's Margherita pizza is a classic, authentic Italian style pie featuring
                         the perfect combination of flavorful pizza sauce, 100% real mozzarella cheese, and warm baked dough.</p>
                        <p className="text-gray-600 text-2xl font-bold">₹350/-</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={pizza3} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Capsicum Pizza</h2>
                         <p className="text-gray-800 "> Topped with shredded, crunchy green capsicum (bell peppers) 
                            and liquid creamy cheese on a regular crust.</p>
                        <p className="text-gray-600 text-2xl font-bold">₹300/-</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dominos;