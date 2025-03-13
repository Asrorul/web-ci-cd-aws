import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo">MyWebsite</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
