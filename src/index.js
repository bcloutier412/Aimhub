import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import GameLauncher from "./GameLauncher/App.component";
import Games from "./GameLauncher/Games/Games.component";
import GridShot from './GridShot/GridShot.component';
import ReactionTimer from './ReactionTrainer/ReactionTimer.component';
import Profile from './GameLauncher/Profile/Profile.component.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 
          GAME LAUNCHER
            @Desc: This component will act as the hub for all the features in this app
            @Route: The children routes act as the different sections of the hub that can be viewed.
            The route can be changed through the navbar
      */}
        <Route path="/" element={<GameLauncher />}>
          <Route index element={<Games />} />
          <Route path="profile" element={<Profile />} />
          <Route path="games" element={<Games />} />
        </Route>
        {/* 
          Grid Shot Game
            @Desc: This component houses the Grid Shot Game
      */}
        <Route path="GridShot" element={<GridShot />} />
        {/* 
          Reaction Trainer Game
            @Desc: This component houses the Reaction Trainer Game
      */}
        <Route path="ReactionTrainer" element={<ReactionTimer />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
