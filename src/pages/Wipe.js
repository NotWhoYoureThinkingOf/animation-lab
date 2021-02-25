import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const Wipe = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push("/page-transitions"), 5000);
  });

  const wipeVariants = {
    initial: {
      x: "0",
    },
    animate: {
      x: "100%",
    },
    exit: {
      x: "0%",
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div exit={{}} className="wipe">
      <h1 className="wipe__title">Wipe Transition page</h1>
      <h2 className="wipe__message">
        Check the address bar if you're a non-believer!
      </h2>
      <img src="https://pbs.twimg.com/media/B6LWkcSIAAEBpJl.jpg" alt="" />
      <motion.div
        className="wiper"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={wipeVariants}
      ></motion.div>
    </motion.div>
  );
};

export default Wipe;
