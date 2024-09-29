import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Check if this path is correct
import Register from "./pages/Register"; // Check if this path is correct
import Login from "./pages/Login"; // Check if this path is correct
import Account from "./pages/Account";
import Create from "./pages/Create";
import PinPage from "./pages/PinPage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<Create />} />
      <Route path="/pinpage" element={<PinPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
