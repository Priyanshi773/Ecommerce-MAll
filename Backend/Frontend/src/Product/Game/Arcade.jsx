import React, { useState } from 'react'
import ar1 from "../../assets/ar1.png";
import ar2 from "../../assets/ar2.png";
import ar3 from "../../assets/ar3.png";

const Arcade = () => {

    const [form, setForm] = useState(false);
     const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [selectedGame, setSelectedGame] = useState("");


    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">

            {/* Heading */}
            <h1 className="text-6xl font-bold text-center mb-10">
                Arcade Games
            </h1>

            {/* Grid */}
            <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black">
                    <img src={ar1} className="w-full h-2/3 object-cover" />

                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Left Survive </h2>
                        <p className="text-gray-600 text-2xl font-bold"> Price: ₹250 per session </p>
                        <button 
                        onClick={() => setForm("Left Survive")}
                        className="mt-6 flex items-center justify-center gap-2 text-white px-8 py-2 rounded-lg bg-gray-800 transition ">
                            Book a Session
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
                    <img src={ar2} className="w-full h-2/3 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Bowling</h2>
                        <p className="text-gray-600  text-2xl font-bold">Price:  ₹300 per game (1 player) </p>
                        <button
                         onClick={() => setForm("Bowling")}
                         className="mt-6 flex items-center justify-center gap-2 text-white px-8 py-2 rounded-lg bg-gray-800 transition ">
                            Book a Session
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition w-[450px] h-[600px] border border-black ">
                    <img src={ar3} className="w-full h-2/3 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Claw Machine</h2>
                        <p className="text-gray-600  text-2xl font-bold ">Price: ₹50 per attempt </p>
                        <button 
                         onClick={() => setForm("Claw Machine")}
                        className="mt-6 flex items-center justify-center gap-2 text-white px-8 py-2 rounded-lg bg-gray-800 transition ">
                            Book a Session
                        </button>
                    </div>
                </div>


            </div>


              {/* FORM MODAL */}

            {form && (

                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">


                    <div className="bg-white p-8 rounded-xl w-[400px] shadow-lg">


                        <h2 className="text-3xl font-bold mb-5 text-center">
                            Book {selectedGame}
                        </h2>


                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="w-full border p-3 rounded-lg mb-4"
                        />


                        <input
                            type="text"
                            placeholder="Enter Duration"
                            value={duration}
                            onChange={(e)=>setDuration(e.target.value)}
                            className="w-full border p-3 rounded-lg mb-4"
                        />



                        <button

                            onClick={()=>{

                                if(!name || !duration){

                                    alert("Please fill all details");
                                    return;

                                }


                                alert("Session Booked");


                                setName("");
                                setDuration("");
                                setForm(false);


                            }}

                            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold"
                        >

                            Session Booked

                        </button>


                    </div>


                </div>

            )}


        </div>
    )
}

export default Arcade;