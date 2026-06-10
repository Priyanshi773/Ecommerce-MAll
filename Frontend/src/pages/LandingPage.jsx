import { useNavigate } from "react-router-dom";
import blue from "../assets/blue.jpg";

export default function LandingPage() {

    const navigate = useNavigate();

    return (
        <div className ="h-screen w-full flex flex-row bg-cover items-center justify-center gap-4" 
         style={{ backgroundImage: `url(${blue})` }}
        > 
        <div className="flex gap-6 ">
          <button
                onClick={() => navigate("/LoginPage")}
                      className="px-8 py-3 text-4xl rounded-xl bg-white text-blue-900 font-semibold shadow-lg 
                     hover:bg-blue-200 hover:scale-105 transition duration-300"
                >
                Login
            </button>

            <button
                onClick={() => navigate("/RegisterPage")}
                className="px-8 py-3 text-4xl rounded-xl bg-white text-blue-900 font-semibold shadow-lg 
                     hover:bg-blue-200 hover:scale-105 transition duration-300"
                >
                Register
            </button>

        </div>
           
        </div>

    )
}
