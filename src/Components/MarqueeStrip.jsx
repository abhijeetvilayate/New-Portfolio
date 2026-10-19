import React from 'react';
import './MarqueeStrip.css';

export const MarqueeStrip = ({ speed = 'medium', reverse = false, textItems }) => {
  const defaultItems = [
    'JAVA & SPRING BOOT',
    'REACT.JS & VITE',
    'RESTFUL APIS',
    'MONGODB PERSISTENCE',
    'FULL STACK ARCHITECTURE',
    'MVC PATTERN',
    'AI-ASSISTED DEV',
    'DISTRIBUTED SYSTEMS',
    'DOCKER & CI/CD',
    'PUNE • INDIA',
  ];

  const items = textItems || defaultItems;

  return (
    <div className={`marquee-wrapper ${reverse ? 'reverse' : ''}`}>
      <div className={`marquee-track speed-${speed}`}>
        {/* Track 1 */}
        <div className="marquee-content">
          {items.map((item, idx) => (
            <span key={`m1-${idx}`} className="marquee-item">
              <span className="marquee-bullet">&#9670;</span>
              <span className="marquee-text">{item}</span>
            </span>
          ))}
        </div>
        {/* Track 2 for infinite seamless loop */}
        <div className="marquee-content" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`m2-${idx}`} className="marquee-item">
              <span className="marquee-bullet">&#9670;</span>
              <span className="marquee-text">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;
