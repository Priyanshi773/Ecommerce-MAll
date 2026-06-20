import React from 'react'
import vr1 from "../../assets/vr1.jpeg";
import vr2 from "../../assets/vr2.png";
import vr3 from "../../assets/vr3.png";

const Arcade = () => {

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">

            {/* Heading */}
            <h1 className="text-6xl font-bold text-center mb-10">
                VR & Adventure Games
            </h1>

            {/* Grid */}
            <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
                    <img src={vr1} className="w-full h-2/3 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">🏎️ VR Racing</h2>
                        <p className="text-gray-600 text-2xl font-bold">Price: ₹200 – ₹350 per session </p>
                        <button className="mt-6 flex items-center justify-center gap-2 text-white px-8 py-2 rounded-lg bg-gray-800 transition ">
                            Book a Session
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
                    <img src={vr2} className="w-full h-2/3 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">🏃 Escape Room</h2>
                        <p className="text-gray-600  text-2xl font-bold">Price: ₹300 – ₹500 per person </p>
                        <button className="mt-6 flex items-center justify-center gap-2 text-white px-8 py-2 rounded-lg bg-gray-800 transition ">
                            Book a Session
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
                    <img src={vr3} className="w-full h-2/3 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">🎢 VR Roller Coaster</h2>
                        <p className="text-gray-600  text-2xl font-bold ">Price: ₹150 – ₹250 per ride </p>
                        <button className="mt-6 flex items-center justify-center gap-2 text-white px-8 py-2 rounded-lg bg-gray-800 transition ">
                            Book a Session
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Arcade;