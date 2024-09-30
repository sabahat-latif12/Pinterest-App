import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbarhome = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
              alt="Pinterest Logo"
              className="h-6"
            />
            <h1 className="text-red-600 font-bold text-xl ml-2">Pinterest</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
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

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="text-red-600 font-semibold hover:text-red-700"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-4 py-4">
              <Link to="/watch" className="block hover:text-gray-600">
                Watch
              </Link>
              <Link to="/explore" className="block hover:text-gray-600">
                Explore
              </Link>
              <Link to="/about" className="block hover:text-gray-600">
                About
              </Link>
              <Link to="/business" className="block hover:text-gray-600">
                Business
              </Link>
              <Link to="/press" className="block hover:text-gray-600">
                Press
              </Link>

              <div className="space-y-2">
                <Link
                  to="/login"
                  className="block bg-white text-white px-4 py-2 rounded-md hover:bg-red-700 text-center"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-center"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbarhome;
