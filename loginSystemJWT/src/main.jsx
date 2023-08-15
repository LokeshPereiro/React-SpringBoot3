import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Dasboard } from "./Dasboard";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Dasboard />
    </BrowserRouter>
  </React.StrictMode>
);
