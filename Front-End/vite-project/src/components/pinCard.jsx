import React from "react";
import { Link } from "react-router-dom";

const PinCard = ({ pin }) => {
  return (
    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      {/* Pin Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={pin.imageUrl}
          alt={pin.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {/* Overlay with Title, Description, and View Button on Hover */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
          <h3 className="text-lg font-bold text-white mb-2 truncate">
            {pin.title || "Untitled Pin"}
          </h3>
          <p className="text-sm text-gray-200 line-clamp-2 mb-4">
            {pin.description || "No description available."}
          </p>
          <Link
            to={`/pin/${pin.id}`}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            View Pin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PinCard;
