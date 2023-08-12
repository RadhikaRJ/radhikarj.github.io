import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
