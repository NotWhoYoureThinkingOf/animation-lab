import React from "react";
import gsap from "gsap";
import { useCurtains } from "react-curtains";
import RCSlideshow from "./RCSlideshow";
import "./ReactCurtains.css";
import { motion } from "framer-motion";
// make sure react curtains is installed and follow page in gsap bookmarks, specifically "slideshow with GSAP"

const ReactCurtains = () => {
  useCurtains((curtains) => {
    // use gsap ticker to render our curtains scene
    gsap.ticker.add(curtains.render.bind(curtains));
  });
  return (
    <motion.div
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="react__curtains"
    >
      <h2 className="curtains__title">
        If you don't see anything, refresh a couple times for now until I figure
        this package out fully
      </h2>
      <h3 className="curtains__details">
        (When you see an image, click it to see the transition)
      </h3>
      <RCSlideshow />
    </motion.div>
  );
};

export default ReactCurtains;
