import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/malllogo.png";
import image1 from "../assets/image1.png";
import shop1 from "../assets/shop1.png";
import shop2 from "../assets/shop2.png";
import shop3 from "../assets/shop3.png";
import shopping from "../assets/shopping.png";
import ent from "../assets/ent.png";
import foodl from "../assets/foodl.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";


const HomePage = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const logout = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/logout");

      alert(res.data.message || "Logged out");

      navigate("/LoginPage");

    } catch (err) {
      console.log("Logout Error:", err.response?.data);

      alert("Logout failed");
    }
  };

  return (
    <div className="font-serif">

      <div className="w-full h-[150px] bg-stone-50 flex items-center justify-between px-6">

        <div className="flex items-center justify-center w-[600px]">
          <img src={logo} alt="logo" className="h-32 w-32" />
        </div>

        <div className="ml-auto flex gap-10  text-black font-extrabold text-2xl pr-12 mr-14">
          <p className=" hover:text-red-500 hover:underline cursor-pointer">Home</p> |
          <p className=" hover:text-red-500 hover:underline cursor-pointer">Shopping</p> |
          <p className=" hover:text-red-500 hover:underline cursor-pointer">Entertainment</p> |
          <p className=" hover:text-red-500 hover:underline cursor-pointer">Indulgence</p> |
          <p className=" hover:text-red-500 hover:underline cursor-pointer">Contact Us</p>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-4 scroll-smooth snap-x snap-mandatory">

        <img src={shop1} className="w-full h-[700px] flex-shrink-0 snap-center object-cover rounded-lg" />

        <img src={shop2} className="w-full h-[700px] flex-shrink-0 snap-center object-cover rounded-lg" />

        <img src={shop3} className="w-full h-[700px] flex-shrink-0 snap-center object-cover rounded-lg" />

      </div>

      <div className="mt-6 h-screen bg-gradient-to-b from-stone-30 via-pink-100 to-pink-200">

        <div className="mt-4 text-6xl  flex items-center justify-center font-bold">
          Ambience Malls
        </div>

        <div className="mt-8 flex items-center justify-center ">
          <img src={image1} alt="logo" className="w-80" />
        </div>

        <div className="mt-6 mx-[130px] text-2xl leading-9 ">
          <p><b>Ambience Malls in Gurugram and Vasant Kunj</b> are renowned as premium one-stop destinations, offering a blend of luxury, fashion, beauty, and lifestyle
            options. With around 300 retail stores, Ambience Malls have become India's most popular shopping destinations, catering to a billion people and providing a
            comprehensive shopping experience for the entire family. You can also enjoy at spectacular gaming zone, and other forms of entertainment that are kids and
            adults alike. You can also head towards iSkate, PVR and cafe lounge where you can spend all day indulging in a slew of fun activities.
          </p>
        </div>

        <div className="w-[90%] mx-auto flex justify-between gap-4 mt-30">

          {/* BOX 1 */}
          <div onClick={()=> navigate("/Dresses")}className="w-[500px] h-[400px] bg-white  p-6 rounded-4xl shadow-md">

            <div className="rounded-full object-cover flex items-center justify-center">
              <img src={shopping} alt="logo" className="w-40" />
            </div>

            <h2 className="mt-2 text-2xl font-extrabold flex items-center justify-center mb-2">Fashion & Luxury </h2>

            <p className="m-4 text-xl leading-8 " > Explore an array of fashion stores and luxury brands, providing the latest
              trends and high-end products for a refined shopping experience.</p>

          </div>

          {/* BOX 2 */}
          <div onClick={()=> navigate("/Food")} className="w-[500px] h-[400px] bg-white p-6 rounded-4xl shadow-md">

            <div className="rounded-full object-cover flex items-center justify-center">
              <img src={ent} alt="logo" className="w-40" />
            </div>

            <h2 className="mt-2 text-2xl font-extrabold flex items-center justify-center mb-2">Entertainment</h2>
            <p className="m-4 text-xl leading-8 ">Indulge in beauty and lifestyle shops, spas, and salons,
              ensuring a rejuvenating and stylish visit for all guests.</p>
          </div>

          {/* BOX 3 */}
          <div onClick={()=> navigate("/Game")} className="w-[500px] h-[400px] bg-white p-6 rounded-4xl shadow-md">

            <div className="rounded-full object-cover flex items-center justify-center">
              <img src={foodl} alt="logo" className="w-40" />
            </div>

            <h2 className="mt-2 text-2xl font-extrabold flex items-center justify-center mb-2">Food</h2>
            <p className="m-4 text-xl leading-8" >Enjoy diverse dining options, a multiplex cinema, gaming zones, and recreational activities,
              making it a perfect destination for family fun and relaxation.</p>
          </div>

        </div>
      </div>


      <div className="w-full h-screen flex">

        {/* LEFT SIDE IMAGE */}
        <div className="w-2/3">
          <img
            src={image2}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-1/2 flex items-center justify-center p-10 bg-gradient-to-b from-stone-30 via-pink-100 to-pink-200 ">
          <div>
            <h1 className="text-7xl font-black mb-8 flex items-center justify-center">  Top-Tier Experience  </h1>
            <p className="text-2xl leading-8">
              Explore a world of premium shopping experience with a wide range of national and international brands.
              From fashion and lifestyle stores to luxury labels, discover everything under one roof.

            </p>
          </div>
        </div>


      </div>

      <div className="w-full h-screen flex">


        {/* RIGHT SIDE CONTENT */}
        <div className="w-1/2 flex items-center justify-center p-10 bg-gradient-to-b from-stone-30 via-orange-100 to-orange-200 ">
          <div>
            <h1 className="text-7xl font-black mb-8 flex items-center justify-center"> Fun City </h1>
            <p className="text-2xl leading-8">
              Step into an exciting world of fun and entertainment with a vibrant gaming zone designed for all age groups.
              Enjoy a wide variety of arcade games, VR experiences, and interactive attractions that bring thrill and excitement to your visit.
            </p>
          </div>

        </div>


        {/* LEFT SIDE IMAGE */}
        <div className="w-2/3">
          <img
            src={image3}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <div className="w-full h-screen flex">

        {/* LEFT SIDE IMAGE */}
        <div className="w-2/3">
          <img
            src={image4}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-1/2 flex items-center justify-center p-10 bg-gradient-to-b from-stone-30 via-blue-100 to-blue-200 ">
          <div>
            <h1 className="text-7xl font-black mb-8 flex items-center justify-center"> Fine Dine </h1>
            <p className="text-2xl leading-8">
              Enjoy a variety of delicious cuisines in a comfortable and elegant dining environment,
              perfect for family dinners, casual outings, and special occasions.
            </p>
          </div>

        </div>
      </div>


      <div className="w-full bg-gradient-to-b  text-black py-12 ">

        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* GURUGRAM */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Gurugram</h2>
            <p className="text-black">NH-8, Sector 24, Gurugram, Haryana 122002</p>
            <p className="text-black mt-2">088608 00800</p>
            <p className="text-black">customercare.gurgaon@ambiencemalls.com</p>
            <p className="text-black mt-2 cursor-pointer hover:text-white">Visit Website</p>
          </div>

          {/* VASANT KUNJ */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Vasant Kunj</h2>
            <p className="text-black">Nelson Mandela Marg, Vasant Kunj, New Delhi, 110070</p>
            <p className="text-black mt-2">011 4087 0066</p>
            <p className="text-black">sainipriyanshi267@gmail.com</p>
          </div>

          {/* LINKS */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Links</h2>
            <p className="text-black cursor-pointer hover:text-white">Blogs</p>
            <p className="text-black cursor-pointer hover:text-white">App Terms</p>
            <p className="text-black cursor-pointer hover:text-white">
              Loyalty Program Terms & Conditions
            </p>
            <p className="text-black cursor-pointer hover:text-white">
              Privacy Policy
            </p>
          </div>

        </div>

        {/* LAST LINE */}
        <p className="text-center text-xs text-black mt-10">
          © 2026 Ambience Mall. All Rights Reserved.
        </p>

      </div>
    </div>

  );
};

export default HomePage;