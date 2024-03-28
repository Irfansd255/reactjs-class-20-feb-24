import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewData = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const baseUrl = "https://6603fb2b2393662c31d04b5f.mockapi.io/crud";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await Axios.get(baseUrl);
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <div>
      <h1 className="text-center text-danger">USER DETAILS</h1>
      <div className="text-end">
        <button
          className="btn btn-success"
          onClick={() => navigate("/addData")}
        >
          Add Data
        </button>
      </div>
      <hr />
      <div className="row">
        {data.map((items) => {
          return (
            <div className="col-md-6">
              <div className="card-style mb-4">
                <h3>User Id : {items.id}</h3>
                <hr />
                <h3>Name: {items.name} </h3>
                <h3>Mobile: {items.mobile} </h3>
                <h3>Email: {items.email} </h3>
                <h3>Address: {items.address} </h3>'
                <hr />
                <button className="btn btn-info">Update</button>
                <button className="btn btn-danger ms-3">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewData;
