import styles from "./Nav.module.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton.components";

//ASSETS
import profile from "../assets/profile.png";
import target from "../assets/target.png";
import stats from "../assets/stats.png";
import chat from "../assets/chat.png";

/*
  Buttons Array
    @Desc: This array contains all the different buttons and route paths that will be rendered to the nav container
*/
const buttons = [
  {
    id: 0,
    text: "PROFILE",
    route: "/profile",
    src: profile,
  },
  {
    id: 1,
    text: "GAMES",
    route: "/games",
    src: target,
  },
  {
    id: 2,
    text: "STATS",
    route: "/stats",
    src: stats,
  },
  {
    id: 3,
    text: "CHAT",
    route: "/",
    src: chat,
  },
];

export default function Nav() {
  const [activeButton, changeActiveButton] = useState(1);
  return (
    /*
      Nav Header
        @Desc: Displays the Logo, Website Name and the toggle nav button
    */
    <div className={styles.Nav}>
      <div className={styles.NavHeader}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i
            class="gg-circleci icon"
            style={{ marginRight: "10px", transform: "translateY(-1px)" }}
          ></i>
          <div>AimHub</div>
        </div>
        <div>X</div>
      </div>

      {/*
        Menu
          @Desc: Contains all the menu buttons and the routes that they link to.
    */}
      <div className={styles.Menu} style={{ color: 'white'}}>
        Menu
        {buttons.map(({ id, route, text, src }) => {
          return (
            <NavLink
              key={id}
              to={route}
              style={{ textDecoration: "none" }}
              onClick={() => changeActiveButton(id)}
            >
              <NavButton
                text={text}
                src={src}
                activeStyle={activeButton === id ? "#2a475e" : null}
              />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
