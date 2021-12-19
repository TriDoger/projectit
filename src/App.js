import Authorization from "./Authorization";
import SideBar from "./SideBar";
import Equipment from "./Equipment";
import { BrowserRouter as Router } from "react-router-dom";
import HeadBar from "./HeadBar";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
    <Router>
        <div class="container-fluid">
          <div class="row">       
      {<HeadBar />}
              {<SideBar/>}
              {<Equipment/>}
          </div>
        </div>
    </Router>
  );
}

export default App;
