import React from 'react';
import './ConcentricHUDRings.css';

export const ConcentricHUDRings = () => {
  return (
    <div className="hud-rings-wrapper" aria-hidden="true">
      <svg
        className="hud-rings-svg"
        viewBox="0 0 540 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for HUD concentric rings */}
          <linearGradient id="hudGradLilac" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="hudGradAmber" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.75" />
          </linearGradient>

          <filter id="hudGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. OUTERMOST PRECISION DIAL (16 Radial Ticks & Dashed Ring) */}
        <g className="hud-layer-outer">
          <circle
            cx="270"
            cy="270"
            r="255"
            stroke="url(#hudGradLilac)"
            strokeWidth="1.8"
            strokeDasharray="20 12"
            opacity="0.65"
          />
          <circle
            cx="270"
            cy="270"
            r="238"
            stroke="url(#hudGradAmber)"
            strokeWidth="1.2"
            strokeDasharray="3 9"
            opacity="0.5"
          />
          {/* 16 Radial Dial Ticks */}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const r1 = idx % 4 === 0 ? 258 : 262;
            const r2 = 268;
            const x1 = 270 + Math.cos(rad) * r1;
            const y1 = 270 + Math.sin(rad) * r1;
            const x2 = 270 + Math.cos(rad) * r2;
            const y2 = 270 + Math.sin(rad) * r2;
            return (
              <line
                key={angle}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={idx % 4 === 0 ? '#fbbf24' : '#c084fc'}
                strokeWidth={idx % 4 === 0 ? '2' : '1.2'}
                opacity={idx % 4 === 0 ? '0.85' : '0.55'}
              />
            );
          })}
        </g>

        {/* 2. SECOND CONCENTRIC RADAR ARC RING (Segmented Telemetry Arcs - Counter-Clockwise) */}
        <g className="hud-layer-mid">
          <circle
            cx="270"
            cy="270"
            r="212"
            stroke="url(#hudGradAmber)"
            strokeWidth="2"
            strokeDasharray="65 30 18 30"
            opacity="0.75"
            filter="url(#hudGlow)"
          />
          <circle
            cx="270"
            cy="270"
            r="192"
            stroke="url(#hudGradLilac)"
            strokeWidth="1.4"
            strokeDasharray="14 10"
            opacity="0.55"
          />
          {/* Orbiting Telemetry Nodes */}
          <circle cx="270" cy="58" r="4.5" fill="#fbbf24" filter="url(#hudGlow)" />
          <circle cx="270" cy="482" r="4" fill="#f59e0b" filter="url(#hudGlow)" />
          <circle cx="58" cy="270" r="3.5" fill="#c084fc" filter="url(#hudGlow)" />
          <circle cx="482" cy="270" r="3.5" fill="#a855f7" filter="url(#hudGlow)" />
        </g>

        {/* 3. THIRD CONCENTRIC PRECISION RING (Micro-Dashed Line with Crosshairs) */}
        <g className="hud-layer-inner">
          <circle
            cx="270"
            cy="270"
            r="168"
            stroke="url(#hudGradLilac)"
            strokeWidth="1.4"
            strokeDasharray="6 8"
            opacity="0.6"
          />
          <circle
            cx="270"
            cy="270"
            r="148"
            stroke="url(#hudGradAmber)"
            strokeWidth="1.2"
            strokeDasharray="40 18 12 18"
            opacity="0.6"
          />
          {/* Diagonal Crosshair Markers */}
          <line x1="148" y1="148" x2="162" y2="162" stroke="#c084fc" strokeWidth="2.2" />
          <line x1="392" y1="148" x2="378" y2="162" stroke="#c084fc" strokeWidth="2.2" />
          <line x1="148" y1="392" x2="162" y2="378" stroke="#c084fc" strokeWidth="2.2" />
          <line x1="392" y1="392" x2="378" y2="378" stroke="#c084fc" strokeWidth="2.2" />
        </g>

        {/* 4. CORE HALO & INNER SATELLITE RING */}
        <g className="hud-layer-core">
          <circle
            cx="270"
            cy="270"
            r="120"
            stroke="url(#hudGradAmber)"
            strokeWidth="1.6"
            strokeDasharray="30 15"
            opacity="0.75"
          />
          <circle
            cx="270"
            cy="270"
            r="92"
            stroke="url(#hudGradLilac)"
            strokeWidth="1.2"
            opacity="0.55"
          />
          <circle cx="390" cy="270" r="4.5" fill="#c084fc" filter="url(#hudGlow)" />
          <circle cx="150" cy="270" r="3.5" fill="#fbbf24" filter="url(#hudGlow)" />
        </g>
      </svg>
    </div>
  );
};

export default ConcentricHUDRings;
