import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./ButtonComponent.scss";
import planeImg from "../../assets/submit-button.svg"

gsap.registerPlugin(useGSAP);

const ButtonComponent = ({ onClick }) => {
  const buttonRef = useRef(null);
  const sendRef = useRef(null);
  const doneRef = useRef(null);
  const iconRef = useRef(null);
  const timelineRef = useRef(null);

  const [isDone, setIsDone] = useState(false);

  useGSAP(
    () => {
      gsap.set(doneRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(sendRef.current, {
        opacity: 1,
        y: 0,
      });

      gsap.set(iconRef.current, {
        x: 0,
        rotation: 0,
      });
    },
    { scope: buttonRef }
  );

  const handleSubmit = () => {
    if (isDone) return;

    onClick?.();

    timelineRef.current?.kill();

    const tl = gsap.timeline({
      onComplete: () => setIsDone(true),
    });

    timelineRef.current = tl;

    tl.to(iconRef.current, {
      x: 35,
      rotation: 45,
      duration: 0.35,
      ease: "power2.inOut",
    })
      .to(
        sendRef.current,
        {
          opacity: 0,
          y: -15,
          duration: 0.25,
        },
        "-=0.15"
      )
      .to(iconRef.current, {
        x: 0,
        rotation: 0,
        duration: 0.3,
        ease: "back.out(2)",
      })
      .to(
        doneRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(2)",
        },
        "-=0.1"
      );
  };

  return (
    <button
      ref={buttonRef}
      className={`submit-button ${isDone ? "completed" : ""}`}
      type="button"
      onClick={handleSubmit}
      disabled={isDone}
    >
      <span className="button-text">
        <span ref={sendRef} className="send-text">
          Send
        </span>

        <span ref={doneRef} className="done-text">
          Done
        </span>
      </span>

      <span ref={iconRef} className="button-icon">
        <img src={planeImg} alt="" height={20} />
      </span>
    </button>
  );
};

export default ButtonComponent;