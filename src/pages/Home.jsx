import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Home = () => {
  console.log(useContext(AppContext));

  const { myName, addItems, setAddItems } = useContext(AppContext);

  return (
    <div>
      <h1>This is Home page</h1>
      <button
        className="btn btn-success"
        onClick={() => setAddItems(addItems + 1)}
      >
        Add to Cart
      </button>
      <h1>My Name is : {myName} </h1>
    </div>
  );
};

export default Home;
