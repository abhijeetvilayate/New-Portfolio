import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImg from '../assets/ME.png';
import reactLogo from '../assets/react.svg';
import StatsBanner from '../Main/StatsBanner';
import TiltCard from '../Components/TiltCard';
import MarqueeStrip from '../Components/MarqueeStrip';
import CyberCircuitBackdrop from '../Components/CyberCircuitBackdrop';
import ConcentricHUDRings from '../Components/ConcentricHUDRings';

export const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Giant 3D Ghost Watermark (Maximalist Aesthetic) */}
      <div className="hero-ghost-watermark" aria-hidden="true">
        ARCHITECT
      </div>

      <section className="hero-section py-5">
        {/* Dense Cybernetic PCB Circuit Board Network */}
        <CyberCircuitBackdrop />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center gy-5">
            {/* LEFT COLUMN */}
            <div className="col-12 col-lg-6">
              {/* Maximalist Tech Telemetry Badges */}
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <div className="modern-badge">
                  <span className="pulsing-dot"></span>
                  <span>Available for Full-Time &amp; Freelance Roles</span>
                </div>
                <div className="hud-telemetry-badge">
                  <i className="bi bi-geo-alt-fill text-amber me-1"></i>
                  <span>Pune, MH [18.52° N, 73.85° E]</span>
                </div>
              </div>

              {/* Main Heading with 3D Holographic Depth */}
              <h1 className="hero-title">
                Hi, I'm <span className="hero-name-white">Abhijeet</span>{' '}
                <span className="gradient-text-hero">Vilayate</span>
              </h1>

              {/* Dynamic Subtitle */}
              <h2 className="hero-subtitle mt-2">
                Full Stack <span className="text-amber">Developer</span> &amp;{' '}
                <span className="text-purple">Software Specialist</span>
              </h2>

              {/* Description */}
              <p className="hero-description my-4">
                Full Stack Developer with hands-on experience in <span className="highlight-tech-purple">Java, Spring Boot, React.js, REST APIs, and MongoDB</span>.
                Building scalable web platforms with skills in <span className="highlight-tech-purple">AI/ML, AI APIs, and automation</span>.
              </p>

              {/* Core Stack 3D Interactive Pills */}
              <div className="hero-tech-strip d-flex flex-wrap gap-2 mb-4">
                <span className="tech-chip">
                  <i className="bi bi-cup-hot text-danger me-1"></i> Java
                </span>
                <span className="tech-chip">
                  <i className="bi bi-cpu-fill text-success me-1"></i> Spring Boot
                </span>
                <span className="tech-chip">
                  <i className="bi bi-diagram-3-fill text-purple me-1"></i> REST APIs
                </span>
                <span className="tech-chip">
                  <i className="bi bi-database-fill-check text-success me-1"></i> MongoDB
                </span>
                <span className="tech-chip">
                  <img src={reactLogo} alt="React" style={{ width: '15px', height: '15px', marginRight: '6px' }} /> React.js
                </span>
                <span className="tech-chip">
                  <i className="bi bi-robot text-warning me-1"></i> AI / ML
                </span>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link
                  to="/contact"
                  className="btn-modern-primary text-decoration-none"
                >
                  <span>Get In Touch</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link
                  to="/projects"
                  className="btn-modern-outline text-decoration-none"
                >
                  <span>Explore Work</span>
                  <i className="bi bi-code-slash"></i>
                </Link>
              </div>

              {/* Social Links */}
              <div className="hero-social-section pt-2">
                <p className="text-muted small fw-semibold mb-2">Connect With Me</p>
                <div className="d-flex gap-2">
                  <a
                    href="https://github.com/abhijeetvilayate"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    title="GitHub Profile"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhijeet-vilayate-7abb50290/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    title="LinkedIn Profile"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    href="mailto:vilayateabhijeet1073@gmail.com"
                    className="social-icon-btn"
                    title="Send Email"
                  >
                    <i className="bi bi-envelope-fill"></i>
                  </a>
                  <a
                    href="https://x.com/AbhijeetVilaya2"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    title="Twitter / X Profile"
                  >
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: 3D Interactive Tilt Showcase */}
            <div className="col-12 col-lg-6">
              <TiltCard maxTilt={12} scale={1.02} glare={false} className="hero-tilt-wrapper">
                <div className="hero-img-container">
                  {/* 1. Concentric High-Tech HUD Radar Rings (3D Depth Layer) */}
                  <div className="hero-hud-layer tilt-layer-base">
                    <ConcentricHUDRings />
                  </div>

                  {/* 2. Abhijeet Cutout Portrait (3D Middle Layer) */}
                  <img
                    src={profileImg}
                    alt="Abhijeet Vilayate - Full Stack Developer"
                    className="hero-person-cutout tilt-layer-middle"
                  />

                  {/* 6. Signature Floating Glass Badges (Balanced on Flanks - Matching Mockup) */}
                  <div className="floating-hero-pill badge-float-top-left tilt-layer-front">
                    <div className="pill-icon-circle bg-danger bg-opacity-25 text-danger">
                      <i className="bi bi-cup-hot-fill"></i>
                    </div>
                    <div>
                      <strong className="d-block text-white" style={{ fontSize: '12px' }}>Java &amp; Spring</strong>
                      <small className="text-muted" style={{ fontSize: '10px' }}>Backend Specialist</small>
                    </div>
                  </div>

                  <div className="floating-hero-pill badge-float-bottom-right tilt-layer-pop">
                    <div className="pill-icon-circle bg-info bg-opacity-25 d-flex align-items-center justify-content-center">
                      <img src={reactLogo} alt="React" style={{ width: '20px', height: '20px' }} />
                    </div>
                    <div>
                      <strong className="d-block text-white" style={{ fontSize: '12px' }}>React 19 &amp; Vite</strong>
                      <small className="text-muted" style={{ fontSize: '10px' }}>Modern UI / UX</small>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Maximalist Marquee Ticker */}
      <MarqueeStrip speed="medium" />

      {/* Stats Banner renders seamlessly below the marquee */}
      <StatsBanner />
    </div>
  );
};

export default Home;