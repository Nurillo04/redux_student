import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state = initialState) => {
      state.numOfCakes--;
    },
  },
});

export const cakeReducer = cakeSlice.reducer;
