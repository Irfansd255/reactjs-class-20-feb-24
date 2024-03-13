import React, { useRef } from "react";

const WorkuseRef = () => {
  const handleRef = useRef();
  const inputRef = useRef();

  const handleClick = () => {
    const data = (handleRef.current.innerHTML = "Hello...");
    const inRef = inputRef.current.focus();
    console.log(inRef);
  };

  return (
    <div>
      <h1 ref={handleRef}>Welcome...</h1>

      <input type="text" ref={inputRef} />

      <button className="btn btn-primary mt-4" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default WorkuseRef;
