import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Check if this path is correct
import Register from "./pages/Register"; // Check if this path is correct
import Login from "./pages/Login"; // Check if this path is correct
import Account from "./pages/Account";
import Create from "./pages/Create";
import PinPage from "./pages/PinPage";
import HeroSection from "./pages/Hero";
import UserProfile from "./pages/UserProfile";
import { UserData } from "./context/UserContext";
import { Loading } from "./components/Loading";

function App() {
  const { loading, isAuth, user } = UserData();
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<HeroSection />} />
      <Route path="/account" element={<Account user={user} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<Create />} />
      <Route path="/pin/:id" element={<PinPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<UserProfile user={user} />} />
    </Routes>
    // <>
    //   {Loading ? (
    //     <Loading />
    //   ) : (
    //     <BrowserRouter>
    //       {isAuth && <Navbar user={user} />}
    //       <Routes>
    //         <Route path="/" element={<HeroSection />} />
    //         <Route path="/home" element={isAuth ? <Home /> : <Login />} />
    //         <Route
    //           path="/account"
    //           element={isAuth ? <Account user={user} /> : <Login />}
    //         />
    //         <Route
    //           path="/profile"
    //           element={isAuth ? <UserProfile user={user} /> : <Login />}
    //         />
    //         <Route path="/create" element={isAuth ? <Create /> : <Login />} />
    //         <Route
    //           path="/pinpage"
    //           element={isAuth ? <PinPage user={user} /> : <Login />}
    //         />
    //         <Route path="/login" element={isAuth ? <Login /> : <Login />} />
    //         <Route
    //           path="/register"
    //           element={isAuth ? <Home /> : <Register />}
    //         />
    //       </Routes>
    //     </BrowserRouter>
    //   )}
    // </>
  );
}

export default App;
