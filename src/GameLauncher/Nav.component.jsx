import styles from './Nav.module.css'
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from './Header.component'
import NavButton from './NavButton.components';

//ASSETS
import profile from "./assets/profile.png";
import target from "./assets/target.png";
import stats from "./assets/stats.png";
import chat from "./assets/chat.png";

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
      route: "/",
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
    return(
        <div className={styles.Nav}>
            <Header text={"Aim Hub"}/>
            {buttons.map(({id, route, text, src}) => {
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
    )
}