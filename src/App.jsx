import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Layout from "./layout/layout";

// Register the hook to avoid React version discrepancies
gsap.registerPlugin(useGSAP);

function App() {
  const container = useRef();

  // useGSAP automatically handles cleanup when the component unmounts
  useGSAP(
    () => {
      gsap.from(".hero-element", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <div
      className=""
      ref={container}
    >
      <Layout  />
    </div>
  );
}

export default App;
