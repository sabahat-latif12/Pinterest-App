import React from "react";
import { Link } from "react-router-dom";

const Navbarhome = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
          alt="Pinterest Logo"
          className="h-6"
        />
        <h1 className="text-red-600 font-bold text-xl">Pinterest</h1>
      </div>
      <div className="flex space-x-8">
        <Link to="/watch" className="hover:text-gray-600">
          Watch
        </Link>
        <Link to="/explore" className="hover:text-gray-600">
          Explore
        </Link>
        <Link to="/about" className="hover:text-gray-600">
          About
        </Link>
        <Link to="/business" className="hover:text-gray-600">
          Business
        </Link>
        <Link to="/press" className="hover:text-gray-600">
          Press
        </Link>
      </div>
      <div className="flex space-x-4">
        <button className="text-red-600 font-semibold hover:text-red-700">
          Log in
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbarhome;
