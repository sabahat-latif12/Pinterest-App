import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";
import { PinProvider } from "./context/pinContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UserProvider>
    <PinProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PinProvider>
  </UserProvider>
  // </StrictMode>
);
