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

export const MenuItems = () => (
  <motion.ul className="menuItem__ul" variants={variants}>
    {/* {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))} */}
    <MenuItem i="0" link="/" linkname="Home" />
    <MenuItem i="1" link="/gsap" linkname="GSAP" />
    <MenuItem i="2" link="/curtains" linkname="Image Transition" />
    <MenuItem i="3" link="" linkname="" />
    <MenuItem i="4" link="" linkname="" />
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
