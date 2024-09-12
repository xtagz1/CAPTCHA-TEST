import { useState } from "react";
import Commandtext from "../common/Commandtext";
import MainButton from "../common/MainButton";
import ImageAndSelectionContainer from "./ImageAndSelectionContainer";
import { useLocation,useNavigate } from "react-router-dom";

export default function ActionContainer() {
  
  const navigate = useNavigate()
  const location = useLocation();
  const locationIsHome = location.pathname === "/";
  const [toContinue, setToContinue] = useState(false);

  // Function to handle button click
  const buttonClick = () => {
    if (locationIsHome) {
      setToContinue(true);
      navigate('/validation')  
    } else {
      alert('clicked!!!!');
    }
  };

  const commandText = 'Take Selfie';
  return (
    <div className="h-full flex flex-col items-center justify-center gap-6">
      <Commandtext text={commandText} />
      <ImageAndSelectionContainer toContinue={toContinue} />
      <MainButton clickFunction={buttonClick} text={"CONTINUE"} />
    </div>
  );
}
