
import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Layout from "./layout/Layout";
import CaseStudyPage from "./pages/CaseStudyPage/CaseStudyPage";

gsap.registerPlugin(useGSAP);

function HomePage() {
  const container = useRef();

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
    { scope: container }
  );

  return (
    <div ref={container}>
      <Layout />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/projects/healthcare"
          element={< CaseStudyPage/>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
