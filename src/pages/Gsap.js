import React, { useRef, useState, useEffect } from "react";
import "./Gsap.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TweenMax, Power3 } from "gsap";
import GsapSlider from "../components/GsapSlider/GsapSlider";
import GsapScrollTrigger from "../components/GsapScrollTrigger/GsapScrollTrigger";
import RevealImage from "../components/RevealImage/RevealImage";
import ReactCurtains from "../components/ReactCurtains/ReactCurtains";
import GsapFramerLinks from "../components/GsapFramerLinks/GsapFramerLinks";

const Gsap = () => {
  const [expand, setExpand] = useState(false);
  const [fadeTransition, setFadeTransition] = useState(true);
  const [wipeTransition, setWipeTransition] = useState(false);

  let gsap = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const handleExpand = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setExpand(true);
  };

  const handleShrink = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setExpand(false);
  };

  useEffect(() => {
    TweenMax.to(gsap, 0, { css: { visibility: "visible" } });
    // TweenMax.from(circle, 0.8, { opecity: 0, x: 40, ease: Power3.easeOut });
    // TweenMax.from(circleRed, 0.8, {
    //   opecity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.2,
    // });
    // TweenMax.from(circleBlue, 0.8, {
    //   opecity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.4,
    // });
    TweenMax.staggerFrom(
      // staggerFrom will replace all 3 of the TweenMax.from's above
      [circle, circleRed, circleBlue],
      0.8,
      { opacity: 0, x: 140, ease: Power3.easeOut },
      0.5
    );
  }, []);

  const fadeOut = () => {
    setFadeTransition(true);
    setWipeTransition(false);
  };

  const wipeOut = () => {
    setFadeTransition(false);
    setWipeTransition(true);
  };

  const fadeVariants = {
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const wipeVariants = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: "-100%",
    },
    exit: {
      x: "100%",
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },
  };

  console.log("fade", fadeTransition);
  console.log("wipe", wipeTransition);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="gsap"
      ref={(el) => (gsap = el)}
    >
      <motion.div
        className="gsap__container"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeVariants}
      >
        <h1 className="gsap__title">GSAP (Greensock Animation Platform)</h1>
        <h2 className="gsap__details">
          Get ready to refresh a lot while developing
        </h2>
        <div className="gsap__circleContainer">
          <div ref={(el) => (circle = el)} className="circle"></div>
          <div
            ref={(el) => (circleRed = el)}
            className="circle red"
            onClick={!expand ? handleExpand : handleShrink}
          ></div>
          <div ref={(el) => (circleBlue = el)} className="circle blue"></div>
        </div>
        <GsapSlider />
        <GsapScrollTrigger />
        <RevealImage />
      </motion.div>

      <GsapFramerLinks exit={fadeTransition && { opacity: 0 }} />
    </motion.div>
  );
};

export default Gsap;
