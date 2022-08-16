import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./main-nav.css";

function MainNav() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img
          style={{ width: "130px", objectFit: "cover" }}
          src="/images/logo.png"
          alt="logo"
        />{" "}
      </Link>
      <div onClick={handleClick} className="nav-icon">
        {open ? (
          <FiX style={{ color: "#1DB5E4" }} />
        ) : (
          <FiMenu style={{ color: "#1DB5E4" }} />
        )}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            {t("nav_home")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            {t("nav_about")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
