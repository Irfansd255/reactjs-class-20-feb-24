import React from "react";
import { useNavigate } from "react-router-dom";

const ViewData = () => {
    const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center text-danger">USER DETAILS</h1>
      <div className="text-end">
        <button className="btn btn-success" onClick={()=>navigate('/addData')} >Add Data</button>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="card-style">
            <h3>User Id :</h3>
            <hr />
            <h3>Name: </h3>
            <h3>Mobile: </h3>
            <h3>Email: </h3>
            <h3>Address: </h3>'
            <hr />
            <button className="btn btn-info">Update</button>
            <button className="btn btn-danger ms-3">Delete</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-style mb-4">
            <h3>User Id :</h3>
            <hr />
            <h3>Name: </h3>
            <h3>Mobile: </h3>
            <h3>Email: </h3>
            <h3>Address: </h3>'
            <hr />
            <button className="btn btn-info" onClick={()=>navigate('/updateData')}>Update</button>
            <button className="btn btn-danger ms-3">Delete</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-style">
            <h3>User Id :</h3>
            <hr />
            <h3>Name: </h3>
            <h3>Mobile: </h3>
            <h3>Email: </h3>
            <h3>Address: </h3>'
            <hr />
            <button className="btn btn-info">Update</button>
            <button className="btn btn-danger ms-3">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewData;
