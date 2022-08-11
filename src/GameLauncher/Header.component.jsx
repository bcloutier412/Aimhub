import React from "react";
import styles from "./Header.module.css";

function Header({ text }) {
  return (
      <div className={styles.header}>
        <div className={styles.horizontalLine}></div>
        <h1 className={styles.headerText}>{text}</h1>
        <div className={styles.horizontalLine}></div>
      </div>
  );
}

export default Header;
