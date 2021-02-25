import React, { useEffect, useState, useRef } from "react";
import "./PageTransitions.css";
import { motion } from "framer-motion";
import { TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";
import brightBG from "../assets/bright-colors.jpg";
import "./Wipe.css";
import gsap from "gsap";

const PageTransitions = () => {
  const [wipe, setWipe] = useState(true);

  let page = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box10 = useRef(null);
  let box11 = useRef(null);
  let box12 = useRef(null);

  useEffect(() => {
    TweenMax.to(page, 0, { css: { visibility: "visible" } });

    TweenMax.staggerFrom(
      [
        box2,
        box8,
        box5,
        box11,
        box4,
        box1,
        box7,
        box12,
        box6,
        box3,
        box9,
        box10,
      ],
      0.8,
      { scale: 0.8, opacity: 0, x: 140, ease: Power3.easeOut },
      0.1
    );
  }, []);

  // For changing which variants will be used from LayoutChange
  // const scaleTransition = async () => {
  //   await setFadeOut(false);
  //   await setScaleOut(true);
  // };

  // <Link onClick={() => scaleTransition()} to="/gsap">
  //       go back
  //     </Link>

  const wipeVariants = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: "-100%",
    },
    exit: {
      x: "0%",
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  const wipeOut = async () => {
    await setWipe(true);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="pageTransitions"
      ref={(el) => (page = el)}
    >
      {/* <h1>This is the page transitions page</h1> */}
      {/* pt is pageTransitions */}
      <img className="pt__bg" src={brightBG} alt="" />
      <motion.div
        className="pt__wipe"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={wipeVariants}
      ></motion.div>
      <div className="pt__boxes">
        <Link className="pt__link" to="/wipe" onClick={() => wipeOut()}>
          <motion.div ref={(el) => (box1 = el)} className="ptBox box1 row1">
            <p className="pt__title">Wipe Transition</p>
          </motion.div>
        </Link>

        <div ref={(el) => (box2 = el)} className="ptBox box2 row1">
          <p>Box 2 (Nothin yet)</p>
        </div>
        <div ref={(el) => (box3 = el)} className="ptBox box3 row1">
          <p>Box 3 (Nothin yet)</p>
        </div>
        <div ref={(el) => (box4 = el)} className="ptBox box4 row1">
          <p>Box 4 (Nothin yet)</p>
        </div>
        <div ref={(el) => (box5 = el)} className="ptBox box5 row2">
          <p>Box 5 (Nothin yet)</p>
        </div>
        <div ref={(el) => (box6 = el)} className="ptBox box6 row2">
          <p>Box 6 (Nothin yet)</p>
        </div>
        <div ref={(el) => (box7 = el)} className="ptBox box7 row2">
          <p>Box 7 (Nothin yet)</p>
        </div>
        <div ref={(el) => (box8 = el)} className="ptBox box8 row2">
          <p>Box 8 (Nothin yet)</p>
        </div>
        <div ref={(el) => (box9 = el)} className="ptBox box9 row3">
          <p>Box 9 (Nothin yet)</p>
        </div>
        <div ref={(el) => (box10 = el)} className="ptBox box10 row3">
          <p>Box 10 (Nothin yet)</p>
        </div>
        <div ref={(el) => (box11 = el)} className="ptBox box11 row3">
          <p>Box 11 (Nothin yet)</p>
        </div>
        <div ref={(el) => (box12 = el)} className="ptBox box12 row3">
          <p>Box 12 (Nothin yet)</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PageTransitions;
