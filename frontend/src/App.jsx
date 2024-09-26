import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { UserData } from "./Context/UserContext";
import { Loading } from "./Components/Loading";
import Navbar from "./Components/NavBar";
import PinPage from "./Pages/PinPage";
import Create from "./Pages/Create";
import Account from "./Pages/Account";
import UserProfile from "./Pages/UserProfile";

const App = () => {
  const { loading, isAuth, user } = UserData();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          {isAuth && <Navbar user={user} />}
          <Routes>
            <Route path="/" element={isAuth ? <Home /> : <Login />} />
            <Route
              path="/account"
              element={isAuth ? <Account user={user} /> : <Login />}
            />
            <Route
              path="/user/:id"
              element={isAuth ? <UserProfile user={user} /> : <Login />}
            />
            <Route path="/create" element={isAuth ? <Create /> : <Login />} />
            <Route
              path="/pin/:id"
              element={isAuth ? <PinPage user={user} /> : <Login />}
            />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
