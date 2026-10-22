import WordHover from "../WordHover/WordHover";
import "./FooterComponent.scss";
import Logo from "../../assets/logo-sq.svg";
import openArrow from "../../assets/arrow-open.svg";
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../hooks/useTheme";

const FooterComponent = () => {
  const interactiveRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const interBubble = interactiveRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let animationFrameId;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      animationFrameId = requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <div className="position-relative footer-bg">
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-filter">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive" ref={interactiveRef}></div>
        </div>
      </div>
      <div className="footer-section">
        <div className="sec-logo mb-5">
          <img
            src={Logo}
            alt="logo"
            className="footer-logo svg-black"
          />

          <div className="links">
            <a
              href="https://www.linkedin.com/in/jigyasaanand1407/?isSelfProfile=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="link-item">
                LinkedIn
                <img src={openArrow} alt="open" height={20} className="ms-3 svg-black" />
              </div>
            </a>
          </div>
        </div>
        <h1 className="email">
          <a href="mailto:Jigyasaanand14n@gmail.com">
            Jigyasaanand14n@gmail.com
          </a>
        </h1>
      </div>
    </div>
  );
};

export default FooterComponent;
