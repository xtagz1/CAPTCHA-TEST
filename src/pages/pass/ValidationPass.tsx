import { useNavigate } from "react-router-dom"


export default function ValidationPass() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

  return (
    <div className="border h-[100dvh] flex flex-col  gap-4 justify-center items-center">
        <div className="text-6xl">Validation Passed</div>
        <div className="text-blue-500 underline cursor-pointer" onClick={handleClick}>Back to home</div>
    </div>
  )
}
