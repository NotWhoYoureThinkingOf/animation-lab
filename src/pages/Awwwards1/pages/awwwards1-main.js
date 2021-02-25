import React, { useEffect } from "react";
import Header from "./header";
import "../styles/all.css";
import Banner from "./banner";

const Awwwards1Main = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className="awwwards1">
      <Header />
      <Banner />
    </div>
  );
};

export default Awwwards1Main;
