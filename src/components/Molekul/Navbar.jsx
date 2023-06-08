import React, { Component, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../Icon.png";

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setScrollDirection("down");
      } else if (currentScrollY === 0) {
        setScrollDirection("up");
      }
    };

    //mount
    window.addEventListener("scroll", handleScroll);

    //unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  // Logic Navbar Class
  let navbarClass = "navbar navbar-expand-lg navbar-dark fixed-top";

  if (location.pathname === "/" || location.pathname.startsWith("/detail")) {
    if (scrollDirection === "down") {
      navbarClass += " bg-darkpurple";
    }
  } else {
    navbarClass += " bg-darkpurple";
  }
  return (
    <nav className={navbarClass}>
      <div className="container">
        <a className="navbar-brand d-flex" href="#">
          <div className="icon">
            <img src={Icon} alt="" />
          </div>
          <span className="mt-2 fs-4">Mr.Movies</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/movies" ? "active" : ""
              }`}
              to="/movies"
            >
              Movies
            </Link>
            {/*  Button modal*/}
            <Link
              className={`nav-link ${
                location.pathname === "/login" ? "active" : ""
              }`}
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
