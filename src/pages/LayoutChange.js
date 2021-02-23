import React from "react";
import { motion } from "framer-motion";
import "./LayoutChange.css";
import photobook1 from "../assets/photobook1.jpg";
import photobook2 from "../assets/photobook2.jpg";
import photobook3 from "../assets/photobook3.jpg";

const LayoutChange = () => {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          visibility: "hidden",
        },
      }}
      className="layoutChange"
    >
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
            src={photobook3}
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
            src={photobook1}
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
            src={photobook2}
            alt=""
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LayoutChange;
