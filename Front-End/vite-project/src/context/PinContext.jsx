import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const PinContext = createContext();

export const PinProvider = ({ children }) => {
  const [pins, setPins] = useState([]);
  // const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pin, setPin] = useState(null);
  const [error, setError] = useState(null);

  // Fetch all pins
  async function fetchPins() {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/pinRoutes/getAll"
      );
      console.log("Fetched pins:", data); // Log the data to inspect it
      setPins(data); // Ensure this is an array
    } catch (error) {
      console.error(error?.response?.data || error.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  }

  // Fetch a single pin by ID
  const fetchPin = async (id) => {
    try {
      setLoading(true);
      setError(null); // Reset error state

      // Correct the endpoint to your server's API path
      const response = await axios.get(`http://localhost:5000/pinRoutes/${id}`);
      setPin(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Update pin information
  async function updatePin(id, title, description, setEdit) {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/pinRoutes/update/${id}`,
        { title, description }
      );
      toast.success(data.message);
      fetchPin(id); // Re-fetch the updated pin
      setEdit(false);
    } catch (error) {
      toast.error(error?.response?.data.message || "Error updating pin");
    }
  }

  // Delete a pin by ID
  const deletePin = async (id, navigate) => {
    try {
      setLoading(true);
      const { data } = await axios.delete(
        `http://localhost:5000/pinRoutes/delete/${id}`
      );
      toast.success(data.message);

      // Remove the deleted pin from state
      setPins((prevPins) => prevPins.filter((pin) => pin._id !== id));

      // Optionally, navigate to another route after deletion
      if (navigate) navigate("/home");
    } catch (error) {
      toast.error(error?.response?.data.message || "Error deleting pin");
    } finally {
      setLoading(false);
    }
  };

  // Add a new pin
  async function addPin(
    formData,
    setFilePrev,
    setFile,
    setTitle,
    setId,
    setDescription,
    navigate
  ) {
    try {
      console.log("formdata", formData);
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        "http://localhost:5000/pinRoutes/post",
        formData
      );
      console.log(data);
      toast.success(data.message);

      setFile([]);
      setFilePrev("");
      setDescription("");
      setId("");
      setTitle("");
      fetchPins();
      navigate("/home");
    } catch (error) {
      toast.error(error?.response?.data.message || "Error adding pin");
    }
  }

  // Fetch pins on component mount
  useEffect(() => {
    fetchPins();
  }, []);

  return (
    <PinContext.Provider
      value={{
        pins,
        loading,
        fetchPin,
        pin,
        updatePin,
        deletePin, // Include deletePin function in context value
        addPin,
        fetchPins,
      }}
    >
      {children}
    </PinContext.Provider>
  );
};

export const PinData = () => useContext(PinContext);
