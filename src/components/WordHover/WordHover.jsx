import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const WordHover = ({ children, className = "" }) => {
  const textRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const split = SplitText.create(element, {
      type: "words",
      wordsClass: "clickable-word",
    });

    splitRef.current = split;

    return () => {
      split.revert();
      splitRef.current = null;
    };
  }, [children]);

  const handleMouseEnter = () => {
    const words = splitRef.current?.words;
    if (!words?.length) return;

    gsap.killTweensOf(words);

    gsap.fromTo(
      words,
      {
        opacity: 0.3,
        y: 20,
        scale: 0.7,
        rotationX: -45,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)",
        overwrite: true,
      },
    );
  };

  return (
    <span
      ref={textRef}
      className={`clickable-text ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </span>
  );
};

export default WordHover;
