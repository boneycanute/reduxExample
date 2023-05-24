import React from "react";
import Comp2 from "./Comp2";
import { useSelector } from "react-redux";

function Comp1() {
  console.log(
    "Data in the store from Comp1: ",
    useSelector((state) => state.slice1Reducer)
  );
  return (
    <div className="Comp1">
      <h1>Component 1</h1>
      <Comp2 />
    </div>
  );
}

export default Comp1;
