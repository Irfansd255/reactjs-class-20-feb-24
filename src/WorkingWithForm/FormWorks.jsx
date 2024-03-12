import React, { useState } from "react";

const FormWorks = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");


  let data = "sayyed"

  const handleInput = (event) => {
    // console.log(event.target.value);

    setUser(event.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //   console.log("New Value", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Name", user);
    console.log("User mail", email);
  };

  return (
    <div>
      <h1 className="mb-4">{user}</h1>
      <h1 className="mb-4">{email}</h1>

      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter Username"
          value={user}
          onChange={handleInput}
        />

        <input
          type="email"
          required
          className="form-control w-50 mt-4"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmail}
        />

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWorks;
