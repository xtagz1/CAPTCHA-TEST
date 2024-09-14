import { useNavigate } from "react-router-dom"


export default function NotFound() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center">
        <div className="text-2xl">Not Found</div>
        <div onClick={handleClick} className="underline text-blue-500 cursor-pointer">Back to home</div>
    </div>
  )
}
