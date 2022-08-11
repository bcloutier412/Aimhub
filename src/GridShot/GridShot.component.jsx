import { Link } from "react-router-dom";
import HomeIcon from "./assets/home.png";
import styles from "./GridShot.module.css";

import React from "react";
import Header from "./Header.component";
// import Menu from "./Menu";
// import Game from "./Game";
// import Stats from "./Stats";


class GridShot extends React.Component {
  constructor() {
    super();
    this.state = {
        value: 0,
    };
  }
  render() {
    return (
      <div className={styles.body}>
        <Link to="/">
          <img alt="Home Button" src={HomeIcon} className={styles.homeBtn} />
        </Link>
        <Header />
      </div>
    );
  }
}

export default GridShot;
