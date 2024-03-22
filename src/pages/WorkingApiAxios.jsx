import Axios from "axios";
import React, { useEffect, useState } from "react";

const WorkingApiAxios = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(baseURL)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {data.map((items) => {
        return (
          <div key={items.id}>
            <h3>User ID : {items.id} </h3>
            <h3>Title : {items.title} </h3>
            <h3>Body : {items.body} </h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default WorkingApiAxios;
