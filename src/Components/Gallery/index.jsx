import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './style.css';

// gsap.registerPlugin(ScrollTrigger);

const PanelsLoop = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    let panels = gsap.utils.toArray(".panel");
    let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", 
        pin: true, 
        pinSpacing: false 
      });
    });
  })


 
  return (
    <div>
      <div  className="panel red">
        ONE
      </div>
      <div className="panel orange">
        TWO
      </div>
      <div className="panel purple">
        THREE
      </div>
      <div className="panel green">
        FOUR
      </div>
    </div>
  );
};

export default PanelsLoop;
