// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Futebol Brasil</h1>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/noticias">Notícias</Link></li>
          <li><Link to="/ranking">Ranking</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
