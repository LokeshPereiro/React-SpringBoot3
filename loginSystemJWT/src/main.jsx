import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Dasboard } from "./Dasboard";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Dasboard />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
