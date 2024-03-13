import React, { useState } from "react";

const LocalStorage = () => {
  const [data, setData] = useState();

  const myName = "Sayyed Irfan";

  const handleClick = () => {
    localStorage.setItem("name", myName);
    localStorage.setItem('mobile','7387194350')
  };

  const handleRemove = () => {
    localStorage.removeItem("name");
    
    // localStorage.clear()
  };

  const myDetails = localStorage.getItem("name")

  console.log(myDetails)



  return (
    <div>
      <h1>Name:  {myDetails}</h1>
      <button onClick={handleClick} className="btn btn-success ">
        Add Data
      </button>
      <button onClick={handleRemove} className="btn btn-danger ms-3 ">
        Remove Data
      </button>
    </div>
  );
};

export default LocalStorage;
