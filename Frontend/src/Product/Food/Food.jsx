import React from 'react'
import Dominos from "../../assets/pizzaa.jpeg";
import burger from "../../assets/burger.png";
import { useNavigate } from "react-router-dom";

export const Food = () => {

    const navigate = useNavigate();
    return (
        <div className='min-h-screen w-full bg-gradient-to-b bg-slate-50 via-blue-50 to-blue-100 flex flex-col items-center py-10 px-4'>

            <div className="flex gap-6 md:gap-16 justify-center flex-wrap mt-4">

                {/* card1 */}
                <div onClick={() => navigate("/Dominos")} className="w-full max-w-[280px] md:max-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                    transition-all duration-300 cursor-pointer">
                    <img src={Dominos} className='w-full h-[320px] md:h-[560px] object-cover' />
                    <div className="py-4">
                        <h1 className="flex justify-center items-center text-xl md:text-2xl font-bold"> DOMINO'S</h1>
                    </div>
                </div>

                {/* card2 */}
                <div onClick={() => navigate("/Burger")} className="w-full max-w-[280px] md:max-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                    transition-all duration-300 cursor-pointer">
                    <img src={burger} className='w-full h-[320px] md:h-[560px] object-cover' />
                    <div className="py-4">
                        <h1 className="flex justify-center items-center text-xl md:text-2xl font-bold"> BURGER KING </h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Food;