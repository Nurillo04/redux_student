import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "../features/CakeSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

export default store;
