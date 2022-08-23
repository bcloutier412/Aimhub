import styles from './Games.module.css';
import { NavLink } from 'react-router-dom';
import playBtn from '../assets/playbtn.png';
import { useState } from 'react';

/*
  Games Data Array
    @Desc: This Array holds all the data to create n number of game widgets
  
*/
const games = [
  {
    id: 0,
    name: 'Grid Shot',
    route: '../GridShot',
  },
  {
    id: 1,
    name: 'Reaction Trainer',
    route: '../ReactionTrainer',
  },
  {
    id: 2,
    name: 'Reaction Trainer',
    route: '../ReactionTrainer',
  },
];

/*
  Games Component
    @Desc: This component returns n number of game widgets where 
    it shows data about the different games based on the Game Array.
    Each game widet will have a button to change the react route to 
    start the game (Changing the main window to the Game)
*/
// <NavLink to={game.route} style={{ textDecoration: "none" }}>
//                   <div className={styles.button}>
//                     <img alt='play button' src={playBtn} />
//                     <span className={styles.playText}>PLAY</span>
//                   </div>
//                 </NavLink>
export default function Games() {
  const [currentGame, changeCurrentGame] = useState(0)
  return (
    <>
      <div className={styles.gameInfo}></div>
      <div className={styles.gameWidgets}>
        <div className={styles.header}>GAMES</div>
        <div className={styles.games}>
          {games.map((game) => {
            return(
              <div className={styles.gameWidget} key={game.id}>

              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
