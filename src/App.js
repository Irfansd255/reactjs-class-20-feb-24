import Dashboard from "./pages/Dashboard";
import FormValidation from "./pages/FormValidation";
import PostDataAxios from "./pages/PostDataAxios";
import WorkingApiAxios from "./pages/WorkingApiAxios";
import "./style.css";

function App() {
  return (
    <div className="App container bg-dark text-light cx-main p-4">
      {/* <Dashboard /> */}
      {/* <PostDataAxios/> */}

      <FormValidation/>
      
      <hr />
      {/* <WorkingApiAxios/> */}
    </div>
  );
}

export default App;
