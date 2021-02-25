import React from "react";
import "./App.css";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuExample from "./components/Menu/MenuExample";
import HoverAndTap from "./components/Menu/Gestures/HoverAndTap";
import Drag from "./components/Menu/Gestures/Drag";
import MotionValue from "./components/Menu/Gestures/MotionValues";
import { Modal } from "./components/Modal/Modal";
import Lab2 from "./pages/Lab2";
import Gsap from "./pages/Gsap";
import ReactCurtains from "./components/ReactCurtains/ReactCurtains";
import LayoutChange from "./pages/LayoutChange";
import PageTransitions from "./pages/PageTransitions";
import Wipe from "./pages/Wipe";
import Awwwards1Main from "./pages/Awwwards1/pages/awwwards1-main";

function App() {
  return (
    <AnimateSharedLayout>
      <div className="menu__example">
        <MenuExample />
      </div>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/awwwards1" render={() => <Awwwards1Main />} />
              <Route exact path="/wipe" render={() => <Wipe />} />
              <Route
                exact
                path="/page-transitions"
                render={() => <PageTransitions />}
              />
              <Route
                exact
                path="/layout-change"
                render={() => <LayoutChange />}
              />
              <Route exact path="/curtains" render={() => <ReactCurtains />} />
              <Route exact path="/gsap" render={() => <Gsap />} />
              <Route exact path="/lab2" render={() => <Lab2 />} />

              <Route
                exact
                path="/"
                render={() => (
                  <motion.div
                    className="app__location"
                    // exit={{ scale: 0 }}
                    // transition={{ duration: 1 }}
                  >
                    <h1>Welcome to the Animation Lab</h1>
                    <h2 className="app__notice">
                      ( Artifacts or lines left visible after animation happens
                      is a bug with chromium based browsers like Chrome, try
                      Firefox if it's too annoying )
                    </h2>

                    <div className="animatingOnLoad">
                      <h2>Animating on Load</h2>
                      <motion.div
                        className="animateOnLoad"
                        animate={{ scale: 1.5 }}
                      ></motion.div>
                    </div>

                    <div className="keyframes">
                      <h2>Keyframes</h2>
                      <motion.div
                        className="keyframe"
                        animate={{
                          scale: [1, 1.5, 1.5, 1, 1],
                          rotate: [0, 0, 270, 270, 0],
                          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          times: [0, 0.2, 0.5, 0.8, 1],
                          loop: Infinity,
                          repeatDelay: 1,
                        }}
                      ></motion.div>
                    </div>

                    <div className="gesture__examples">
                      <h2 className="gesture__title">Gestures</h2>
                      <div className="gesture__hoverAndTap">
                        <h2>Hover and Tap</h2>
                        <HoverAndTap />
                      </div>
                      <div className="gesture__drag">
                        <h2>Drag (drag the blue square)</h2>
                        <Drag />
                      </div>
                      <div className="gesture__motionValue">
                        <h2>Motion Values</h2>
                        <MotionValue />
                      </div>
                    </div>

                    <div className="modal__example">
                      <h2>Modal (Go back and fix this later)</h2>
                      <Modal />
                    </div>

                    <Link to="/lab2">
                      <motion.div
                        layoutId="lablink"
                        className="lablink"
                        initial={{
                          backgroundColor: "rgb(97, 218, 255)",
                        }}
                        animate={{
                          clipPath: "circle(4.0% at 94% 50%)",
                          backgroundColor: "rgb(53, 255, 147)",
                        }}
                        exit={{
                          clipPath: "circle(0% at 50% 50%)",
                          backgroundColor: "rgb(255, 89, 23)",
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeIn",
                          type: "linear",
                        }}
                      >
                        <p>Click here to check out another thing!</p>
                      </motion.div>
                    </Link>
                  </motion.div>
                )}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
      <div className="app"></div>
    </AnimateSharedLayout>
  );
}

export default App;
