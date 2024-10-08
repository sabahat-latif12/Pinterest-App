import React from "react";
import PinCard from "../components/pinCard";
import { Loading } from "../components/Loading"; // Import Loading component
import Navbar from "../components/Navbar";
import { PinData } from "../context/pinContext";

const Home = ({ user }) => {
  const { pins, loading } = PinData() || {}; // Use optional chaining to prevent destructuring from undefined
  console.log("user", user);
  // Render loading state with the Loading component
  if (loading) {
    return (
      <>
        <Navbar user={user} />
        <Loading />
      </>
    );
  }

  // Handle cases where PinData might not return an expected structure
  if (!Array.isArray(pins)) {
    console.error("Expected pins to be an array, but got:", pins);
    return (
      <>
        <Navbar user={user} />
        <p className="text-center text-red-500">
          Error loading pins. Please try again later.
        </p>
      </>
    );
  }

  // Check if the pins array is empty
  if (pins.length === 0) {
    return (
      <>
        <Navbar user={user} />
        <p className="text-center text-gray-600">No pins available</p>
      </>
    );
  }

  return (
    <div>
      <Navbar user={user} /> {/* Render Navbar at the top */}
      <h1 className="text-center text-2xl font-bold mt-6">Home</h1>
      {/* Pin container with responsive grid layout */}
      <div className="pin-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {pins.map((pin) => (
          <div
            key={pin.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <PinCard pin={pin} /> {/* Individual pin card */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
