import styles from "./Games.module.css";
import { NavLink } from "react-router-dom";
import playBtn from "../assets/playbtn.png";
import { useState } from "react";

//Game Assets
import aimlabsScreenshot from "../assets/aimlabsscreenshot.png";

/*
  Games Data Array
    @Desc: This Array holds all the data to create n number of game widgets
  
*/
const games = [
  {
    id: 0,
    name: "Grid Shot",
    route: "../GridShot",
    gameImage: aimlabsScreenshot,
    gameWidgetImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT930tN61QpBIzAY7Xti5_kRUV_b-aY5Asex64w6Cz4Gem3XrM5blzi_yCaaHR26pMtbM&usqp=CAU)",
    attributes: ["speed", "percision", "consistency"],
    description:
      "Grid Shot will develop your speed, mouse control, and percision. Seven targets will spawn randomly across an invisible grid on the screen. Kill one and another spawns so there are always seven targets on the screen",
  },
  {
    id: 1,
    name: "Reaction Trainer",
    route: "../ReactionTrainer",
    gameWidgetImage: "url(https://www.creativefabrica.com/wp-content/uploads/2018/11/Clock-timer-logo-by-Mansel-Brist-2-580x406.jpg)",
    attributes: ["speed", "reaction time"],
    description: "Coming soon"
  },
  {
    id: 2,
    name: "Reflex Trainer",
    route: "../ReactionTrainer",
    gameWidgetImage: "url(https://previews.123rf.com/images/bsd555/bsd5552002/bsd555200201541/140704064-scrolling-down-computer-mouse-white-rgb-color-icon-internet-page-browsing-arrow-scrolldown-gesture-i.jpg)",
    attributes: [ "muscle memory", "consistency"],
    description: "Coming Soon"
  },
];

/*
  Games Component
    @Desc: This component returns n number of game widgets where 
    it shows data about the different games based on the Game Array.
    Each game widet will have a button to change the react route to 
    start the game (Changing the main window to the Game)
*/
export default function Games() {
  const [currentGame, changeCurrentGame] = useState(0);

  return (
    <>
      <div
        className={styles.mainContainer}
        style={{ backgroundImage: `url(${games[currentGame].gameImage})` }}
      >
        <div className={styles.gamesWrapper}>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>
              <h1>{games[currentGame].name}</h1>
              <ul className={styles.gameAttributes}>
                {games[currentGame].attributes.map((attribute) => (
                  <li
                    key={attribute.toString()}
                    className={styles.gameAttribute}
                  >
                    {attribute}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.gameDescription}>
              <h3>Description</h3>
              <p>
                {games[currentGame].description}
              </p>
            </div>
            <div className={styles.playBtn}>
              <NavLink
                to={games[currentGame].route}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.button}>
                  <img alt="play button" src={playBtn} />
                  <span className={styles.playText}>PLAY</span>
                </div>
              </NavLink>
            </div>
          </div>
          <div className={styles.games}>
            <div className={styles.header}>GAMES</div>
            <div className={styles.gameWidgets}>
              {games.map((game) => {
                return (
                  <div
                    className={`${styles.gameWidget} ${
                      currentGame === game.id ? styles.active : "null"
                    }`}
                    key={game.id}
                    onClick={() => changeCurrentGame(game.id)}
                  >
                    <div className={styles.gameWidgetImage} style={{backgroundImage: `${game.gameWidgetImage}`}}></div>
                    <div className={styles.gameWidgetText}>
                      <h4>2022</h4>
                      <h3>{game.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
