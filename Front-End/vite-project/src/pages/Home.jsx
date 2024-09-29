import React from "react";
import PinCard from "../components/pinCard";
import { PinData } from "../context/pinContext";

const Home = () => {
  const { pins } = PinData();

  // Check if pins is an array
  if (!Array.isArray(pins)) {
    console.error("Expected pins to be an array, but got:", pins);
    return <p>Loading pins...</p>; // Fallback message
  }

  return (
    <div>
      <h1>Home</h1>
      <div className="pin-container">
        {pins.length > 0 ? (
          pins.map((pin) => <PinCard key={pin._id} pin={pin} />)
        ) : (
          <p>No pins available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
