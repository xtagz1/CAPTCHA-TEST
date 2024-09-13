import Commandtext from "../common/Commandtext";
import MainButton from "../common/MainButton";
import ImageAndSelectionContainer from "./ImageAndSelectionContainer";
import { useNavigate } from "react-router-dom";
import { useButtonStore } from "@/stores/buttonValueStore";
import { HomeLocationChecker } from "@/hooks/HomeLocationChecker";
import { useSelectedShapeIndicesStore, useShapeIndicesStore } from "@/stores/shapeIndices";
import { useCommandStore } from "@/stores/commandTextStore";
import { ShapeIndices } from "@/interface/shapeInterface";

export default function ActionContainer() {
  
  const navigate = useNavigate()
  const { locationIsHome } = HomeLocationChecker()
  const { buttonValue, updateButton } = useButtonStore()
  const { shapes } = useShapeIndicesStore()
  const { command } = useCommandStore()
  const { selectedShapeIndices } = useSelectedShapeIndicesStore()



  // Function to handle button click
  const buttonClick = () => {
    if (locationIsHome) {
      updateButton({ toContinue: true, text: 'VALIDATE' });
      navigate('/validation');
    } else {
      if (command?.shape) {
        // Find the key that matches command.shape
        const matchingKey = Object.keys(shapes).find(key => key === command.shape);
        if (matchingKey) {
          // Get the array corresponding to the matching key
          const commandShape = shapes[matchingKey as keyof ShapeIndices];
          // Check if all elements in commandShape are present in selectedShapeIndices
          const allElementsSelected = commandShape.every(shapeIndex => 
            selectedShapeIndices.includes(shapeIndex)
          );
          // Return true if all elements are selected
          if (allElementsSelected) {
            console.log("All elements of the command shape are selected.");
            alert(true);
          }
          else{
            alert(false)
          }
        } else {
          console.log('No matching shape found.');
        }
      }
    }
  }; 

  return (
    <div className="h-full flex flex-col items-center  justify-around gap-6">
      <Commandtext />
      <ImageAndSelectionContainer />
      <MainButton clickFunction={buttonClick} text={buttonValue?.text} />
    </div>
  );
}
