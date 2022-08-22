import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameLauncher from "./GameLauncher/GameLauncher.component";
import Games from "./GameLauncher/Games/Games.component";
import GridShot from "./GridShot/GridShot.component";
import ReactionTimer from "./ReactionTrainer/ReactionTimer.component";
import Profile from "./GameLauncher/Profile/Profile.component.jsx";
import Stats from "./GameLauncher/Stats/Stats.component.jsx";

export default function App() {
  return (
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
          <Route path="stats" element={<Stats />} />
          {/* <Route path="news" element={<News />} /> */}
        </Route>
        {/* 
          Grid Shot Game
            @Desc: This component houses the Grid Shot Game
            Route will be initiated with the Link->to component in the Nav Component
      */}
        <Route path="GridShot" element={<GridShot />} />
        {/* 
          Reaction Trainer Game
            @Desc: This component houses the Reaction Trainer Game.
            Route will be initiated with the Link->to component in the Nav Component
      */}
        <Route path="ReactionTrainer" element={<ReactionTimer />} />
      </Routes>
    </BrowserRouter>
  );
}
