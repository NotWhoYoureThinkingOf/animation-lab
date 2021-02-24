import React from "react";
import "./GsapFramerLinks.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GsapFramerLinks = ({ onClick1, onClick2, onClick3, exit }) => {
  return (
    <motion.div className="gsap__framerPageChange">
      <h2 className="gsap__framerTitle">Animations Using Different Pages</h2>
      <motion.div exit={{ exit }} className="gsap__framerLinks">
        <Link className="gsap__framerLink" to="/curtains">
          <motion.div
            className="link__curtains"
            style={{ borderRadius: "20%" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            layoutId="framerLink1"
            layout
          >
            <motion.p exit={{ opacity: 0 }}>Image Transition</motion.p>
          </motion.div>
        </Link>
        <Link className="gsap__framerLink" to="/layout-change">
          <motion.div
            className="layout__change"
            style={{ borderRadius: "20%" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            layoutId="framerLink2"
            layout
          >
            <motion.p exit={{ opacity: 0 }}>Layout Change</motion.p>
          </motion.div>
        </Link>
        <Link className="link__curtains" to="/curtains">
          <motion.div
            className="link__curtains"
            style={{ borderRadius: "20%" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
            layoutId="framerLink3"
            layout
          >
            <motion.p exit={{ opacity: 0 }}>SVG...maybe?</motion.p>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default GsapFramerLinks;
