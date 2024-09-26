import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./Context/UserContext.jsx";
import { PinProvider } from "./Context/PinContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <PinProvider>
        <App />
      </PinProvider>
    </UserProvider>
  </React.StrictMode>
);
