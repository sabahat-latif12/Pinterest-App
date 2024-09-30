import React from "react";
import PinCard from "../components/pinCard";
import { Loading, LoadingAnimation } from "../components/Loading"; // Import Loading component
import Navbar from "../components/Navbar";
import { PinData } from "../context/pinContext";

const Home = ({ user }) => {
  const { pins, loading } = PinData(); // Fetch both pins and loading state

  // Render loading state with the Loading component
  if (loading) {
    return (
      <>
        <Navbar user={user} />
        <Loading /> {/* Show loading spinner while data is being fetched */}
      </>
    );
  }

  if (!Array.isArray(pins)) {
    console.error("Expected pins to be an array, but got:", pins);
    return (
      <>
        <Navbar user={user} />
        <p>Loading pins...</p>
      </>
    );
  }

  return (
    <div>
      <Navbar user={user} /> {/* Render Navbar at the top */}
      <h1 className="text-center text-2xl font-bold mt-6">Home</h1>
      <div className="pin-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {pins.length > 0 ? (
          pins.map((pin) => (
            <div className="m-2 p-2" key={pin.id}>
              {" "}
              {/* Add margin and padding here */}
              <PinCard pin={pin} />
            </div>
          ))
        ) : (
          <p>No pins available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
