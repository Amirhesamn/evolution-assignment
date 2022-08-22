import { createSlice } from "@reduxjs/toolkit";
import { getNextShape } from "../utils";

type RotaionCoordinate = `${number} ${number}`;

type SliceState = {
  initialMap: string[][];
  map: string[][];
  rotaionQueue: RotaionCoordinate[];
  message: string;
};

const initialState: SliceState = {
  initialMap: [],
  map: [],
  rotaionQueue: [],
  message: "",
};
export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setInitialMap: (state, action) => {
      state.initialMap = action.payload;
      state.map = action.payload;
    },
    setMap: (state, action) => {
      const { rowIndex, colIndex, pipe } = action.payload;
      const rotateStep: RotaionCoordinate = `${colIndex} ${rowIndex}`;

      state.map[rowIndex][colIndex] = getNextShape(pipe);

      if (state.initialMap[rowIndex][colIndex] === getNextShape(pipe)) {
        state.rotaionQueue = state.rotaionQueue.filter(
          (rotate) => rotate !== rotateStep
        );
      } else {
        state.rotaionQueue = [...state.rotaionQueue, rotateStep];
      }
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setInitialMap, setMessage , setMap } = mapSlice.actions;

export default mapSlice.reducer;
