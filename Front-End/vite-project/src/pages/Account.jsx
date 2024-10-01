import React, { useEffect } from "react";
import PinCard from "../components/pinCard";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { UserData } from "../context/UserContext";
import { PinData } from "../context/pinContext";

const Account = ({ user }) => {
  const params = useParams();
  console.log("prams", params);
  const navigate = useNavigate();
  const { setIsAuth, setUser } = UserData();
  console.log("checking user", user);
  const logoutHandler = async () => {
    try {
      const { data } = await axios.get("/localhost:5000/usersRouter/logout");
      toast.success(data.message);
      navigate("/login");
      setIsAuth(false);
      setUser([]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { pins = [] } = PinData();

  let userPins = [];

  if (pins && Array.isArray(pins)) {
    userPins = pins.filter((pin) => pin.owner === user?.userId);
  }

  // Check if user data is available
  if (!user) {
    return <p>Loading user data...</p>; // Fallback while waiting for user data
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="p-6 w-full">
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-3xl text-gray-700">
                {user?.name ? user.name.slice(0, 1) : "U"}
              </span>
            </div>
          </div>

          <h1 className="text-center text-2xl font-bold mt-4">
            {user?.name || "Loading..."}
          </h1>
          <p className="text-center text-gray-600 mt-2">
            {user?.email || "Loading..."}
          </p>
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={logoutHandler}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {userPins.length > 0 ? (
              userPins.map((e) => <PinCard key={e.id} pin={e} />)
            ) : (
              <p>No Pins Yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
