import React, { useState } from 'react';
import './ProcessCardComponent.scss';

// Import your custom images or SVGs here
import cardImg1 from '../../../assets/card-1.svg'; 
import cardImg2 from '../../../assets/card-2.svg';
import cardImg3 from '../../../assets/card-3.svg';

const processData = [
  {
    number: "01/",
    title: "Design with guts.",
    description: "We build immersive, brand-led digital experiences that wow and work hard. The kind that raises eyebrows, sparks emotion, and moves people to act.",
    image: cardImg1
  },
  {
    number: "02/",
    title: "Nail the process.",
    description: "We’re collaborative, decisive, and clear from day one. You’ll feel the momentum. You’ll know where you stand. You’ll have a team that knows when to lead, and when to listen.",
    image: cardImg2
  },
  {
    number: "03/",
    title: "Build to flex.",
    description: "We build scalable, robust systems that adapt to your growth. Future-proof tech stacks engineered for performance and speed.",
    image: cardImg3
  }
];

const ProcessCardComponent = () => {
  // Tracks which card is currently hovered. null = no card hovered.
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div 
      className="process-list-container"
      onMouseLeave={() => setHoveredIndex(null)} // Reset when leaving the whole section
    >
      {processData.map((item, index) => {
        const isHovered = hoveredIndex === index;
        const isAnyHovered = hoveredIndex !== null;
        
        // If the user is hovering *something*, mute the ones that aren't active
        const cardStateClass = isAnyHovered 
          ? (isHovered ? 'is-active' : 'is-muted') 
          : '';

        return (
          <div 
            key={index} 
            className={`process-card ${cardStateClass}`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div className="number">{item.number}</div>
            
            {/* position-relative is required so the floating image anchors to this row */}
            <div className="row align-items-center position-relative">
              
              <div className="col-12 col-xl-8 process-name lh-none mb-5 mb-xl-0">
                {item.title}
              </div>
              
              <div className="col-12 col-xl-4 process-description">
                {item.description}
              </div>

              {/* The Floating Image that pops up on hover */}
              <div className="hover-image-popup">
                <img src={item.image} alt={item.title} />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProcessCardComponent;