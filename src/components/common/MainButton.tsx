
interface ButtonProps {
    clickFunction: () => void;
    text:string 
  }

export default function Button({ clickFunction, text }: ButtonProps) {
    return (
    <div>
        <button onClick={clickFunction} 
                className="bg-yellow-500 px-10 py-1 text-white transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-60" >
                {text}
        </button>
    </div>
  )
}
