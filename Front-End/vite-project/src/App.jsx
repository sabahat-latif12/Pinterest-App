import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Check if this path is correct
import Register from "./pages/Register"; // Check if this path is correct
import Login from "./pages/Login"; // Check if this path is correct
import Account from "./pages/Account";
import Create from "./pages/Create";
import PinPage from "./pages/PinPage";
import HeroSection from "./pages/Hero";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<HeroSection />} />
      <Route path="/account" element={<Account />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<Create />} />
      <Route path="/pinpage" element={<PinPage />} />
      <Route path="/login" element={<Login />} />

      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
