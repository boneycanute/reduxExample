import { useSelector } from "react-redux";

function Comp3() {
  const data = useSelector((state) => {
    return state.slice2Reducer;
  }).data;
  console.log("Data in the store from Comp3: ", data);
  return (
    <div className="Comp3">
      <h1>Component 3 : {data}</h1>
    </div>
  );
}

export default Comp3;
