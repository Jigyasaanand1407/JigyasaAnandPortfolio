
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollTextComponent.scss";

gsap.registerPlugin(ScrollTrigger);

const expertiseGroups = [
  {
    id: "product-ux-design",
    heading: "Product & UX Design",
    words: [
      "User Research.",
      "User Flows.",  
      "Design Thinking.",
      "User Journey Mapping.",
      "Wirefram Designing.",
      "High-Fidelity Prototyping.",
      "Accessibility-First Design.",
      "Responsive Design.",
      "Mobile-First Design.",
      "Design Validation.",
    ],
  },
  {
    id: "ui-visual-design",
    heading: "UI & Visual Design",
    words: [
      "Visual Hierarchy.",
      "Typography Systems.",
      "Color Theory & Color Systems.",
      "Spacing & Rhythm.",
      "Interaction Design.",
      "Iconography.",
      "Design Consistency.",
    ],
  },
  {
    id: "technologies",
    heading: "technologies",
    words: [
      "Semantic HTML5.",
      "Modern CSS3.",
      "Advanced SCSS / Sass.",
      "LESS Preprocessing.",
      "JavaScript ES6+.",
      "React.",
      "Angular.",
      "JSX & Component-Based Development.",
      "Bootstrap.",
      "Sass.",
      "GSAP.",
      "Git & GitHub.",
      "Debugging & Browser DevTools.",
    ],
  },
  
  {
    id: "design-systems",
    heading: "Design Systems",
    words: [
      "Design Tokens.",
      "Component Libraries.",
      "Design Documentation.",
      "Variants & Properties.",
      "Reusable Components.",
      "Typography & Color.",
      "Spacing & Sizing Scales.",
      "Auto Layout.",
      "UI Pattern.",
      "Figma Libraries.",
      "Cross-Platform Design.",
    ],
  },
];

export default function ScrollTextComponent() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const groups = gsap.utils.toArray(
        root.querySelectorAll(".scroll-content")
      );

      groups.forEach((group) => {
        const items = gsap.utils.toArray(
          group.querySelectorAll(".scroll-words li")
        );

        if (!items.length) return;

        // Initial word visibility
        gsap.set(items, { opacity: 0.35 });
        gsap.set(items[0], { opacity: 1 });

        // Brighten each word as it approaches the viewport center
        items.forEach((item, index) => {
          gsap.to(item, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "center 75%",
              end: "center 48%",
              scrub: true,
            },
          });

          // Dim words after they pass the center
          if (index < items.length - 1) {
            gsap.to(item, {
              opacity: 0.35,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "center 38%",
                end: "center 20%",
                scrub: true,
              },
            });
          }
        });

        // Animate the colors separately for each expertise group
        gsap.fromTo(
          group,
          { "--scroll-hue": 0 },
          {
            "--scroll-hue": 360,
            ease: "none",
            scrollTrigger: {
              trigger: group,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.3,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container-fluid px-5 bg-black">
      <div className="scroll-text-page" ref={sectionRef}>
        <header className="scroll-hero">
          <div className="scroll-hero-inner">
            <h1 className="scroll-heading">
              My Expertise.
            </h1>

            <p className="scroll-description mb-0">
              A blend of product thinking, thoughtful design,
              scalable systems, and front-end knowledge.
            </p>
          </div>
        </header>

        <main className="scroll-expertise">
          {expertiseGroups.map((group) => (
            <section
              className="scroll-content"
              key={group.id}
            >
              <h2 className="scroll-sticky-heading">
                <span aria-hidden="true">
                  {group.heading}&nbsp;
                </span>

                <span className="scroll-sr-only">
                  {group.heading}: {group.words.join(" ")}
                </span>
              </h2>

              <ul
                className="scroll-words"
                aria-hidden="true"
                style={{ "--count": group.words.length }}
              >
                {group.words.map((word, index) => (
                  <li
                    key={word}
                    style={{ "--i": index }}
                  >
                    {word}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
