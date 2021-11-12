import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <header className="header-container">
        <h1 className="header-title">{this.props.title}</h1>
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
        <Link to="/login">
        <button className="botao-menu">Login</button>
        </Link>
      </header>
    );
  }
}

export default Menu;
