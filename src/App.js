import { useState } from "react";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./style.css";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {


  return (
    <div className="App container bg-dark text-light cx-main p-4">

      <Header  />

      <hr />
      <Routes>
        <Route path="/" element={<Home  />} />

        <Route path="about" element={<AboutUs  />} />

        <Route path="contact" element={<ContactUs  />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
