import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import "../../sass/_header.scss";

const LINKS = ["Home", "About", "Blog", "Contact", "Help"];

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  const links = LINKS.map((el, index) => (
    <div key={index}>
      <a href="#">{el}</a>
    </div>
  ));

  return (
    <header>
      <div className="container">
        <div className="header__section">
          <div className="header__logo">
            <h1>грузовик</h1>
          </div>
          <div className={`header__links ${showLinks ? "show" : ""}`}>
            {links}
          </div>
          <div className="burger" onClick={handleToggle}>
            <HiMenuAlt1 />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
