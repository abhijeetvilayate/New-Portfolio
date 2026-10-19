import React from 'react';
import './About.css';
import profileImg from '../assets/ME.png';
import reactLogo from '../assets/react.svg';
import TiltCard from '../Components/TiltCard';
import CyberCircuitBackdrop from '../Components/CyberCircuitBackdrop';
import ConcentricHUDRings from '../Components/ConcentricHUDRings';

export const About = () => {
  return (
    <div className="about-page py-5 position-relative overflow-hidden">
      {/* Giant 3D Ghost Watermark */}
      <div className="about-ghost-watermark" aria-hidden="true">
        BIOGRAPHY
      </div>
 
      {/* Cybernetic PCB Circuit Board Network */}
      <CyberCircuitBackdrop />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        
        {/* TOP HERO SECTION */}
        <div className="row align-items-center gy-5 mb-5">
          
          {/* LEFT: Image Container with Modern Frame & Concentric HUD */}
          <div className="col-12 col-lg-5">
            <TiltCard maxTilt={10} scale={1.01} glare={false} className="about-tilt-wrapper">
              <div className="about-img-wrapper position-relative">
                
                {/* Concentric High-Tech HUD Radar Rings (3D Base Layer) */}
                <div className="about-hud-layer tilt-layer-base">
                  <ConcentricHUDRings />
                </div>

                {/* Cutout Portrait (3D Middle Layer - No Rectangle Box) */}
                <img
                  src={profileImg}
                  alt="Abhijeet Vilayate"
                  className="about-person-img tilt-layer-middle"
                />

                {/* Floating "Open to Work" Badge (3D Parallax Pop) */}
                <div className="open-to-work-badge tilt-layer-pop d-flex align-items-center gap-3">
                  <div className="work-badge-icon">
                    <i className="bi bi-briefcase-fill"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block lh-1">Status</small>
                    <strong className="text-white d-flex align-items-center gap-1">
                      <span className="pulsing-dot-tiny"></span> Open to Work
                    </strong>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

          {/* RIGHT: About Details & Info Grid */}
          <div className="col-12 col-lg-7">
            <div className="ps-lg-4">
              <div className="modern-badge mb-3">
                <i className="bi bi-person-fill"></i>
                <span>About Me</span>
              </div>

              <h1 className="about-main-heading mb-3">
                Engineering Scalable Systems, <br />
                Crafting <span className="gradient-text-hero">Impactful Solutions</span>
              </h1>

              <p className="about-intro-text text-secondary mb-4">
                I'm <strong className="text-white">Abhijeet Vilayate</strong>, a Full Stack Developer based in Pune, India.
                Bridging analytical engineering thinking with modern software craftsmanship, I specialize in architecting
                end-to-end web applications using <span className="text-purple fw-semibold">Java, Spring Boot, React, and REST APIs</span>.
                I thrive on solving intricate computational challenges, writing clean maintainable code, and learning cutting-edge technologies.
              </p>

              {/* Info Grid (2 Columns) */}
              <div className="row g-3 mt-2">
                <div className="col-12 col-sm-6">
                  <div className="about-info-tile p-3 rounded-4 d-flex align-items-center gap-3">
                    <div className="info-icon-box text-purple">
                      <i className="bi bi-calendar-event"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Date of Birth</small>
                      <strong className="info-text-value">26 December 2002</strong>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="about-info-tile p-3 rounded-4 d-flex align-items-center gap-3">
                    <div className="info-icon-box text-amber">
                      <i className="bi bi-mortarboard"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Degree</small>
                      <strong className="info-text-value">B.E. Chemical Engineering</strong>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="about-info-tile p-3 rounded-4 d-flex align-items-center gap-3">
                    <div className="info-icon-box text-purple">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="overflow-hidden">
                      <small className="text-muted d-block">Email</small>
                      <a href="mailto:vilayateabhijeet1073@gmail.com" className="text-decoration-none">
                        <strong className="info-text-value text-truncate d-block">vilayateabhijeet1073@gmail.com</strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="about-info-tile p-3 rounded-4 d-flex align-items-center gap-3">
                    <div className="info-icon-box text-amber">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Phone</small>
                      <a href="tel:7350882557" className="text-decoration-none">
                        <strong className="info-text-value">+91 7350882557</strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="about-info-tile p-3 rounded-4 d-flex align-items-center gap-3">
                    <div className="info-icon-box text-purple">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Location</small>
                      <strong className="info-text-value">Pune, Maharashtra, India</strong>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="about-info-tile p-3 rounded-4 d-flex align-items-center gap-3">
                    <div className="info-icon-box text-success">
                      <i className="bi bi-check2-circle"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Availability</small>
                      <strong className="info-text-value text-success">Available for Opportunities</strong>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM CARDS GRID (3D TILT CARDS) */}
        <div className="row g-4">
          
          {/* Card 1: My Journey */}
          <div className="col-12 col-md-6 col-lg-3">
            <TiltCard maxTilt={8} scale={1.01} className="h-100">
              <div className="modern-glass-card h-100 p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-header-icon bg-purple-glow">
                    <i className="bi bi-compass"></i>
                  </div>
                  <h5 className="fw-bold mb-0 text-white">My Journey</h5>
                </div>
                <p className="text-secondary small leading-relaxed mb-0">
                  Driven by curiosity, I transitioned from foundational engineering principles to full stack software development.
                  I thrive on unraveling how systems work under the hood, building production-grade services, and writing maintainable code that scales gracefully.
                </p>
              </div>
            </TiltCard>
          </div>

          {/* Card 2: Education Timeline */}
          <div className="col-12 col-md-6 col-lg-3">
            <TiltCard maxTilt={8} scale={1.01} className="h-100">
              <div className="modern-glass-card h-100 p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-header-icon bg-amber-glow">
                    <i className="bi bi-mortarboard"></i>
                  </div>
                  <h5 className="fw-bold mb-0 text-white">Education</h5>
                </div>
                
                <div className="timeline-wrapper ms-1">
                  <div className="timeline-item pb-3 position-relative">
                    <span className="timeline-dot"></span>
                    <small className="text-purple fw-semibold d-block">2022 - 2026</small>
                    <strong className="d-block text-white small">Bachelor of Engineering (Chemical)</strong>
                    <small className="text-muted d-block">AISSMS College of Engineering, SPPU Pune</small>
                  </div>

                  <div className="timeline-item position-relative">
                    <span className="timeline-dot"></span>
                    <small className="text-purple fw-semibold d-block">2019 - 2021</small>
                    <strong className="d-block text-white small">Higher Secondary Education (HSC)</strong>
                    <small className="text-muted d-block">R.R. Shinde Junior College Pune (Maharashtra Board)</small>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 3: What I Do */}
          <div className="col-12 col-md-6 col-lg-3">
            <TiltCard maxTilt={8} scale={1.01} className="h-100">
              <div className="modern-glass-card h-100 p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-header-icon bg-purple-glow">
                    <i className="bi bi-code-square"></i>
                  </div>
                  <h5 className="fw-bold mb-0 text-white">What I Do</h5>
                </div>

                <ul className="list-unstyled mb-0 d-flex flex-column gap-2 small text-secondary">
                  <li className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-purple"></i> Full Stack Development
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-purple"></i> Java &amp; Spring Boot APIs
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-purple"></i> React &amp; Modern SPAs
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-purple"></i> MongoDB &amp; Database Modeling
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-purple"></i> REST APIs &amp; Web Services
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-purple"></i> MVC Architecture &amp; Clean Code
                  </li>
                </ul>
              </div>
            </TiltCard>
          </div>

          {/* Card 4: Technologies I Love */}
          <div className="col-12 col-md-6 col-lg-3">
            <TiltCard maxTilt={8} scale={1.01} className="h-100">
              <div className="modern-glass-card h-100 p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-header-icon bg-amber-glow">
                    <i className="bi bi-heart-fill"></i>
                  </div>
                  <h5 className="fw-bold mb-0 text-white">Favorite Tech</h5>
                </div>

                {/* Tech Grid Icons */}
                <div className="row g-2 text-center">
                  <div className="col-3">
                    <div className="tech-icon-box p-2 rounded-3">
                      <i className="bi bi-filetype-html text-danger fs-4"></i>
                      <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>HTML5</small>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="tech-icon-box p-2 rounded-3">
                      <i className="bi bi-filetype-css text-primary fs-4"></i>
                      <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>CSS3</small>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="tech-icon-box p-2 rounded-3">
                      <i className="bi bi-filetype-js text-warning fs-4"></i>
                      <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>JS (ES6)</small>
                    </div>
                  </div>
                  
                  {/* React */}
                  <div className="col-3">
                    <div className="tech-icon-box p-2 rounded-3 d-flex flex-column align-items-center justify-content-center">
                      <img src={reactLogo} alt="React" style={{ width: '24px', height: '24px' }} />
                      <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>React</small>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="tech-icon-box p-2 rounded-3">
                      <i className="bi bi-cup-hot text-danger fs-4"></i>
                      <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>Java</small>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="tech-icon-box p-2 rounded-3">
                      <i className="bi bi-cpu-fill text-success fs-4"></i>
                      <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>Spring</small>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="tech-icon-box p-2 rounded-3">
                      <i className="bi bi-database-fill-check text-success fs-4"></i>
                      <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>MongoDB</small>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="tech-icon-box p-2 rounded-3">
                      <i className="bi bi-git text-danger fs-4"></i>
                      <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>Git</small>
                    </div>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;