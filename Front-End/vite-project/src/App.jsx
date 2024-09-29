import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Check if this path is correct
import Register from "./pages/Register"; // Check if this path is correct
import Login from "./pages/Login"; // Check if this path is correct

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
