import { GenerateRandomCommands } from "@/hooks/GenerateRandomCommands"

interface CommandtextProps {
  
}

export default function Commandtext({ }: CommandtextProps) {

  const { command } = GenerateRandomCommands()
  return (
    <div className="text-blue-700 text-lg">{ command?.text }</div>
  )
}
