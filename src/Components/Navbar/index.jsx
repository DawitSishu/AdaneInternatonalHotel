import "./style.css";
import homeImg from "../../assets/react.svg";
import bg from "../../assets/react.svg";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(".menu", {
      top: 0,
      ease: "bounce.out",
      duration: 1,
    });
    tl.current.to(
      ".line1",
      {
        y: 16,
        rotate: "40",
        duration: 0.5,
        width: "100%",
      },
      "="
    );
    tl.current.to(
      ".line2",
      {
        y: -12,
        rotate: "-45",
        duration: 0.5,
      },
      "="
    );
    tl.current.fromTo(
      ".menu__item",
      {
        opacity: 0,
        y: "-100vh",
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "elastic",
        duration: 1,
      }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.reverse();
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
      </div>
      <div className="menu">
        <div className="menu__item">
          <h5 className="menu__item-link" style={{ color: "white" }}>
            Home
          </h5>
          <img className="menu__item-img" src={homeImg} />
          <div className="marquee">
            <div className="marquee__inner">
              <span>Home - Home - Home - Home - Home - Home - Home</span>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <h5 className="menu__item-link" style={{ color: "white" }}>
            The Hotel
          </h5>
          <img className="menu__item-img" src={bg} />
          <div className="marquee">
            <div className="marquee__inner">
              <span>
                The Hotel - The Hotel - The Hotel - The Hotel - The Hotel - The Hotel -
                The Hotel
              </span>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <h5 className="menu__item-link" style={{ color: "white" }}>
            Gallery
          </h5>
          <img className="menu__item-img" src={bg} />
          <div className="marquee">
            <div className="marquee__inner">
              <span>
                Gallery - Gallery - Gallery - Gallery - Gallery - Gallery -
                Gallery
              </span>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <h5 className="menu__item-link" style={{ color: "white" }}>
            Services
          </h5>
          <img className="menu__item-img" src={bg} />
          <div className="marquee">
            <div className="marquee__inner">
              <span>
                Services - Services - Services - Services - Services - Services -
                Services
              </span>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <h5 className="menu__item-link" style={{ color: "white" }}>
            Special Offers
          </h5>
          <img className="menu__item-img" src={bg} />
          <div className="marquee">
            <div className="marquee__inner">
              <span>
                Special Offers - Special Offers - Special Offers - Special Offers - Special Offers - Special Offers -
                Special Offers
              </span>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <h5 className="menu__item-link" style={{ color: "white" }}>
            Contact
          </h5>
          <img className="menu__item-img" src={bg} />
          <div className="marquee">
            <div className="marquee__inner">
              <span>
                Contact - Contact - Contact - Contact - Contact - Contact - Contact
              </span>
            </div>
          </div>
        </div>
        <br/>
      </div>
    </>
  );
};

export default NavBar;
