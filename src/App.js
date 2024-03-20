import { useState } from "react";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./style.css";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  // console.log("Task A");

  // setTimeout(() => {
  //   console.log("Task B");
  // },3000);

  // console.log("Task C");
  // console.log("Task D");

  // let p = new Promise(function (resolve, reject) {
  //   let a = 1 + 3;
  //   if (a === 4) {
  //     resolve("success");
  //   } else {
  //     reject("Rejected");
  //   }
  // });

  // console.log(p);

  // p.then((res) => {
  //   console.log(res, "result fulfilled");
  // }).catch((err) => {
  //   console.log(err, "result rejected");
  // });

  // const result =  fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
  //   console.log("DATA",data)
  // }).catch((err)=>{
  //   console.log(err)
  // })

  // console.log(result)
  
// ===============================  async & await ==================================

  // async function example() {
  //   console.log("Data A");

  //   await console.log("Hello...");

  //   console.log("Data B");
  //   console.log("Data C");
  // }

  // example();
  // console.log("Data D");

  async function example() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
    console.log("hello 2...")
    const posts = await data.json();
    console.log(posts)
  }

  example();



  return (
    <div className="App container bg-dark text-light cx-main p-4">
      <Header />

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about" element={<AboutUs />} />

        <Route path="contact" element={<ContactUs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
