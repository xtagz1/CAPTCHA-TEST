interface CommandtextProps {
    text:string,
}

export default function Commandtext({text }: CommandtextProps) {
  return (
    <div className="text-blue-700 text-lg">{text}</div>
  )
}
