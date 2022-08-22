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
  reducers: {},
});

export const {} = mapSlice.actions;

export default mapSlice.reducer;
