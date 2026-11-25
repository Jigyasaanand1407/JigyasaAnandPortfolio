import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import './CaseStudyLayout.scss';

export default function CaseStudyLayout({ data }) {
  return (
    <article className={`kph-case-study container theme-${data.theme}`}>
      {/* Top Breadcrumb / Back Navigation */}
      <div className="kph-topbar">
        <div className="kph-container kph-topbar__inner px-0">
          <Link to="/projects" className="kph-back-link">
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
          <span className="kph-topbar__tag">{data.category}</span>
        </div>
      </div>

      {/* 1. Hero & Project Overview (Slides 1–4 of KPH format) */}
      <header className="kph-hero">
        <div className="kph-container">
          <div className="kph-hero__header">
            <span className="kph-eyebrow">{data.eyebrow}</span>
            <h1 className="kph-hero__title">{data.title}</h1>
            <p className="kph-hero__subtitle">{data.tagline}</p>
          </div>

          <div className="kph-overview-grid">
            <div className="kph-card">
              <span className="kph-label">The Product</span>
              <p className="kph-text">{data.overview.product}</p>
            </div>
            <div className="kph-card">
              <span className="kph-label">The Problem</span>
              <p className="kph-text">{data.overview.problem}</p>
            </div>
            <div className="kph-card">
              <span className="kph-label">The Goal</span>
              <p className="kph-text">{data.overview.goal}</p>
            </div>
            <div className="kph-card">
              <span className="kph-label">My Role & Responsibilities</span>
              <p className="kph-text kph-text--strong">{data.overview.role}</p>
              <p className="kph-text kph-text--muted">{data.overview.responsibilities}</p>
            </div>
          </div>

          <div className="kph-meta-strip">
            <div>
              <span className="kph-meta-strip__label">Duration</span>
              <span className="kph-meta-strip__val">{data.overview.duration}</span>
            </div>
            <div>
              <span className="kph-meta-strip__label">Platform</span>
              <span className="kph-meta-strip__val">{data.overview.platform}</span>
            </div>
            <div>
              <span className="kph-meta-strip__label">Deliverables</span>
              <span className="kph-meta-strip__val">{data.overview.scope}</span>
            </div>
            <div>
              <span className="kph-meta-strip__label">Tools</span>
              <span className="kph-meta-strip__val">Figma, FigJam, Design Systems</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Understanding the User (Slides 5–9 of KPH format) */}
      <section className="kph-section">
        <div className="kph-container">
          <div className="kph-section__head">
            <span className="kph-step-num">01 / Understanding the User</span>
            <h2 className="kph-section__title">Research, Pain Points & Personas</h2>
            <p className="kph-section__desc">{data.research.summary}</p>
          </div>

          {/* 4 Pain Points Grid */}
          <div className="kph-grid-4">
            {data.research.painPoints.map((pt, idx) => (
              <div key={idx} className="kph-card kph-pain-card">
                <span className="kph-pain-card__num">0{idx + 1}</span>
                <h3 className="kph-card__title">{pt.title}</h3>
                <p className="kph-text">{pt.description}</p>
              </div>
            ))}
          </div>

          {/* Persona & Problem Statement */}
          <div className="kph-persona-box">
            <div className="kph-persona-box__info">
              <span className="kph-label">User Persona</span>
              <h3 className="kph-persona-box__name">{data.research.persona.name}</h3>
              <span className="kph-persona-box__role">{data.research.persona.demographics}</span>
            </div>
            <div className="kph-persona-box__statement">
              <span className="kph-label">Problem Statement</span>
              <blockquote>“{data.research.persona.problemStatement}”</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Starting the Design (Slides 10–15 of KPH format) */}
      <section className="kph-section kph-section--alt">
        <div className="kph-container">
          <div className="kph-section__head">
            <span className="kph-step-num">02 / Starting the Design</span>
            <h2 className="kph-section__title">Information Architecture & Wireframes</h2>
            <p className="kph-section__desc">{data.designStart.intro}</p>
          </div>

          <div className="kph-grid-2">
            {data.designStart.wireframes.map((wf, idx) => (
              <div key={idx} className="kph-card">
                <div className="kph-wireframe-placeholder">
                  {/* Replace this box with your exported Figma wireframe <img> */}
                  {wf.image ? (
                    <img src={wf.image} alt={wf.title} />
                  ) : (
                    <div className="kph-wireframe-placeholder__empty">
                      <Layers size={24} />
                      <span>Drop {wf.title} Screen / Wireframe Here</span>
                    </div>
                  )}
                </div>
                <h3 className="kph-card__title">{wf.title}</h3>
                <p className="kph-text">{wf.notes}</p>
              </div>
            ))}
          </div>

          {/* Usability Study Findings */}
          <div className="kph-study-panel">
            <h3 className="kph-card__title">Usability Study Findings</h3>
            <div className="kph-grid-2">
              {data.designStart.usabilityFindings.map((round, idx) => (
                <div key={idx} className="kph-study-round">
                  <span className="kph-label">{round.roundTitle}</span>
                  <ul className="kph-list">
                    {round.points.map((p, i) => (
                      <li key={i}>
                        <CheckCircle2 size={15} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Refining the Design (Slides 16–21 of KPH format) */}
      <section className="kph-section">
        <div className="kph-container">
          <div className="kph-section__head">
            <span className="kph-step-num">03 / Refining the Design</span>
            <h2 className="kph-section__title">Key Mockups & Accessibility</h2>
            <p className="kph-section__desc">{data.refining.intro}</p>
          </div>

          {/* Core Screen Showcase */}
          <div className="kph-grid-2">
            {data.refining.mockups.map((screen, idx) => (
              <div key={idx} className="kph-card">
                <div className="kph-wireframe-placeholder kph-wireframe-placeholder--hifi">
                  {screen.image ? (
                    <img src={screen.image} alt={screen.title} />
                  ) : (
                    <div className="kph-wireframe-placeholder__empty">
                      <Sparkles size={24} />
                      <span>Drop High-Fidelity "{screen.title}" Mockup Here</span>
                    </div>
                  )}
                </div>
                <h3 className="kph-card__title">{screen.title}</h3>
                <p className="kph-text">{screen.description}</p>
              </div>
            ))}
          </div>

          {/* Accessibility Considerations */}
          <div className="kph-a11y-strip">
            <span className="kph-label">Accessibility Considerations</span>
            <div className="kph-grid-3">
              {data.refining.accessibility.map((item, idx) => (
                <div key={idx} className="kph-card">
                  <span className="kph-pain-card__num">A11Y 0{idx + 1}</span>
                  <h4 className="kph-card__title">{item.title}</h4>
                  <p className="kph-text">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Going Forward (Slides 22–25 of KPH format) */}
      <footer className="kph-section kph-section--alt">
        <div className="kph-container">
          <div className="kph-section__head">
            <span className="kph-step-num">04 / Going Forward</span>
            <h2 className="kph-section__title">Takeaways & Next Steps</h2>
          </div>

          <div className="kph-grid-2">
            <div className="kph-card">
              <span className="kph-label">Impact & What I Learned</span>
              <p className="kph-text">{data.takeaways.impact}</p>
              <p className="kph-text kph-text--spaced">{data.takeaways.learned}</p>
            </div>

            <div className="kph-card">
              <span className="kph-label">Next Steps</span>
              <ul className="kph-list">
                {data.takeaways.nextSteps.map((step, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={15} />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Case Study Navigation */}
          <div className="kph-next-project">
            <div>
              <span className="kph-label">Next Case Study</span>
              <h3 className="kph-next-project__title">{data.nextProject.title}</h3>
            </div>
            <Link to={data.nextProject.path} className="kph-next-btn">
              <span>View Case Study</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}