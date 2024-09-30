import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa"; // You can import additional icons as needed

const Navbar = ({ user }) => {
  return (
    <div>
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Left Section with Logo and Create Button */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center mr-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
                alt="Pinterest Logo"
                className="h-6 md:mr-2"
              />
              <span className="text-red-600 text-xl font-bold">Pinterest</span>
            </Link>

            <Link
              to="/create"
              className="flex items-center text-gray-700 hover:text-gray-900 ml-6"
            >
              <FaPlus className="mr-2" />
              <span>Create</span>
            </Link>
          </div>

          {/* Right Section with User Profile */}
          <div className="flex items-center">
            {user ? (
              <Link to="/account" className="flex items-center space-x-2">
                {/* Circle with Initial from Email */}
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-xl text-white">
                  {user.email.slice(0, 1)}{" "}
                  {/* Display the first letter of the email */}
                </div>
                <span className="text-gray-700">{user.email}</span>
              </Link>
            ) : (
              <Link to="/profile" className="flex items-center space-x-2">
                {/* Circle with letter P */}
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <span
                  to={`/account/${user.userId}`}
                  className="text-gray-700 font-medium"
                >
                  Profile
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
