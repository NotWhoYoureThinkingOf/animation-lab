import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="rgba(255, 255, 255, 1)"
    strokeLinecap="round"
    {...props}
  />
);

// this component is for the 3 horizontal lines in the menu button

const MenuButtonLines = ({ toggle }) => (
  // This toggle will determine if the menu is open based on the state in the file this component is being pulled into
  <button className="menu__button" onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      {/* lines 1 and 3 change into the X when menu is open */}
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        // This transition is to make this line invisiible when menu opens
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export default MenuButtonLines;
