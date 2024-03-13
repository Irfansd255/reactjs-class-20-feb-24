import React, { useState } from "react";

const FormWorks4 = () => {
  const [isCheck, setIsCheck] = useState({
    hindi: false,
    marathi: false,
    english: false,
  });

  const handleCheck = (e) => {
    // console.log(!isCheck);
    const { name, checked } = e.target;

    setIsCheck({
      ...isCheck,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isCheck);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          name="hindi"
          id="hindi"
          onChange={handleCheck}
          checked={isCheck.hindi}
        />
        <label htmlFor="hindi" className="ms-2">
          Hindi
        </label>
        <br />

        <input
          type="checkbox"
          name="marathi"
          id="marathi"
          onChange={handleCheck}
          checked={isCheck.marathi}
        />
        <label htmlFor="marathi" className="ms-2">
          Marathi
        </label>
        <br />

        <input
          type="checkbox"
          name="english"
          id="english"
          onChange={handleCheck}
          checked={isCheck.english}
        />
        <label htmlFor="english" className="ms-2">
          English
        </label>
        <br />

        <br />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWorks4;
