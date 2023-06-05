import "./App.css";
import Home from "./Layout/Home";
import GreenScreen from "./Components/GreenScreen/GreenScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greenscreen" element={<GreenScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
