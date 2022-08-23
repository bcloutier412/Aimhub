import styles from "./Nav.module.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton.components";

//ASSETS

/*
  Buttons Array
    @Desc: This array contains all the different buttons and route paths that will be rendered to the nav container
*/
const buttons = [
  {
    id: 1,
    text: "Games",
    route: "/games",
    iconClass: "gg-games",
  },
  {
    id: 2,
    text: "Stats",
    route: "/stats",
    iconClass: "gg-code-climate",
  },
  {
    id: 0,
    text: "News",
    route: "/news",
    iconClass: "gg-file-document",
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
            className={"gg-circleci icon"}
            style={{ marginRight: "10px", transform: "translateY(-1px)" }}
          ></i>
          <div>AimHub</div>
        </div>
        <div>X</div>
      </div>
      <div className={styles.PlayerProfile}>
        <header>DINO</header>
      </div>
      {/*
        Menu
          @Desc: Contains all the menu buttons and the routes that they link to.
    */}
      <div className={styles.Menu}>
        <div className={styles.MenuHeader}>MENU</div>
        {buttons.map(({ id, route, text, iconClass }) => {
          return (
            <NavLink
              key={id}
              to={route}
              style={{ textDecoration: "none" }}
              onClick={() => changeActiveButton(id)}
            >
              <NavButton
                text={text}
                iconClass={iconClass}
                activeStyle={activeButton === id ? "#2a475e" : null}
              />
            </NavLink>
          );
        })}
      </div>
      <div style={{ color: "white" }}>
        <div className={styles.MenuHeader}>USEFUL LINKS</div>

      </div>
    </div>
  );
}
