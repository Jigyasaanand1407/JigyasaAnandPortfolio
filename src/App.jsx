import { useRef } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CaseStudyPage from "./pages/CaseStudyPage/CaseStudyPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectDetailPage from "./pages/ProjectDetailPage/ProjectDetailPage";

gsap.registerPlugin(useGSAP);

function AnimatedContent() {
  const container = useRef(null);

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
    <div ref={container}>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<AnimatedContent />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/projects/:projectId" element={<CaseStudyPage />} />
            <Route path="/aboutUs" element={<AboutPage />} />
            <Route path="/work" element={<ProjectDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
