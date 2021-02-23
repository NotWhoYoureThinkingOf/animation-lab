import React, { useEffect, useRef } from "react";
import "./RevealImage.css";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RevealImage = () => {
  let reveal = useRef(null);

  useEffect(() => {
    // TweenMax.to(reveal, 2, {
    //   delay: 1.5,
    //   width: "950px",
    //   scrub: true,
    // });
    gsap.to(reveal, {
      scrollTrigger: {
        trigger: reveal,
        start: "top 40%",
      },
      duration: 1,
      width: "100%",
      ease: Power3.easeOut,
      duration: 1,
    });
  }, []);

  return (
    // change to scrolltrigger
    <div className="revealImage">
      <h2>Reveal Image</h2>
      <div className="reveal__content">
        <div className="revealImage__container">
          <div ref={(el) => (reveal = el)} className="revealImage__image"></div>
        </div>
      </div>
    </div>
  );
};

export default RevealImage;
