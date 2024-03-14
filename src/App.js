import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container bg-dark text-light cx-main p-4">
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
