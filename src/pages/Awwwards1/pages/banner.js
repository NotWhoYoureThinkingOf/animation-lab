import React, { useEffect } from "react";
import "./../styles/banner.css";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <section className="awwwards1__main">
      <div className="awwwards1__container">
        <div className="awwwards1__row">
          <h2 className="awwwards1__h2">
            <div className="awwwards1__line">
              <span className="awwwards1__span">Creating unique brands is</span>
            </div>
            <div className="awwwards1__line">
              <span className="awwwards1__span">what we do.</span>
            </div>
          </h2>
          <div className="awwwards1__btn-row">
            <a href="" className="awwwards1__a">
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
