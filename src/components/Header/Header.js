import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <span className="header__title">
        To-Do React App Demo by Alexander Novoselov
      </span>
      <div>
        Цветовая тема
      </div>
    </header>
  );
};

export default Header;