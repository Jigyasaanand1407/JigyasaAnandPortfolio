import React from "react";
import "./HealthcareCaseStudy.scss";

// Automatically import images from src/assets
const imageModules = import.meta.glob(
  "../../assets/visual-*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

// Convert imported files into a filename-based object
const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [
    path.split("/").pop(),
    url,
  ]),
);

// Reusable image component with theme switching
const Img = ({ n, alt = "", className = "", dark = false }) => {
  const fileName = `visual-${String(n).padStart(2, "0")}.svg`;
  const darkFileName = `visual-${String(n).padStart(2, "0")}-dark.svg`;

  const lightImage = images[fileName];
  const darkImage = images[darkFileName];

  // If dark alternate is not enabled or doesn't exist,
  // render the default image
  if (!dark || !darkImage) {
    return (
      <img
        className={className}
        src={lightImage}
        alt={alt}
        loading={n > 2 ? "lazy" : "eager"}
      />
    );
  }

  // Render both versions and let CSS switch based on theme
  return (
    <div className={`hc-theme-image ${className}`}>
      {/* Light mode image */}
      <img
        className="hc-image-light"
        src={lightImage}
        alt={alt}
        loading={n > 2 ? "lazy" : "eager"}
      />

      {/* Dark mode image */}
      <img
        className="hc-image-dark"
        src={darkImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </div>
  );
};

export default function HealthcareCaseStudy() {
  return (
    <main className="hc-case">
      {/* Hero */}
      <section className="m-4">
        <div className="hc-hero hc-wrap">
          <div className="hc-hero-copy">
            <p className="hc-eyebrow">JIVO CARE MOBILE APPLICATION</p>

            <h1>
              A unified healthcare super-app for a connected care experience.
            </h1>

            <p className="hc-lead">
              A unified healthcare super-app offering complete care—pharmacy,
              diagnostics, teleconsultation and more—all from one accessible
              platform.
            </p>

            <div className="hc-tags">
              <span>Product Design</span>
              <span>Mobile App</span>
              <span>UX RESEARCH</span>
              <span>UX PROTOTYPE & TESTING</span>
              <span>UX IDEATION</span>
              <span>UX INTERFACE</span>
              <span>Healthcare</span>
            </div>
          </div>

          <div className="hc-hero-art">
            <Img n={1} alt="Healthcare mobile app hero presentation" />
          </div>
        </div>
      </section>

      {/* Scope of work */}
      <section className="mx-4 mb-4 scope-off-work">
        <div className="heading-sof">Scope of work</div>

        <Img n={2} dark alt="Healthcare app impact and statistics" />
      </section>

      {/* Statement */}
      <section className="hc-dark hc-statement">
        <div className="hc-wrap">
          <p>PROBLEM STATEMENT</p>

          <h2>
            Patients are forced to juggle multiple applications to manage
            different healthcare needs—booking doctors, ordering prescriptions,
            scheduling lab tests, and managing health insurance.
          </h2>
          <p>
            Design an intuitive home dashboard that consolidates all core
            medical services, allowing users to move from booking an appointment
            to ordering a blood test with minimal cognitive load.
          </p>
        </div>
        <Img
          n={3}
          alt="Healthcare app impact and statistics"
          className="my-5"
        />
      </section>

      {/* Full-width visual */}
      <section className="hc-fullbleed hc-photo">
        <Img n={4} alt="Healthcare app in a real-world mobile setting" />
      </section>

      {/* Personalized care */}
      <section className="personalized-care hc-wrap">
        <div className="hc-feature-grid py-5">
          <div className="hc-feature-visual">
            <Img n={5} alt="Mobile healthcare app interface" />
          </div>

          <div className="hc-feature-copy">
            <p className="col-pur">PERSONALIZED CARE</p>

            <h2>Personalization begins with clarity.</h2>

            <p>
              A seamless onboarding experience that shapes Ekaaya around your
              immediate healthcare needs, connecting you with the right
              specialists in just a few taps.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-4">
        <div className="our-solution row">
          <div className="col-md-6">
            <div className="os-text">OUR SOLUTION</div>
            <div className="os-heading">
              Ekaaya, a unified healthcare platform that helps you seamlessly
              manage doctor appointments, diagnostic tests, and pharmacy orders
              all in one place.
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-end">
            <div className="os-des">
              An app designed to simplify your medical journey, consolidate your
              health data, and provide affordable, accessible care exactly when
              you need it.
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-6">
            <Img n={6} alt="Mobile healthcare app interface" />
          </div>

          <div className="col-md-6">
            <Img n={7} alt="Mobile healthcare app interface" />
          </div>
        </div>
      </section>

      {/* App features */}
      <section className="app-features-sec">
        <Img n={8} alt="App features and UI screens" />
      </section>


      {/* Footer */}
      <footer className="hc-footer">
        <p>Thanks for viewing!</p>
      </footer>
    </main>
  );
}
