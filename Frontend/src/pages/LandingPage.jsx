import { useNavigate } from "react-router-dom";

export default function LandingPage() {

    const navigate = useNavigate();

    return (
        <div className="h-screen w-full flex flex-row bg-blue-200 items-center justify-center gap-4">
            <div className="w-[350px] min-h-[300px] bg-white rounded-xl shadow-2xl">
                <div className="flex flex-col items-center  gap-6 mt-14 ">

                    <button
                        onClick={() => navigate("/LoginPage")}
                        className="w-48 px-8 py-6 bg-blue-950 text-white roundedl-2xl" >
                        <h1 className="text-2xl font-bold ">Login </h1>
                    </button>

                    <button
                        onClick={() => navigate("/RegisterPage")}
                        className="w-48 px-8 py-6 bg-blue-950 text-white" >
                        <h1 className="text-2xl font-bold ">Register </h1>
                    </button>

                </div>
            </div>

        </div>
    )
}
