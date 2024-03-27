import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import AddData from "./pages/AddData";
import ViewData from "./pages/ViewData";

import { Routes, Route } from "react-router-dom";
import UpdateData from "./pages/UpdateData";

function App() {
  return (
    <>
      <div className="container">
        {/* <AddData/> */}

        <Routes>
          <Route path="/" element={<ViewData />} />
          <Route path="addData" element={<AddData />} />
          <Route path="updateData" element={<UpdateData />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
