
interface ButtonProps {
    clickFunction: () => void;
    text:any 
  }

export default function Button({ clickFunction, text }: ButtonProps) {
    return (
    <div>
        <button onClick={clickFunction} className="bg-yellow-500 px-10 py-1 text-white">{text}</button>
    </div>
  )
}
