import React, { useEffect, useRef, useState } from "react";
import "./Pinning.css";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { TweenMax, Power2 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Pinning = () => {
  let spinner = useRef(null);
  let targeth2 = useRef(null);

  useEffect(() => {
    gsap.to(spinner, {
      scrollTrigger: {
        trigger: spinner,
        start: "top 30%",
        end: "top -500px",
        // rotation: 720,
        scrub: true,
        pin: true,
      },
      rotation: 270,
      ease: Power2.easeInOut,
      duration: 10,
    });
  }, []);

  return (
    <motion.div exit={{}} className="pinning">
      <div className="pinning__container">
        <h1 className="pinning__title">We're gonna test a spinny boi</h1>
        <h1 className="pinning__message">
          Normal menus are boring, let's try something else
        </h1>

        <h2 ref={(el) => (targeth2 = el)}>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>
        <h2>Checking out the positioning</h2>

        <div className="pinning__spinning">
          <div ref={(el) => (spinner = el)} className="ps__spinner">
            <p className="ps__spinner1">Top</p>
            <p className="ps__spinner2">Right</p>
            <p className="ps__spinner3">Bottom</p>
            <p className="ps__spinner4">Left</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pinning;
