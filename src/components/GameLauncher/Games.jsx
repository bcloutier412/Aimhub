import "./Games.css";
import { NavLink } from "react-router-dom";
const games = [
  {
    id: 0,
    name: "Grid Shot",
    route: "../Game1",
  },
  {
    id: 1,
    name: "Reaction Trainer",
    route: "../Game2",
  },
];
// <NavLink to={game.route} style={{ textDecoration: "none" }}>
//                 <div className="play-button">PLAY</div>
//               </NavLink>
export default function Games() {
  return (
    <div>
      <header>GAMES</header>
      {games.map((game) => {
        return (
          <div className="game-widget" key={game.id}>
            
          </div>
        );
      })}
    </div>
  );
}
