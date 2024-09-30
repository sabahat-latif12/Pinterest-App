import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

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

          {/* Search Bar in the Middle */}
          <div className="flex-1 mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 pl-3 pr-8 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zm-7.9-6.32a6 6 0 1112 0 6 6 0 01-12 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Section with User Profile */}
          <div className="flex items-center">
            {user ? (
              <Link to="/account" className="flex items-center space-x-2">
                {/* Profile Image */}
                {user.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border border-gray-300"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xl text-white">
                    {user.UsernName.slice(0, 1)}{" "}
                    {/* Display the first letter */}
                  </div>
                )}
                <span className="text-gray-700">{user.name}</span>
              </Link>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-gray-900">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
