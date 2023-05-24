import { configureStore } from "@reduxjs/toolkit";
import { mySliceReducer } from "./mySlice";
import { mySliceReducer2 } from "./mySlice2";

export const store = configureStore({
  // reducer : denotes the reducer for a slice
  reducer: {
    // List all reducers that can change my store
    slice1Reducer: mySliceReducer,
    slice2Reducer: mySliceReducer2,
  },
});
