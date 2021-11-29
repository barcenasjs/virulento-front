import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AdminCases } from "./screens";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<AdminCases />} />
      </Routes>
    </div>
  );
}

export default App;
