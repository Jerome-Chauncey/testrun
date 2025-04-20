import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white sticky-top ">
      <div className="container-fluid">
        <a
          className="navbar-brand text-white"
          href="https://jerome-chauncey.github.io/One-Percent/"
        >
          <img
            src="logo-7402592_640.png"
            alt="One percent Logo Footer"
            className="Logo"
            height="50"
            width="50"
          />
        </a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/liveprices" className="nav-link text-white">
                Live Market Prices
              </NavLink>
              {/* <a className="nav-link text-white" href="charts.html">Live Market Prices</a> */}
            </li>
            {/* <li className="nav-item">
                <a className="nav-link text-white" href="#footer">Trading Tools</a>
              </li> */}
            {/* <li className="nav-item">
                <a className="nav-link text-white" href="#footer">Contact Us</a>
              </li> */}
          </ul>
          <form className="d-flex ms-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
