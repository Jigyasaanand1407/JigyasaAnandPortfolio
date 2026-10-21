import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./CustomCursorComponent.scss";

const CustomCursorComponent = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const arrowRef = useRef(null); // Brought the arrow back!
  const textRef = useRef(null);
  const imageRef = useRef(null); 

  const [cursorText, setCursorText] = useState("");
  const [cursorImage, setCursorImage] = useState(""); 

  useEffect(() => {
    // 1. Move the cursor
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15, 
      });
    };

    // 2. Handle Hover Logic
    const handleMouseOver = (e) => {
      const textTarget = e.target.closest("[data-cursor-text]");
      const imageTarget = e.target.closest("[data-cursor-image]");

      if (textTarget) {
        // STATE A: TEXT HOVER (Show Arrow)
        const text = textTarget.getAttribute("data-cursor-text");
        setCursorText(text);
        setCursorImage(""); 

        gsap.to(dotRef.current, { opacity: 0, scale: 0, duration: 0.15 });
        gsap.to(arrowRef.current, { opacity: 1, scale: 1, duration: 0.2 }); // SHOW ARROW
        gsap.to(imageRef.current, { opacity: 0, scale: 0.5, duration: 0.15 }); 
        gsap.fromTo(textRef.current, { opacity: 0, y: -5 }, { opacity: 1, y: 0, duration: 0.2 });

      } else if (imageTarget) {
        // STATE B: IMAGE HOVER (Hide Arrow)
        const imgSrc = imageTarget.getAttribute("data-cursor-image");
        setCursorImage(imgSrc);
        setCursorText(""); 

        gsap.to(dotRef.current, { opacity: 0, scale: 0, duration: 0.15 });
        gsap.to(arrowRef.current, { opacity: 0, scale: 0, duration: 0.15 }); // HIDE ARROW
        gsap.to(textRef.current, { opacity: 0, y: -5, duration: 0.15 }); 
        gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.2 });

      } else {
        // STATE C: DEFAULT (No Hover)
        setCursorText("");
        setCursorImage("");
        
        gsap.to(dotRef.current, { opacity: 1, scale: 1, duration: 0.15 }); // SHOW DOT
        gsap.to(arrowRef.current, { opacity: 0, scale: 0, duration: 0.15 }); // HIDE ARROW
        gsap.to(textRef.current, { opacity: 0, y: -5, duration: 0.15 });
        gsap.to(imageRef.current, { opacity: 0, scale: 0.5, duration: 0.15 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div id="cursor" ref={cursorRef}>
      <div className="pointer-dot" ref={dotRef} />
      <div className="pointer-arrow" ref={arrowRef} /> {/* Arrow is back! */}
      
      <div className="pointer-text" ref={textRef}>
        {cursorText}
      </div>

      <div className="pointer-image" ref={imageRef}>
        {cursorImage && <img src={cursorImage} alt="cursor preview" />}
      </div>
    </div>
  );
};

export default CustomCursorComponent;