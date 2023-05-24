import React from "react";
import Comp1 from "./components/Comp1";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.slice1Reducer).data;
  console.log("Data in the store from App: ", data);
  return (
    <div className="App">
      <h1>App Component : {data}</h1>
      <Comp1 />
    </div>
  );
}

export default App;
