// This Slice will be used to store one state inside it

import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
  name: "mySlice",
  initialState: { data: "Data in mySlice1" },
  // reducers : Reducer Function ==> Function that can be used by the Reducer
  reducers: {
    myFunction1: (state, action) => {
      console.log("Reducer Function 1 called");
      state.data = "Data Changed in Slice 1";
    },
    myFunction2: (state, action) => {
      console.log("Reducer Function 2");
    },
    myFunction3: (state, action) => {
      console.log("Reducer Function 3");
    },
  },
});

// The Action creators will have the same name as the reducer Functions
export const { myFunction1, myFunction2, myFunction3 } = mySlice.actions;
// create your reducer
export const mySliceReducer = mySlice.reducer;
