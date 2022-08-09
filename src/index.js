import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Games from "./components/Games";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Games />} />
          <Route index path="games" element={<Games />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
