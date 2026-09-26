import React from 'react'
import ZARA from "../../assets/ZARA.jpg";
import HM from "../../assets/HM.png";
import { useNavigate } from 'react-router-dom';


export const Dresses = () => {

    const navigate = useNavigate();
    return (
        <div className="min-h-screen w-full bg-gradient-to-br bg-slate-50 via-blue-100 to-blue-200 flex flex-col items-center py-10 px-4">

            {/* Cards Row */}
            <div className="flex gap-6 md:gap-16 justify-center flex-wrap mt-4">

                {/* Card 1 */}
                <div onClick={() => navigate("/ZARA")} className="w-full max-w-[280px] md:max-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                    transition-all duration-300 cursor-pointer">
                    <img src={ZARA} className="w-full h-[320px] md:h-[560px] object-cover" />
                    <div className="p-4">
                        <h2 className="flex justify-center items-center text-xl md:text-2xl font-bold">ZARA</h2>
                    </div>
                </div>

                {/* Card 2 */}
                <div onClick={() => navigate("/HM")} className="w-full max-w-[280px] md:max-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                    transition-all duration-300 cursor-pointer">
                    <img src={HM} className="w-full h-[320px] md:h-[560px] object-cover" />
                    <div className="p-4">
                        <h2 className="flex justify-center items-center text-xl md:text-2xl font-bold">H&M</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dresses;