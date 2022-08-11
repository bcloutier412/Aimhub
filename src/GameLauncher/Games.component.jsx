import styles from "./Games.module.css";
import { NavLink } from "react-router-dom";
import playBtn from "./assets/playbtn.png";
const games = [
  {
    id: 0,
    name: "Grid Shot",
    route: "../GridShot",
  },
  {
    id: 1,
    name: "Reaction Trainer",
    route: "../ReactionTrainer",
  },
];

export default function Games() {
  return (
    <div className={styles.games}>
      <header>GAMES</header>
      {games.map((game) => {
        return (
          <div className={styles.gameWidget} key={game.id}>
            <div className={styles.gameInfo}>
              <div className={styles.gameHeader}>{game.name}</div>
              <NavLink to={game.route} style={{ textDecoration: "none" }}>
                <button>
                  <img alt="play button" src={playBtn} />
                  <span className={styles.playText}>PLAY</span>
                </button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
