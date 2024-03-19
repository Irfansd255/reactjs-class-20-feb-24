import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const AboutUs = () => {
  const { myName, addItems, setAddItems } = useContext(AppContext);
  return (
    <div>
      <h1>This is About Us page</h1>
      <button
        className="btn btn-danger"
        onClick={() => setAddItems(addItems + 1)}
      >
        Add to Cart
      </button>
      <h1>My Name is : {myName}</h1>
    </div>
  );
};

export default AboutUs;
