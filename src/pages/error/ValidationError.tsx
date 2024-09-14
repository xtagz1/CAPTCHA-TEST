import { useNavigate } from "react-router-dom"


export default function ValidationError() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

  return (
    <div className="border h-[100dvh] flex flex-col  gap-4 justify-center items-center">
        <div className="text-6xl">You have failed validation and have been blocked</div>
        <div className="text-blue-500 underline cursor-pointer" onClick={handleClick}>Take a selfie again</div>
    </div>
  )
}
