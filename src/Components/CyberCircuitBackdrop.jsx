import React from 'react';
import './CyberCircuitBackdrop.css';

export const CyberCircuitBackdrop = () => {
  return (
    <div className="cyber-circuit-container" aria-hidden="true">
      {/* High-Density Vector PCB Motherboard Network */}
      <svg
        className="cyber-circuit-svg"
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Glowing Gradients for Circuit Traces */}
          <linearGradient id="circuitGradLilac" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="circuitGradAmber" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="circuitGradCore" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.55" />
          </linearGradient>

          <linearGradient id="circuitGradSubtle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.25" />
          </linearGradient>

          {/* Node Glow Filters */}
          <filter id="nodeGlowLilac" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="nodeGlowAmber" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ====================================================================
            1. MULTI-LANE PARALLEL DATA HIGHWAYS (Upper, Mid & Lower Traces)
            ==================================================================== */}
        <g className="circuit-bus-highways" strokeWidth="1.6">
          {/* Upper Multi-Lane Highway (Triple Parallel Bus) */}
          <path
            d="M 40 110 L 360 110 L 440 190 L 780 190 L 860 110 L 1260 110 L 1340 190 L 1560 190"
            stroke="url(#circuitGradLilac)"
            className="pulse-path-slow"
          />
          <path
            d="M 40 125 L 350 125 L 430 205 L 770 205 L 850 125 L 1250 125 L 1330 205 L 1560 205"
            stroke="url(#circuitGradAmber)"
            strokeDasharray="14 8"
          />
          <path
            d="M 40 140 L 340 140 L 420 220 L 760 220 L 840 140 L 1240 140 L 1320 220 L 1560 220"
            stroke="url(#circuitGradLilac)"
            strokeWidth="1.2"
          />

          {/* Mid-Upper Highway */}
          <path
            d="M 60 270 L 260 270 L 320 330 L 560 330 L 620 270 L 880 270 L 960 350 L 1220 350 L 1280 290 L 1540 290"
            stroke="url(#circuitGradCore)"
            strokeWidth="1.8"
          />
          <path
            d="M 80 285 L 250 285 L 310 345 L 550 345 L 610 285 L 870 285 L 950 365 L 1210 365 L 1270 305 L 1540 305"
            stroke="url(#circuitGradLilac)"
            strokeWidth="1.2"
            strokeDasharray="10 6"
          />

          {/* Central Main Axis (Double Bus passing behind Title & Portrait) */}
          <path
            d="M 40 430 L 380 430 L 450 500 L 830 500 L 910 420 L 1220 420 L 1290 490 L 1560 490"
            stroke="url(#circuitGradCore)"
            strokeWidth="2.2"
            className="pulse-path-slow"
          />
          <path
            d="M 40 445 L 370 445 L 440 515 L 820 515 L 900 435 L 1210 435 L 1280 505 L 1560 505"
            stroke="url(#circuitGradAmber)"
            strokeWidth="1.6"
            strokeDasharray="16 8"
            className="pulse-path-reverse"
          />

          {/* Lower Mid Highway */}
          <path
            d="M 60 580 L 280 580 L 350 650 L 620 650 L 690 580 L 960 580 L 1030 650 L 1320 650 L 1390 580 L 1560 580"
            stroke="url(#circuitGradLilac)"
            strokeWidth="1.5"
          />
          <path
            d="M 60 595 L 270 595 L 340 665 L 610 665 L 680 595 L 950 595 L 1020 665 L 1310 665 L 1380 595 L 1560 595"
            stroke="url(#circuitGradAmber)"
            strokeWidth="1.2"
            strokeDasharray="12 6"
          />

          {/* Bottom Multi-Lane Highway (Triple Parallel Bus) */}
          <path
            d="M 50 730 L 380 730 L 450 800 L 820 800 L 890 730 L 1260 730 L 1330 800 L 1560 800"
            stroke="url(#circuitGradAmber)"
            strokeWidth="1.8"
          />
          <path
            d="M 50 745 L 370 745 L 440 815 L 810 815 L 880 745 L 1250 745 L 1320 815 L 1560 815"
            stroke="url(#circuitGradLilac)"
            strokeWidth="1.4"
            strokeDasharray="14 8"
          />
          <path
            d="M 50 760 L 360 760 L 430 830 L 800 830 L 870 760 L 1240 760 L 1310 830 L 1560 830"
            stroke="url(#circuitGradSubtle)"
            strokeWidth="1.2"
          />
        </g>

        {/* ====================================================================
            2. INTRICATE 45° AND 90° INTERCONNECTING BRANCH CONDUITS
            ==================================================================== */}
        <g className="circuit-branch-lines" strokeWidth="1.4">
          {/* Left Wing Branches (Around Title, Bio, and Buttons) */}
          <path d="M 180 140 L 180 220 L 260 300 L 260 380 L 180 460 L 100 460" stroke="url(#circuitGradLilac)" />
          <path d="M 280 140 L 280 80 L 360 80 L 420 20 L 580 20" stroke="url(#circuitGradAmber)" />
          <path d="M 480 220 L 480 300 L 400 380 L 320 380 L 240 460 L 140 460" stroke="url(#circuitGradLilac)" />
          <path d="M 520 190 L 520 130 L 600 50 L 760 50" stroke="url(#circuitGradAmber)" />
          <path d="M 640 270 L 640 370 L 560 450 L 460 450" stroke="url(#circuitGradLilac)" />

          <path d="M 220 500 L 220 590 L 160 650 L 80 650" stroke="url(#circuitGradAmber)" />
          <path d="M 320 580 L 320 680 L 240 760 L 120 760" stroke="url(#circuitGradLilac)" />
          <path d="M 420 500 L 420 600 L 500 680 L 620 680" stroke="url(#circuitGradAmber)" />
          <path d="M 520 650 L 520 740 L 440 820 L 320 820" stroke="url(#circuitGradLilac)" />
          <path d="M 660 580 L 660 700 L 740 780 L 860 780" stroke="url(#circuitGradAmber)" />

          {/* Center-Right Dense Branches (Interweaving Behind Portrait & HUD) */}
          <path d="M 860 110 L 920 50 L 1120 50 L 1180 110 L 1380 110" stroke="url(#circuitGradLilac)" />
          <path d="M 960 180 L 1020 120 L 1200 120 L 1260 60 L 1420 60" stroke="url(#circuitGradAmber)" />
          <path d="M 1060 205 L 1120 145 L 1300 145 L 1360 85 L 1520 85" stroke="url(#circuitGradLilac)" />

          <path d="M 910 420 L 970 360 L 1140 360 L 1200 300 L 1380 300" stroke="url(#circuitGradAmber)" />
          <path d="M 970 360 L 970 260 L 1050 180 L 1180 180" stroke="url(#circuitGradLilac)" />
          <path d="M 1120 350 L 1120 250 L 1200 170 L 1340 170" stroke="url(#circuitGradAmber)" />

          <path d="M 830 500 L 890 560 L 1080 560 L 1140 500 L 1320 500" stroke="url(#circuitGradLilac)" />
          <path d="M 890 560 L 890 660 L 970 740 L 1160 740" stroke="url(#circuitGradAmber)" />
          <path d="M 1030 650 L 1030 730 L 1110 810 L 1300 810" stroke="url(#circuitGradLilac)" />
          <path d="M 1140 500 L 1140 600 L 1220 680 L 1420 680" stroke="url(#circuitGradAmber)" />
          <path d="M 1220 420 L 1220 520 L 1300 600 L 1480 600" stroke="url(#circuitGradLilac)" />
          <path d="M 1320 650 L 1320 730 L 1400 810 L 1540 810" stroke="url(#circuitGradAmber)" />
        </g>

        {/* ====================================================================
            3. MICROCHIP PIN ARRAYS (Fine Technical IC Contact Pins)
            ==================================================================== */}
        <g className="circuit-ic-pins" stroke="#fbbf24" strokeWidth="1.2" opacity="0.75">
          {/* Header Pin Block 1 (Left Wing) */}
          <line x1="300" y1="110" x2="300" y2="92" />
          <line x1="315" y1="110" x2="315" y2="92" />
          <line x1="330" y1="110" x2="330" y2="92" />
          <line x1="345" y1="110" x2="345" y2="92" />
          {/* Header Pin Block 2 (Center) */}
          <line x1="680" y1="190" x2="680" y2="172" />
          <line x1="695" y1="190" x2="695" y2="172" />
          <line x1="710" y1="190" x2="710" y2="172" />
          <line x1="725" y1="190" x2="725" y2="172" />
          {/* Header Pin Block 3 (Right Wing) */}
          <line x1="1140" y1="420" x2="1140" y2="402" />
          <line x1="1155" y1="420" x2="1155" y2="402" />
          <line x1="1170" y1="420" x2="1170" y2="402" />
          <line x1="1185" y1="420" x2="1185" y2="402" />
        </g>

        {/* ====================================================================
            4. GLOWING CIRCUIT NODE PADS (Vias, Sockets & Bus Junctions)
            ==================================================================== */}
        <g className="circuit-terminal-nodes">
          {/* Primary Terminal Nodes (Lilac) */}
          <circle cx="100" cy="460" r="3.8" fill="#c084fc" filter="url(#nodeGlowLilac)" />
          <circle cx="140" cy="460" r="3.2" fill="#a855f7" filter="url(#nodeGlowLilac)" />
          <circle cx="120" cy="760" r="3.5" fill="#c084fc" filter="url(#nodeGlowLilac)" />
          <circle cx="320" cy="820" r="3.5" fill="#a855f7" filter="url(#nodeGlowLilac)" />
          <circle cx="460" cy="450" r="3.2" fill="#c084fc" filter="url(#nodeGlowLilac)" />
          <circle cx="760" cy="50" r="3.8" fill="#c084fc" filter="url(#nodeGlowLilac)" />
          <circle cx="1180" cy="180" r="3.5" fill="#c084fc" filter="url(#nodeGlowLilac)" />
          <circle cx="1320" cy="500" r="3.8" fill="#c084fc" filter="url(#nodeGlowLilac)" />
          <circle cx="1480" cy="600" r="3.5" fill="#a855f7" filter="url(#nodeGlowLilac)" />
          <circle cx="1520" cy="85" r="3.5" fill="#c084fc" filter="url(#nodeGlowLilac)" />

          {/* Primary Terminal Nodes (Amber) */}
          <circle cx="580" cy="20" r="3.8" fill="#fbbf24" filter="url(#nodeGlowAmber)" />
          <circle cx="80" cy="650" r="3.5" fill="#f59e0b" filter="url(#nodeGlowAmber)" />
          <circle cx="620" cy="680" r="3.8" fill="#fbbf24" filter="url(#nodeGlowAmber)" />
          <circle cx="860" cy="780" r="3.5" fill="#f59e0b" filter="url(#nodeGlowAmber)" />
          <circle cx="1380" cy="110" r="3.8" fill="#fbbf24" filter="url(#nodeGlowAmber)" />
          <circle cx="1420" cy="60" r="3.5" fill="#f59e0b" filter="url(#nodeGlowAmber)" />
          <circle cx="1380" cy="300" r="3.8" fill="#fbbf24" filter="url(#nodeGlowAmber)" />
          <circle cx="1340" cy="170" r="3.5" fill="#f59e0b" filter="url(#nodeGlowAmber)" />
          <circle cx="1160" cy="740" r="3.8" fill="#fbbf24" filter="url(#nodeGlowAmber)" />
          <circle cx="1300" cy="810" r="3.5" fill="#f59e0b" filter="url(#nodeGlowAmber)" />
          <circle cx="1420" cy="680" r="3.8" fill="#fbbf24" filter="url(#nodeGlowAmber)" />
          <circle cx="1540" cy="810" r="3.5" fill="#f59e0b" filter="url(#nodeGlowAmber)" />

          {/* IC Pin Sockets (Golden Micro Sockets) */}
          <circle cx="300" cy="92" r="2.2" fill="#fbbf24" />
          <circle cx="315" cy="92" r="2.2" fill="#fbbf24" />
          <circle cx="330" cy="92" r="2.2" fill="#fbbf24" />
          <circle cx="345" cy="92" r="2.2" fill="#fbbf24" />
          <circle cx="680" cy="172" r="2.2" fill="#fbbf24" />
          <circle cx="695" cy="172" r="2.2" fill="#fbbf24" />
          <circle cx="710" cy="172" r="2.2" fill="#fbbf24" />
          <circle cx="725" cy="172" r="2.2" fill="#fbbf24" />
          <circle cx="1140" cy="402" r="2.2" fill="#fbbf24" />
          <circle cx="1155" cy="402" r="2.2" fill="#fbbf24" />
          <circle cx="1170" cy="402" r="2.2" fill="#fbbf24" />
          <circle cx="1185" cy="402" r="2.2" fill="#fbbf24" />

          {/* Trace Junction Highlights (White micro-dots) */}
          <circle cx="360" cy="110" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="440" cy="190" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="780" cy="190" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="860" cy="110" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="380" cy="430" r="2.8" fill="#ffffff" opacity="0.95" />
          <circle cx="450" cy="500" r="2.8" fill="#ffffff" opacity="0.95" />
          <circle cx="830" cy="500" r="2.8" fill="#ffffff" opacity="0.95" />
          <circle cx="910" cy="420" r="2.8" fill="#ffffff" opacity="0.95" />
          <circle cx="1220" cy="420" r="2.8" fill="#ffffff" opacity="0.95" />
          <circle cx="1290" cy="490" r="2.8" fill="#ffffff" opacity="0.95" />
          <circle cx="380" cy="730" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="450" cy="800" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="820" cy="800" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="890" cy="730" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="1260" cy="730" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="1330" cy="800" r="2.5" fill="#ffffff" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
};

export default CyberCircuitBackdrop;
