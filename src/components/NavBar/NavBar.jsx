
import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import defaultLogo from "../../assets/logo-full-sq.svg";
import scrolledLogo from "../../assets/logo-sq.svg";
import { useTheme } from "../../hooks/useTheme";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < 990
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      if (window.scrollY <= 100) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 990);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Use the scrolled logo on small screens OR when scrolled
  const logoToDisplay =
    isSmallScreen || isScrolled ? scrolledLogo : defaultLogo;

  return (
    <>
      <header
        className={`navbar-custom ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="nav-left">
          <div className="logo-box">
            <img
              src={logoToDisplay}
              alt="logo"
              className="nav-logo"
            />
          </div>
        </div>

        <div className="nav-right">
          <a href="#contact" className="hire-btn">
            <span>Hire me</span>
            <span className="arrow">→</span>
          </a>

          <button
            className="circular-hamburger"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <div className="lines-wrapper">
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className={`kota-menu-popup ${isMenuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          ✕
        </button>

        <div className="popup-links">
          <div className="item" onClick={() => setIsMenuOpen(false)}>
            Home
          </div>
          <div className="item" onClick={() => setIsMenuOpen(false)}>
            Work
          </div>
          <div className="item" onClick={() => setIsMenuOpen(false)}>
            About
          </div>
          <div className="item" onClick={() => setIsMenuOpen(false)}>
            Contact
          </div>
        </div>

        <div className="popup-footer">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn w-100 mt-4"
          >
            {theme === "light"
              ? "🌙 Switch to Dark Mode"
              : "☀️ Switch to Light Mode"}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
