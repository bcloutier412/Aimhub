import React from "react";
import "./Header.css";

function Header({ text }) {
  return (
    <>
      <div className="header">
        <div className="horizontal-line"></div>
        <h1 className="header-text">{text}</h1>
        <div className="horizontal-line"></div>
      </div>
    </>
  );
}

export default Header;
