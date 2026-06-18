import React from 'react'
import Dominos from "../../assets/pizzaa.jpeg";
import burger from "../../assets/burger.png";
import {useNavigate} from "react-router-dom";

export const Food = () => {

    const navigate = useNavigate();
    return (
        <div className='min-h-screen w-full bg-gray-300 flex flex-col items-center  py-10'>

            <div className="flex gap-16 justify-center flex-wrap mt-4">

                {/* card1 */}
                <div onClick={() => navigate("/Dominos")} className="w-100 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                    transition-all duration-300">
                    <img src={Dominos} className='w-full h-140 object-cover' />
                    <div className=" py-4">
                        <h1 className="flex justify-center align-middle text-2xl font-bold"> DOMINO'S</h1>
                    </div>
                </div>

                {/* card2 */}
                <div onClick={() => navigate("/Burger")} className="w-100 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 
                    transition-all duration-300">
                    <img src={burger} className='w-full h-140 object-cover' />
                    <div className="py-4">
                        <h1 className="flex justify-center align-middle text-2xl font-bold"> BURGER KING </h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Food;
