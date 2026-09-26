import React from 'react'
import Arcade from "../../assets/arcade.png";
import VR from "../../assets/Vr.png";
import { useNavigate } from "react-router-dom";

export const Game = () => {

    const navigate = useNavigate();
    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-blue-200 flex flex-col items-center py-10 px-4'>

            <div className="flex gap-6 md:gap-16 justify-center flex-wrap mt-4">

                {/* card1 */}
                <div onClick={() => navigate("/Arcade")} className="w-full max-w-[280px] md:max-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                    transition-all duration-300 cursor-pointer">
                    <img src={Arcade} className='w-full h-[320px] md:h-[560px] object-cover' />
                    <div className="py-4">
                        <h1 className="flex justify-center items-center text-xl md:text-2xl font-bold text-center px-2">Arcade Games</h1>
                    </div>
                </div>

                {/* card2 */}
                <div onClick={() => navigate("/VR")} className="w-full max-w-[280px] md:max-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                    transition-all duration-300 cursor-pointer">
                    <img src={VR} className='w-full h-[320px] md:h-[560px] object-cover' />
                    <div className="py-4">
                        <h1 className="flex justify-center items-center text-xl md:text-2xl font-bold text-center px-2">VR & Adventure Games</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Game;