//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Topbar";
import Topbar from "./Components/Topbar";
import ControlCard from "./Components/ControlCard";

function App() {
  const titleArray = ["Logistic", "E-Commerce", "Banking"];
  return (
    <div className="App">
      {titleArray.map((eachTitleArray) => (
        <ControlCard title={eachTitleArray} />
      ))}
      <logo />

      <Topbar subtitle="สวัสดีเราคือ Subtitle" />
      <ControlCard titleArray />
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>

      <button type="button" class="btn btn-link">
        Link
      </button>
    </div>
  );
}

export default App;
