import * as React from "react";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const colors = ["white", "white", "white", "white", "white"];

export const MenuItem = ({ i, link, linkname }) => {
  const history = useHistory();

  // colors for menu items are looping through colors array. replaceing with white for the sake of understanding
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className="menuItem__li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style} />
      <p
        onClick={() => history.push(`${link}`)}
        className="text-placeholder"
        style={style}
      >
        {linkname}
      </p>
    </motion.li>
  );
};
