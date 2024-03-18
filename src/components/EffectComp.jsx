import React, { useEffect, useState } from "react";

const EffectComp = () => {
  const [count, setCount] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Component Mout...", count);

    return function () {
      console.log("Unmounting...");
    };
  }, [count]);


// --------------------------------------------------------


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  },[]);

  console.log(data);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        INCREMENT
      </button>
    </div>
  );
};

export default EffectComp;
