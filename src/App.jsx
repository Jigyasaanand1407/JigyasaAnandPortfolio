import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the hook to avoid React version discrepancies
gsap.registerPlugin(useGSAP);

function App() {
  const container = useRef();

  // useGSAP automatically handles cleanup when the component unmounts
  useGSAP(() => {
    gsap.from('.hero-element', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: container }); 

  return (
    <div className="container min-vh-100 d-flex align-items-center" ref={container}>
      <div className="row justify-content-center text-center w-100">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold hero-element text-dark mb-3">
            UI Designer & Front-End Developer
          </h1>
          <p className="lead hero-element text-muted mb-5">
            Specializing in the OutSystems platform, responsive layout optimization, and crafting intuitive user experiences.
          </p>
          <div className="hero-element">
            <button className="btn btn-primary btn-lg px-4 me-3 shadow-sm">
              View My Projects
            </button>
            <button className="btn btn-outline-secondary btn-lg px-4 shadow-sm">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;