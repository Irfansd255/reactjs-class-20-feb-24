import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./style.css";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const currRoute = location.pathname;

  console.log(currRoute);

  return (
    <div className="App container bg-dark text-light cx-main p-4">


      {/* {currRoute === "/about" && <h3>Current Route is About Us</h3>} */}


     

      {currRoute === "/" ? <> </> : <Header /> }

     

      

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="home" element={<Home />} />

        <Route path="about" element={<AboutUs />} />

        <Route path="contact" element={<ContactUs />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
