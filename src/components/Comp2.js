import React from "react";
import Comp3 from "./Comp3";
import { useDispatch, useSelector } from "react-redux";
import { myFunction1 } from "../features/mySlice";

function Comp2() {
  const dispatch = useDispatch();
  console.log(
    "Data in the store from Comp2: ",
    useSelector((state) => state.slice1Reducer)
  );

  function changeState() {
    dispatch(myFunction1());
  }

  return (
    <div className="Comp2">
      <h1>Component 2</h1>
      <button
        onClick={() => {
          changeState();
        }}
      >
        Change State of Slice 1
      </button>
      <Comp3 />
    </div>
  );
}

export default Comp2;
