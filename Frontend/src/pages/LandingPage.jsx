import { useNavigate } from "react-router-dom";

export default function LandingPage() {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-blue-200 px-4">
            <div className="w-full max-w-[350px] min-h-[300px] bg-white rounded-xl shadow-2xl">
                <div className="flex flex-col items-center gap-6 mt-14 pb-14">

                    <button
                        onClick={() => navigate("/LoginPage")}
                        className="w-48 px-8 py-6 bg-blue-950 text-white rounded-2xl">
                        <h1 className="text-2xl font-bold">Login</h1>
                    </button>

                    <button
                        onClick={() => navigate("/RegisterPage")}
                        className="w-48 px-8 py-6 bg-blue-950 text-white rounded-2xl">
                        <h1 className="text-2xl font-bold">Register</h1>
                    </button>

                </div>
            </div>

        </div>
    )
}
