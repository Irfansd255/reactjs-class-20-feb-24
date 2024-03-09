import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { useState } from "react";
import WorkingState from "./WorkingState";
import WorkingState2 from "./WorkingState2";
import Dashboard from "./Dashboard";

function App() {
  const person = {
    name: "Irfan",
    age: "27",
    address: "Nanded",
  };

  const init = "Irfan";

  console.log(useState());

  const [state, setState] = useState(0);

  const [data, setData] = useState(person);

  const { name, age, address } = data;

  console.log("initial Value", state);

  const changeName = () => {
    console.log("Demo Function");
    setState(state + 1);
  };

  const inc = () => {
    setState(state + 1);
  };
  const dec = () => {
    setState(state - 1);
  };


  console.log("Update Value", state);

  console.log(data);
  const addData = () => {
    setData({ ...data, education: "MCA" });
  };



  return (
    <div className="">
      {/* <h1>App Comp {state} </h1>
      <button className="btn btn-primary" onClick={inc}>
        Increment
      </button>
      <button className="btn btn-primary" onClick={dec}>
        Decrement
      </button>

      <hr />
      <ul>
        <li>Name:{name}</li>
        <li>Age:{age}</li>
        <li>Address:{address}</li>
      </ul>
      <button className="btn btn-danger" onClick={addData}>
        Add Data
      </button> */}
      {/* <WorkingState2/> */}
      <Dashboard/>
    </div>
  );
}

export default App;
