import Home from "./pages/home";
import Store from "./pages/store";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
