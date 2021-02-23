import React from "react";
import "./Lab2.css";
import { motion } from "framer-motion";
import char from "../assets/animationlabcharacter.png";

const Lab2 = () => {
  const lablinkVariants = {
    initial: {
      backgroundColor: "rgb(53, 255, 147)",
    },
    animate: {
      clipPath: "circle(0% at 50% 50%)",
      backgroundColor: "rgb(17, 17, 17)",
    },
    exit: {
      clipPath: "circle(4.0% at 94% 50%)",
    },
  };

  const leftVariants = {
    initial: { clipPath: "circle(0% at 100% 50%)" },
    animate: {
      clipPath: "circle(120.0% at 100% 50%)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const rightVariants = {
    initial: { clipPath: "circle(0% at 0% 50%)" },
    animate: {
      clipPath: "circle(120.0% at 0% 50%)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const puppyVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // split page up into panels similar to projects section on profile and have them come in 1 at a time either through clip path or just moving them in at an angle.

  return (
    <div className="lab2">
      <motion.div
        layoutId="lablink"
        className="lab2__open"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={lablinkVariants}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "linear",
        }}
      >
        <p>Click here out to check the next page</p>
      </motion.div>
      <div className="lab2__left">
        <motion.div
          className="lab2__leftCircle"
          initial="initial"
          animate="animate"
          variants={leftVariants}
        ></motion.div>
      </div>
      <div className="lab2__right">
        <motion.div
          className="lab2__rightCircle"
          initial="initial"
          animate="animate"
          variants={rightVariants}
        ></motion.div>
      </div>

      <motion.div
        className="lab2__text"
        initial="initial"
        animate="animate"
        variants={textVariants}
      >
        <div className="lab2__textContainer">
          <h2>This section is for Framer Motion</h2>
          <h3>
            I found a 3D illustration of a dog too cause I like both of those
            things
          </h3>
        </div>
      </motion.div>

      <motion.div
        className="lab2__character"
        initial="initial"
        animate="animate"
        variants={puppyVariants}
      >
        <img className="lab2__puppy" src={char} alt="" />
      </motion.div>
    </div>
  );
};

export default Lab2;
