import React from "react";
import { Link } from "react-router-dom";

const MenuHome = ({title}) => {
    return (
      <header className="header-container">
        <h1 className="header-title">{title}</h1>
        <Link to="/login">
        <button className="botao-menu">Login</button>
        </Link>
      </header>
    );
}

export default MenuHome;
