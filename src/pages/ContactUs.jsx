import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ContactUs = () => {
  const { myName, addItems, setAddItems } = useContext(AppContext);

  return (
    <div>
      <h1>This is contact us Page</h1>
      <button
        className="btn btn-primary"
        onClick={() => setAddItems(addItems + 1)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ContactUs;
