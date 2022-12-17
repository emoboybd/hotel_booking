import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import Hotels from "./pages/Hotels/Hotels";
import Motel from "./pages/motel/Motel";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="hotel" element={<Hotel />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="motel" element={<Motel />} />
      </Routes>
    </div>
  );
}

export default App;
