import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const {setInitialMap} = mapSlice.actions;

export default mapSlice.reducer;
