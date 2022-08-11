import "./Games.css";
import { NavLink } from "react-router-dom";
import playBtn from "../../assets/playbtn.png";
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
  {
    id: 2,
    name: "Im not sure yet",
    route: "../Game3",
  },
];
export default function Games() {
  return (
    <div className="games">
      <header>GAMES</header>
      {games.map((game) => {
        return (
          <div className="game-widget" key={game.id}>
            <div className="game-info">
              <div className="game-header">{game.name}</div>
              <NavLink to={game.route} style={{ textDecoration: "none" }}>
                <button>
                  <img alt="play button" src={playBtn} />
                  <span className="play-text">PLAY</span>
                </button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
