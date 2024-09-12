import Commandtext from "../common/Commandtext";
import MainButton from "../common/MainButton";
import ImageAndSelectionContainer from "./ImageAndSelectionContainer";
import { useLocation,useNavigate } from "react-router-dom";
import { useButtonStore } from "@/stores/buttonValueStore";
import { useCommandStore } from "@/stores/commandTextStore";

export default function ActionContainer() {
  
  const navigate = useNavigate()
  const location = useLocation();
  const locationIsHome = location.pathname === "/";
  const { buttonValue, updateButton } = useButtonStore()
  const { command  } = useCommandStore()

  // Function to handle button click
  const buttonClick = () => {
    if (locationIsHome) {
      updateButton({ toContinue:true, text: 'VALIDATE' })
      navigate('/validation')  
    } else {
      alert('clicked!!!!');
      console.log('chuchu')
    }
  };


  return (
    <div className="h-full flex flex-col items-center justify-center gap-6">
      <Commandtext text={command?.text} />
      <ImageAndSelectionContainer />
      <MainButton clickFunction={buttonClick} text={buttonValue?.text} />
    </div>
  );
}
