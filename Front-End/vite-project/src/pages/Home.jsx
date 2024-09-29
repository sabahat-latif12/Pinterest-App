import React, { useContext, useEffect, useState } from "react";
import { PinData } from "../context/pinContext"; // Assuming this context provides `pins`
import { Loading } from "../components/Loading"; // Assuming this is your loading component
import PinCard from "../components/pinCard"; // Assuming PinCard is your card component

const Home = () => {
  const { pins = [], loading } = PinData(); // Default to empty array to avoid issues
  const [isLoading, setIsLoading] = useState(true); // Local loading state

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    } else {
      setIsLoading(false); // Set loading to false once pins are available
    }
  }, [loading]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-wrap m-4">
              {pins.length > 0 ? (
                pins.map((e, i) => <PinCard key={i} pin={e} />)
              ) : (
                <p>No Pins Yet</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
