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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={vr1} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">🏎️ VR Racing</h2>
                        <p className="text-gray-800" >Step into the driver's seat and race on realistic virtual tracks. Compete against friends, navigate challenging courses, 
                            and enjoy an immersive racing experience with VR technology</p>
                        <p className="text-gray-600 text-2xl font-bold">Price: ₹200 – ₹350 per session </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={vr2} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">🏃 Escape Room</h2>
                        <p className="text-gray-800">Work together to solve puzzles, uncover hidden clues, and escape before time runs out. An exciting team-based
                             adventure that tests your problem-solving and communication skills. </p>
                        <p className="text-gray-600  text-2xl font-bold">Price: ₹300 – ₹500 per person </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={vr3} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">🎢 VR Roller Coaster</h2>
                        <p className="text-gray-800">Experience the thrill of a high-speed roller coaster through virtual 
                            reality. Feel the twists, turns, and drops in a fully immersive 360° adventure without leaving your seat.</p>
                        <p className="text-gray-600  text-2xl font-bold ">Price: ₹150 – ₹250 per ride </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Arcade;