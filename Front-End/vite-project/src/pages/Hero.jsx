import React, { useState, useEffect } from "react";
import Navbarhome from "../components/NavBarhome";

const HeroSection = () => {
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    // Trigger grid animation after a small delay for better UX
    setTimeout(() => {
      setShowGrid(true);
    }, 300); // Delay of 300ms
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1)), url('https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
      }}
    >
      {/* Navbar */}
      <Navbarhome />

      {/* Flex Container for Full Page Layout */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {/* Content Section with Margin from Top */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            {/* Hero Text Content */}
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Get your next</span>{" "}
                  <span className="block text-red-600 xl:inline">
                    new outfit
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover styles, trends, and outfit inspirations personalized
                  just for you.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/login" // Link to login page
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-400 md:py-4 md:text-lg md:px-10"
                    >
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </main>

            {/* Simple Grid Layout Below with Margin from Top */}
            <div
              className={`mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-1000 ease-out transform ${
                showGrid
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Images with varied sizes */}
              <img
                className="rounded-lg object-cover h-48 transition-all duration-300 ease-in-out transform hover:scale-105"
                src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Outfit 1"
              />
              <img
                className="rounded-lg object-cover h-48 transition-all duration-300 ease-in-out transform hover:scale-105"
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Outfit 2"
              />
              <img
                className="rounded-lg object-cover h-48 transition-all duration-300 ease-in-out transform hover:scale-105"
                src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Outfit 3"
              />
              <img
                className="rounded-lg object-cover h-48 transition-all duration-300 ease-in-out transform hover:scale-105"
                src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Outfit 4"
              />
              <img
                className="rounded-lg object-cover h-48 transition-all duration-300 ease-in-out transform hover:scale-105"
                src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Outfit 5"
              />
              <img
                className="rounded-lg object-cover h-48 transition-all duration-300 ease-in-out transform hover:scale-105"
                src="https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Outfit 6"
              />
              <img
                className="rounded-lg object-cover h-48 transition-all duration-300 ease-in-out transform hover:scale-105"
                src="https://images.pexels.com/photos/2178723/pexels-photo-2178723.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Outfit 7"
              />
              <img
                className="rounded-lg object-cover h-48 transition-all duration-300 ease-in-out transform hover:scale-105"
                src="https://images.pexels.com/photos/1601070/pexels-photo-1601070.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Outfit 8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
