import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const PinContext = createContext();

export const PinProvider = ({ children }) => {
  const [pins, setPins] = useState([]);

  const [loading, setLoading] = useState(true);
  const [pin, setPin] = useState(null);

  // Fetch all pins
  async function fetchPins() {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/pinRoutes/get-User-Pins"
      );
      console.log("Fetched pins:", data); // Log the data to inspect it
      setPins(data); // Ensure this is an array
    } catch (error) {
      console.error(error?.response?.data || error.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  }

  // Fetch a specific pin by ID
  async function fetchPin(id) {
    setLoading(true);
    try {
      const { data } = await axios.get(`/api/pin/${id}`);
      setPin(data);
    } catch (error) {
      console.error(error?.response?.data || error.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  }

  // Update pin information
  async function updatePin(id, title, pin, setEdit) {
    try {
      const { data } = await axios.put(`/api/pin/${id}`, { title, pin });
      toast.success(data.message);
      fetchPin(id); // Re-fetch the updated pin
      setEdit(false);
    } catch (error) {
      toast.error(error?.response?.data.message || "Error updating pin");
    }
  }

  // Add a new pin
  async function addPin(
    formData,
    setFilePrev,
    setFile,
    setTitle,
    setPin,
    navigate
  ) {
    try {
      const localStorage = localStorage.getItem("token");
      const { data } = await axios.post(
        "http://localhost:5000/pinRoutes/post",
        { formData, localStorage }
      );
      toast.success(data.message);
      setFile([]);
      setFilePrev("");
      setPin("");
      setTitle("");
      fetchPins();
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data.message || "Error adding pin");
    }
  }

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
        addPin,
        fetchPins,
      }}
    >
      {children}
    </PinContext.Provider>
  );
};

export const PinData = () => useContext(PinContext);
