import { gsap } from "gsap";
import "./GsapScrollTrigger.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import Gsap from "../../pages/Gsap";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  let red = useRef(null);
  let blue = useRef(null);
  let yellow = useRef(null);

  let redScrub = useRef(null);
  let blueScrub = useRef(null);
  let yellowScrub = useRef(null);

  let redPin = useRef(null);
  let bluePin = useRef(null);
  let yellowPin = useRef(null);

  let redPanel = useRef(null);
  let bluePanel = useRef(null);
  let yellowPanel = useRef(null);
  let greenPanel = useRef(null);

  let redSpacing = useRef(null);
  let blueSpacing = useRef(null);
  let yellowSpacing = useRef(null);
  let greenSpacing = useRef(null);

  let snappingGroup = useRef(null);
  let redSnapping = useRef(null);
  let blueSnapping = useRef(null);
  let yellowSnapping = useRef(null);
  let greenSnapping = useRef(null);

  useEffect(() => {
    // animation on scroll
    gsap.to(blue, {
      scrollTrigger: {
        trigger: red,
        start: "top 60%",
        end: "bottom top",
        toggleActions: "restart pause resume pause",
      },
      duration: 1,
      x: -500,
      repeat: -1,
      yoyo: true,
    });

    // animation with scrubbing
    gsap.to(blueScrub, {
      scrollTrigger: {
        trigger: redScrub,
        start: "top 60%",
        end: "bottom top",
        scrub: true,
      },
      duration: 1,
      x: -500,
    });

    // pinning
    gsap.to(bluePin, {
      scrollTrigger: {
        trigger: redPin,
        start: "top center",
        end: "top 100px",
        scrub: true,
        pin: true,
      },
      x: 400,
      rotation: 360,
      ease: "none",
      duration: 3,
    });

    // pinning panel with extra space
    ScrollTrigger.create({
      trigger: bluePanel,
      start: "top top",
      end: "+=300",
      pin: true,
    });

    // pinning panel with no spacing
    ScrollTrigger.create({
      trigger: blueSpacing,
      start: "top top",
      end: "+=300",
      pinSpacing: false,
      pin: true,
    });

    // horizontal scrolling
    let sections = [redSnapping, blueSnapping, yellowSnapping, greenSnapping];
    // let sections = gsap.utils.toArray(redSnapping, blueSnapping, yellowSnapping, greenSnapping);
    console.log("sections", sections);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: snappingGroup,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + snappingGroup.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="scrollTriggerComp">
      <div className="regularScroll">
        <h1>ScrollTrigger</h1>
        <div className="scrollTrigger__circles">
          <div
            ref={(el) => (red = el)}
            className="scrollCircle triggerRed"
          ></div>
          <div
            ref={(el) => (blue = el)}
            className="scrollCircle triggerBlue"
          ></div>
          <div
            ref={(el) => (yellow = el)}
            className="scrollCircle triggerYellow"
          ></div>
        </div>
      </div>

      <div className="scrubScroll">
        <h1>ScrollTrigger with scrubbing</h1>
        <div className="scrollTrigger__circles">
          <div
            ref={(el) => (redScrub = el)}
            className="scrollCircle triggerRed"
          ></div>
          <div
            ref={(el) => (blueScrub = el)}
            className="scrollCircle triggerBlue"
          ></div>
          <div
            ref={(el) => (yellowScrub = el)}
            className="scrollCircle triggerYellow"
          ></div>
        </div>
      </div>

      <div className="pinScroll">
        <h1>ScrollTrigger with pinning</h1>
        <div className="scrollTrigger__circles">
          <div
            ref={(el) => (redPin = el)}
            className="scrollCircle triggerRed"
          ></div>
          <div
            ref={(el) => (bluePin = el)}
            className="scrollCircle triggerBlue"
          ></div>
          <div
            ref={(el) => (yellowPin = el)}
            className="scrollCircle triggerYellow"
          ></div>
        </div>
      </div>

      <div className="pinPanels">
        <div ref={(el) => (redPanel = el)} className="pinPanel panel1">
          Panel 1
        </div>
        <div ref={(el) => (bluePanel = el)} className="pinPanel panel2">
          Panel 2 (Pin Spacing)
        </div>
        <div ref={(el) => (yellowPanel = el)} className="pinPanel panel3">
          Panel 3
        </div>
        <div ref={(el) => (greenPanel = el)} className="pinPanel panel4">
          Panel 4
        </div>
      </div>

      <div className="pinSpacing">
        <div ref={(el) => (redSpacing = el)} className="pinPanel panel1">
          Panel 1
        </div>
        <div ref={(el) => (blueSpacing = el)} className="pinPanel panel2">
          Panel 2 (No Pin Spacing)
        </div>
        <div ref={(el) => (yellowSpacing = el)} className="pinPanel panel3">
          Panel 3
        </div>
        <div ref={(el) => (greenSpacing = el)} className="pinPanel panel4">
          Panel 4
        </div>
      </div>

      <div className="snapping__section">
        <h1>Horizontal Snapping</h1>

        <div className="snapping" ref={(el) => (snappingGroup = el)}>
          <div ref={(el) => (redSnapping = el)} className="snapPanel snap1">
            Panel 1
          </div>
          <div ref={(el) => (blueSnapping = el)} className="snapPanel snap2">
            Panel 2
          </div>
          <div ref={(el) => (yellowSnapping = el)} className="snapPanel snap3">
            Panel 3
          </div>
          <div ref={(el) => (greenSnapping = el)} className="snapPanel snap4">
            Panel 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default GsapScrollTrigger;
