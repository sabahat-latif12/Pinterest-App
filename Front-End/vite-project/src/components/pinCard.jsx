import React from "react";
import { Link } from "react-router-dom";

const PinCard = ({ pin }) => {
  return (
    <div className="relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-lg w-full sm:w-96 p-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Card with smooth shadow transition */}
      <div className="relative h-56 overflow-hidden text-white rounded-md mb-4">
        {pin.imageUrl ? (
          <img
            src={pin.imageUrl}
            alt={pin.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200">
            <p className="text-gray-500">No Image Available</p>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          {pin.title || "Untitled"}
        </h6>
        <p className="text-slate-600 leading-normal font-light">
          {pin.description || "No description available."}
        </p>
      </div>

      <div className="mt-4">
        <button
          className="w-full rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-red-500 focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default PinCard;
