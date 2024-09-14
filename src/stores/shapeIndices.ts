import { create } from "zustand";
import { ShapeIndices } from "@/interface/captcha"; 


interface ShapeIndicesStore {
  shapes: ShapeIndices;
  updateShapeIndices: (shapes: ShapeIndices) => void;
}


export const useShapeIndicesStore = create<ShapeIndicesStore>((set) => ({
  shapes: { triangle: [], circle: [], square: [] }, 
  updateShapeIndices: (shapes: ShapeIndices) => set({ shapes }), 
}));


interface SelectedShapeStore {
  selectedShapeIndices: number[];
  updateSelectedShapeIndices: (selectedShapeIndices: number[]) => void;
}

export const useSelectedShapeIndicesStore = create<SelectedShapeStore>((set) => ({
  selectedShapeIndices: [], 
  updateSelectedShapeIndices: (selectedShapeIndices: number[]) => set({ selectedShapeIndices }), 
}));