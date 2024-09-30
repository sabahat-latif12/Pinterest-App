import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Navbar = ({ user }) => {
  return (
    <div>
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
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

          <div className="flex items-center space-x-4">
            {user ? (
              <Link to="/account" className="flex items-center">
                {user.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border border-gray-300"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xl text-gray-700">
                    {user.name.slice(0, 1)}
                  </div>
                )}
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
