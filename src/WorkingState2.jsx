import React, { useState } from "react";

const WorkingState2 = () => {
  const data = ["car", "bike", "truck", "train", "plane", "cycle"];
  const [state, setState] = useState(data);
  console.log(state);

  const newItem = () => {
    const randomItem = Math.random();
    setState([...state, randomItem]);
  };

  const removeItem = (index) => {
    console.log(index);
    const newData = [...state];
    newData.splice(index, 1);

    console.log(newData)
    setState(newData)
  };

  return (
    <div>
      <button className="btn btn-info mb-4" onClick={newItem}>
        Add Element
      </button>

      <ul>
        {state.map((item, index) => {
          console.log(item);
          console.log(index);

          return (
            <div className="d-flex mb-4">
              <li key={index}>{item}</li>
              <button
                className="btn btn-danger ms-4"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkingState2;
