import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="awwwards1__header">
      <div className="awwwards1__container">
        <div className="awwwards1__row v-center space-between">
          <div className="awwwards1__logo">
            <a className="awwwards1__a" href="">
              AGENCY.
            </a>
          </div>
          <nav className="awwwards1__nav-toggle">
            <div className="awwwards1__hamburger-menu">
              <span className="awwwards1__span"></span>
              <span className="awwwards1__span"></span>
            </div>
            <div className="awwwards1__hamburger-menu-close"></div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
