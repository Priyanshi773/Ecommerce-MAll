import React from 'react'
import ar1 from "../../assets/ar1.png";
import ar2 from "../../assets/ar2.png";
import ar3 from "../../assets/ar3.png";

const Arcade = () => {

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">

            {/* Heading */}
            <h1 className="text-6xl font-bold text-center mb-10">
                Arcade Games
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={ar1} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Left Survive </h2>
                        <p className="text-gray-800" >Experience thrilling target shooting challenges
                            with interactive digital shooting games. Improve your aim, score points,
                            and compete for the highest score in an action-packed environment.</p>
                        <p className="text-gray-600 text-2xl font-bold"> Price: ₹250 per session </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={ar2} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Bowling</h2>
                        <p className="text-gray-800"> Test your accuracy and skills in our modern bowling
                            arena. Knock down all the pins, compete
                            with friends, and enjoy a fun-filled bowling experience suitable for all ages.. </p>
                        <p className="text-gray-600  text-2xl font-bold">Price:  ₹300 per game (1 player) </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
                    <img src={ar3} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Claw Machine</h2>
                        <p className="text-gray-800"> Try your luck and grab exciting toys, plushies, and surprise prizes from our claw machines.
                            A fun and entertaining game that rewards both skill and patience.</p>
                        <p className="text-gray-600  text-2xl font-bold ">Price: ₹50 per attempt </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Arcade;