import * as React from "react";
import { motion, useCycle } from "framer-motion";
import MenuButtonLines from "./MenuButtonLines";
import { MenuItems } from "./MenuItems";
import "./MenuExample.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MenuExample = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className="menuItem__nav"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="background" variants={sidebar}>
        <MenuButtonLines toggle={() => toggleOpen()} />
        <MenuItems />
      </motion.div>
    </motion.nav>
  );
};

export default MenuExample;
