import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MenuItems = ({ onClick }) => (
  <motion.ul className="menuItem__ul" variants={variants}>
    {/* {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))} */}
    <MenuItem onClick={onClick} i="0" link="/" linkname="Home" />
    <MenuItem onClick={onClick} i="1" link="/gsap" linkname="GSAP" />
    <MenuItem
      onClick={onClick}
      i="2"
      link="/curtains"
      linkname="Image Transition"
    />
    <MenuItem
      onClick={onClick}
      i="3"
      link="/page-transitions"
      linkname="Page Transitions"
    />
    <MenuItem onClick={onClick} i="4" link="" linkname="" />
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
