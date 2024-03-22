import Axios from "axios";
import React, { useState } from "react";

const PostDataAxios = () => {
  const [dataTitle, setDataTitle] = useState("");
  const [dataBody, setDataBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: dataTitle,
      body: dataBody,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="w-50">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Title"
            className="form-control mb-4"
            value={dataTitle}
            onChange={(e) => setDataTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Body"
            className="form-control mb-4"
            value={dataBody}
            onChange={(e) => setDataBody(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostDataAxios;
