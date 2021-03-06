import React from "react";
import { Link } from "react-router-dom";

const Menu = ({title}) => {
    return (
      <header className="header-container">
        <h1 className="header-title">{title}</h1>
        <Link to="/map">
        <button className="botao-menu">Mapa de empresas</button>
        </Link>
        <Link to="/registercompany">
        <button className="botao-menu">Cadastrar empresas</button>
        </Link>
        <Link to="/registerproduct">
        <button className="botao-menu">Cadastrar produto</button>
        </Link>
        <Link to="/listproducts">
        <button className="botao-menu">Listar produtos</button>
        </Link>
        <Link to="/">
        <button className="botao-menu">Logout</button>
        </Link>
      </header>
    );
  }

export default Menu;
