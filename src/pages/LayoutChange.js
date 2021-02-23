import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LayoutChange.css";
import photobook4 from "../assets/photobook4.jpg";
import photobook5 from "../assets/photobook5.jpg";
import photobook6 from "../assets/photobook6.jpg";
import { Link } from "react-router-dom";

const LayoutChange = () => {
  const [fadeOut, setFadeOut] = useState(true);
  const [scaleOut, setScaleOut] = useState(false);

  const scaleTransition = async () => {
    await setFadeOut(false);
    await setScaleOut(true);
  };

  return (
    <motion.div
      exit={
        fadeOut
          ? {
              opacity: 0,
              transition: {
                visibility: "hidden",
              },
            }
          : {
              scale: 0,
            }
      }
      className="layoutChange"
    >
      <Link onClick={() => scaleTransition()} to="/gsap">
        go back
      </Link>
      <div className="layout__squares">
        <motion.div
          className="layout__square square1"
          layoutId="framerLink1"
          initial={{ borderRadius: "20%" }}
          animate={{ rotate: 2, borderRadius: "0%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            src={photobook4}
            alt=""
          />
        </motion.div>

        <motion.div
          className="layout__square square2"
          layoutId="framerLink2"
          initial={{ borderRadius: "20%" }}
          animate={{ rotate: 8, borderRadius: "0%" }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            src={photobook5}
            alt=""
          />
        </motion.div>

        <motion.div
          className="layout__square square3"
          layoutId="framerLink3"
          initial={{ borderRadius: "20%" }}
          animate={{ rotate: -3, borderRadius: "0%" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            src={photobook6}
            alt=""
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LayoutChange;
