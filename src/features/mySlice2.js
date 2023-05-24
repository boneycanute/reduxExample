// This Slice will be used to store one state inside it

import { createSlice } from "@reduxjs/toolkit";

const mySlice2 = createSlice({
  name: "mySlice2",
  initialState: { data: "Data in mySlice2" },
  // reducers : Reducer Function ==> Function that can be used by the Reducer
  reducers: {
    myFunction1: (state, action) => {
      console.log("Reducer Function #1");
    },
    myFunction2: (state, action) => {
      console.log("Reducer Function #2");
    },
    myFunction3: (state, action) => {
      console.log("Reducer Function #3");
    },
  },
});

export const { myFunction1, myFunction2, myFunction3 } = mySlice2.actions;
// create your reducer
export const mySliceReducer2 = mySlice2.reducer;
