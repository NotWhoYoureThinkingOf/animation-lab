import React from "react";
import "./HoverAndTap.css";
import { motion } from "framer-motion";

const HoverTapExample = () => {
  return (
    <motion.div
      className="hoverTapExample"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    />
  );
};

export default HoverTapExample;
