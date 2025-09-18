import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Get the root element
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found. Make sure index.html has <div id='root'></div>");
}

// Create React root and render App
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
