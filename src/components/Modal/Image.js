import * as React from "react";
import { useState, useRef } from "react";
import { motion, useDomEvent } from "framer-motion";
import "./Modal.css";

export const Image = () => {
  const [isOpen, setOpen] = useState(false);

  useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

  return (
    <div className={`image-container ${isOpen ? "open" : ""}`}>
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        className="shade"
        onClick={() => setOpen(false)}
      />
      <motion.img
        src="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg"
        alt="giraffe"
        onClick={() => setOpen(!isOpen)}
        layoutTransition
      />
    </div>
  );
};
