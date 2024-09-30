import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import Navbarhome from "../components/NavBarhome";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold error messages
  const { loginUser, btnLoading } = UserData();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state before submitting
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    try {
      await loginUser(email, password, navigate);
    } catch (err) {
      setError("Login failed. Please check your credentials."); // Handle login errors
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1)), url('https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
      }}
    >
      <div>
        <Navbarhome user={null} />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-center mb-4">
              <img
                src="https://pngimg.com/uploads/pinterest/pinterest_PNG66.png"
                alt="Pintrest"
                className="h-12"
              />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Login To see More
            </h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}{" "}
            {/* Display error message */}
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="common-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required // HTML5 validation
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="common-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required // HTML5 validation
                />
              </div>
              <button
                type="submit"
                className="common-btn"
                disabled={btnLoading}
              >
                {btnLoading ? "Loading..." : "Login"}{" "}
                {/* Conditional loading state */}
              </button>
            </form>
            <div className="mt-6 text-center">
              <div className="relative md-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 to-gray-50">OR</span>
                </div>
              </div>
              <div className="md-4 text-center text-sm">
                <span>
                  Not on Pintrest yet?
                  <Link
                    to="/register"
                    className="font-medium text-pintrest hover:underline"
                  >
                    Register
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
