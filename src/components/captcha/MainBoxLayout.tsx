import { HomeLocationChecker } from "@/hooks/HomeLocationChecker";
import ActionContainer from "./ActionContainer";
import { useNavigate } from "react-router-dom";



export default function MainBoxLayout() {
    const { locationIsHome } = HomeLocationChecker()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="border p-6 lg:h-[75dvh] w-[100vw] sm:w-[90dvw] md:w-[75dvw] lg:w-[55dvw] bg-gray-200 ">
                <div className="border w-full h-full bg-blue-900 py-10 px-10">
                    <div className="p-10 border h-full bg-white">
                        <ActionContainer/>
                    </div>
                </div>
            </div>
            <button 
                disabled={locationIsHome} 
                onClick={handleClick} 
                className={`self-end mr-8 underline cursor-pointer ${
                    locationIsHome ? 'text-gray-400 cursor-not-allowed' : 'text-blue-400'
                }`}
                >
                Back to home
                </button>
        </div>
    );
  }
  