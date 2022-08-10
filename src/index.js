import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/GameLauncher/App";
import Games from "./components/GameLauncher/Games";
import Profile from "./components/GameLauncher/Profile";
import Game1 from './components/Game1/Game1'
import Game2 from './components/Game2/Game2'

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
        <Route path="Game1" element={<Game1 />} />
        <Route path="Game2" element={<Game2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
