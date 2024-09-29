import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Changed initial state from [] to null
  const [isAuth, setIsAuth] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  // Login User
  async function loginUser(email, password, navigate) {
    setBtnLoading(true); // Fixed this to true since it starts the loading process
    try {
      const { data } = await axios.post("/usersRouter/login", {
        email,
        password,
      });
      toast.success(data.message);
      setUser(data.user);
      setIsAuth(true);
      setBtnLoading(false);
      navigate("/"); // Redirect to home on successful login
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      setBtnLoading(false);
    }
  }

  // Register User
  async function registerUser(name, email, password, navigate) {
    setBtnLoading(true); // Start loading indicator
    try {
      const { data } = await axios.post(
        "http://localhost:5432/usersRouter/register",
        { name, email, password }
      );
      toast.success(data.message);
      setUser(data.user); // Set the registered user data
      setIsAuth(true); // Set authentication state to true
      setBtnLoading(false);
      navigate("/"); // Redirect to home or login page after registration
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
      setBtnLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser, // Expose registerUser in context
        btnLoading,
        isAuth,
        user,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
