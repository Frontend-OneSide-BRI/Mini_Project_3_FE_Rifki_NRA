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

  switch (location.pathname) {
    case "/":
      if (scrollDirection === "down") {
        navbarClass += " bg-dark";
      }
      break;
    default:
      navbarClass += " bg-dark";
      break;
  }


  return (
    <nav className={navbarClass}>
      <div className="container-fluid">
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
                location.pathname === "/gallery" ? "active" : ""
              }`}
              to="/movies"
            >
              Movies
            </Link>
            {/*  Button modal*/}
            <button
              type="button"
              className="nav-link"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
