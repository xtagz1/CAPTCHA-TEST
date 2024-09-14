export interface ShapeIndices { 
    triangle: number[]; 
    circle: number[];
    square: number[];
  }


 export interface Command {
    text: string;
    shape: string
  }
  

export interface ButtonValue {
  toContinue: boolean;
  text: string;
}