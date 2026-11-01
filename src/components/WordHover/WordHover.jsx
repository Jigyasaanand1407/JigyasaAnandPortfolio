
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import "./WordHover.scss";

gsap.registerPlugin(SplitText);

const WordHover = ({
  children,
  className = "",
  fontWeight = 600,
}) => {
  const textRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const split = SplitText.create(element, {
      type: "chars",
      charsClass: "clickable-char",
    });

    splitRef.current = split;

    return () => {
      gsap.killTweensOf(split.chars);
      split.revert();
      splitRef.current = null;
    };
  }, [children]);

  const handleMouseEnter = () => {
    const chars = splitRef.current?.chars;
    if (!chars?.length) return;

    gsap.killTweensOf(chars);

    gsap.to(chars, {
      opacity: 1,
      y: -5,
      scale: 1.08,
      rotationX: 0,
      fontWeight: fontWeight,
      duration: 0.4,
      stagger: 0.025,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const handleMouseLeave = () => {
    const chars = splitRef.current?.chars;
    if (!chars?.length) return;

    gsap.killTweensOf(chars);

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      fontWeight: 400,
      duration: 0.4,
      stagger: 0.015,
      ease: "power2.out",
      overwrite: true,
    });
  };

  return (
    <span
      ref={textRef}
      className={`clickable-text ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
};

export default WordHover;
