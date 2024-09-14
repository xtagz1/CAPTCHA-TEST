

import { ShapeIndices } from "@/interface/captcha";
import { useCommandStore } from "@/stores/commandTextStore";
import { useSelectedShapeIndicesStore, useShapeIndicesStore } from "@/stores/shapeIndices";

  
type UseShapeValidation = (

) => { validate: () => boolean };

// hooks for validating selected shapes
const useShapeValidation: UseShapeValidation = ( ) => {
    const { shapes } = useShapeIndicesStore()
    const { command } = useCommandStore()
    const { selectedShapeIndices } = useSelectedShapeIndicesStore()

    const validate = (): boolean => {
        if(command?.shape) {
            const matchingKey = Object.keys(shapes).find(key => key === command.shape);
            if (matchingKey) {
                const commandShape = shapes[matchingKey as keyof ShapeIndices];

                const allElementsSelected = 
                commandShape.length === selectedShapeIndices.length && 
                commandShape.every(shapeIndex => selectedShapeIndices.includes(shapeIndex)) &&
                selectedShapeIndices.every(shapeIndex => commandShape.includes(shapeIndex));

                return allElementsSelected;
            } else {
                console.log('No matching shape found.');
                return false;
            }
            }
            return false;
        }

    return { validate };
};

export default useShapeValidation;
