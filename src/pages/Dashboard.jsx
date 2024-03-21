import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  //   const getData = () => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((jason) => setData(jason));
  //   };

  const getData = async () => {

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/postsg");

      console.log(res)

      if(!res.ok){
        throw new Error("nework issue")
      }
      const posts = await res.json();

      setData(posts);
    } 
    
    catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  return (
    <div>
      <div className="row">
        {data.map((items) => {
          return (
            <div className="col-md-4">
              <div className="bg-light p-3 text-dark mb-3">
                <h4>User ID : {items.id}</h4>
                <hr />
                <h4>Title: </h4>
                <p>{items.title}</p>
                <h4>Body:</h4>
                <p>{items.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
