import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Games from "./components/Games";
import Profile from "./components/Profile";
import Game1 from './components/Game1/Game1'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Games />} />
          <Route path="profile" element={<Profile />} />
          <Route path="games" element={<Games />} />
        </Route>
        <Route path="Game-1" element={<Game1 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
