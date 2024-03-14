import React from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  console.log(navigate);

  

  return (
    <div className="w-50">
      <input type="text" className="form-control mb-4" placeholder="Username" />
      <input
        type="password"
        className="form-control mb-4"
        placeholder="passwprd"
      />
      <h1 onClick={()=>navigate('/contact')}>Go to Contact</h1>
      <button className="btn btn-success" >
        Login
      </button>
    </div>
  );
};

export default Login;
