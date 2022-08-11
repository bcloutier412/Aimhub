import React from "react";
import styles from "./Header.module.css";

/*
  Title Header
    @Desc: This component is a reusable header that will be used throughou the app
*/
export default function Header({ text }) {
  return (
      <div className={styles.header}>
        <div className={styles.horizontalLine}></div>
        <h1 className={styles.headerText}>{text}</h1>
        <div className={styles.horizontalLine}></div>
      </div>
  );
}

