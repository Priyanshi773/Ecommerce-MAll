import React from 'react'
import Arcade from "../../assets/arcade.png";
import VR from "../../assets/Vr.png";
import {useNavigate} from "react-router-dom";

export const Game = () => {

    const navigate = useNavigate();
    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-slate-50 to via-blue-50 to-indigo-100 flex flex-col items-center  py-10'>

            <div className="flex gap-16 justify-center flex-wrap mt-4">

                {/* card1 */}
                <div onClick={() => navigate("/Arcade")} className="w-100 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                    transition-all duration-300">
                    <img src={Arcade} className='w-full h-140 object-cover' />
                    <div className=" py-4">
                        <h1 className="flex justify-center align-middle text-2xl font-bold">Arcade Games</h1>
                    </div>
                </div>

                {/* card2 */}
                <div onClick={() => navigate("/VR")} className="w-100 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                    transition-all duration-300">
                    <img src={VR} className='w-full h-140 object-cover' />
                    <div className=" py-4">
                        <h1 className="flex justify-center align-middle text-2xl font-bold">VR & Adventure Games</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Game;