import React, { useState } from "react";
import CompA from "./CompA";
import CompB from "./CompB";

const WorkingState = () => {
  const [state, setState] = useState(false);
  const [color, setColor] = useState(false);

  console.log(state);

  return (
    <>
      {state ? (
        <h1 className={color && "text-color"}>My Address is Arbaz Colony</h1>
      ) : (
        <h1 className={color && "text-color"}>My Name is Sayyed Irfan</h1>
      )}

      {/* {state && <h1>This is JavaScript</h1>} */}

      <button className="btn btn-success mt-4" onClick={() => setState(!state)}>
        {state ? "Name" : "Address"}
      </button>

      <button
        className="btn btn-info mt-4 ms-4"
        onClick={() => setColor(!color)}
      >
        Text Color Changer
      </button>
{
    state ? <CompA/> : <CompB/>
}
      
      
    </>
  );
};

export default WorkingState;
