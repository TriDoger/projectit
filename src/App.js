import SideBar from "./SideBar";
import Equipment from "./Equipment";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import HeadBar from "./HeadBar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <div class="container-fluid">
        <div class="row">
          {<HeadBar />}
          {<SideBar />}
          <Routes>
            <Route path="/" element={<Equipment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
