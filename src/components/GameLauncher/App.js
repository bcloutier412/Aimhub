import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="MainContainer">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
