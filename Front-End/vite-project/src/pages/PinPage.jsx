import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PinData } from "../context/pinContext";
import { Loading } from "../components/Loading";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const PinPage = ({ user }) => {
  const params = useParams();
  const { loading, fetchPin, pin, updatePin, deletePin } = PinData(); // Removed comment-related functions

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [pinValue, setPinValue] = useState("");

  const editHandler = () => {
    setTitle(pin.title);
    setPinValue(pin.pin);
    setEdit(!edit);
  };

  const updateHandler = () => {
    updatePin(pin.id, title, pinValue, setEdit);
  };

  const navigate = useNavigate();

  const deletePinHandler = () => {
    if (confirm("Are you sure you want to delete this pin"))
      deletePin(pin.id, navigate);
  };

  useEffect(() => {
    fetchPin(params.id);
  }, [params.id]);

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 min-h-screen">
      {loading ? (
        <Loading />
      ) : (
        pin && (
          <div className="bg-white rounded-lg shadow-lg flex flex-wrap w-full max-w-4xl">
            {/* Pin Image Section */}
            <div className="w-full md:w-1/2 bg-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-t-none flex items-center justify-center">
              {pin.image && (
                <img
                  src={pin.image.url}
                  alt="Pin"
                  className="object-cover w-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              )}
            </div>

            {/* Pin Details Section */}
            <div className="w-full md:w-1/2 p-6 flex flex-col">
              {/* Title and Edit/Delete Buttons */}
              <div className="flex items-center justify-between mb-4">
                {edit ? (
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="common-input"
                    placeholder="Enter Title"
                  />
                ) : (
                  <h1 className="text-2xl font-bold">{pin.title}</h1>
                )}

                {/* Edit/Delete Buttons for Pin Owner */}
                {pin.owner && pin.owner.id === user.id && (
                  <div className="flex space-x-2">
                    <button onClick={editHandler}>
                      <FaEdit />
                    </button>
                    <button
                      onClick={deletePinHandler}
                      className="bg-red-500 text-white py-1 px-3 rounded"
                    >
                      <MdDelete />
                    </button>
                  </div>
                )}
              </div>

              {/* Pin Content */}
              {edit ? (
                <input
                  value={pinValue}
                  onChange={(e) => setPinValue(e.target.value)}
                  className="common-input"
                  placeholder="Enter Pin Value"
                />
              ) : (
                <p className="mb-6">{pin.pin}</p>
              )}

              {edit && (
                <button
                  className="bg-red-500 text-white py-1 px-3 mt-2 mb-2"
                  onClick={updateHandler}
                >
                  Update
                </button>
              )}

              {/* Pin Owner Section */}
              {pin.owner && (
                <div className="flex items-center justify-between border-b pb-4 mb-4">
                  <Link
                    to={`/user/${pin.owner.id}`}
                    className="flex items-center"
                  >
                    <div className="rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center">
                      <span className="font-bold text-lg">
                        {pin.owner.name.slice(0, 1)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold">
                        {pin.owner.name}
                      </h2>
                      <p className="text-gray-500">
                        {pin.owner.followers.length} Followers
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PinPage;
