import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import avLogo from "./assets/av-logo.png";
import TiltCard from "./Components/TiltCard";
import MarqueeStrip from "./Components/MarqueeStrip";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsTwitterX,
  BsEnvelopeFill,
  BsArrowUpCircleFill,
  BsGeoAltFill,
  BsHeartFill,
} from "react-icons/bs";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerMarqueeItems = [
    'LET\'S BUILD SOMETHING EXTRAORDINARY',
    'JAVA & SPRING BOOT',
    'REACT.JS & VITE',
    'RESTFUL APIS',
    'MONGODB PERSISTENCE',
    'AVAILABLE FOR OPPORTUNITIES',
    'PUNE • INDIA',
  ];

  return (
    <footer className="footer pt-4 pb-4 position-relative" style={{ zIndex: 3 }}>
      <div className="mb-4">
        <MarqueeStrip speed="slow" reverse={true} textItems={footerMarqueeItems} />
      </div>
      <div className="container">
        <TiltCard maxTilt={3} scale={1.003}>
          <div className="modern-glass-card p-4 p-md-5 footer-inner-card">
          <div className="row gy-5">
            {/* Left Column: Brand & Bio */}
            <div className="col-12 col-lg-5">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="footer-logo-box">
                  <img src={avLogo} alt="AV Logo" className="footer-logo-img" />
                </div>
                <div>
                  <h4 className="fw-bold mb-0 text-white">
                    Abhijeet <span className="gradient-text-lilac">Vilayate</span>
                  </h4>
                  <small className="text-muted">Full Stack Developer &amp; Software Specialist</small>
                </div>
              </div>
              <p className="text-secondary small pe-lg-4 mb-4">
                Engineering resilient, user-centric web applications and scalable enterprise systems.
                Specializing in Java, Spring Boot, React, and RESTful architectures.
              </p>
              <div className="d-flex align-items-center gap-2 text-muted small">
                <BsGeoAltFill className="text-amber" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            {/* Middle Column: Quick Links */}
            <div className="col-6 col-lg-3">
              <h6 className="fw-bold text-white mb-3 text-uppercase tracking-wider">Navigation</h6>
              <ul className="footer-links list-unstyled mb-0 d-flex flex-column gap-2 small">
                <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                <li><Link to="/about" onClick={scrollToTop}>About Me</Link></li>
                <li><Link to="/skills" onClick={scrollToTop}>Skills &amp; Tech</Link></li>
                <li><Link to="/projects" onClick={scrollToTop}>Featured Projects</Link></li>
                <li><Link to="/contact" onClick={scrollToTop}>Get In Touch</Link></li>
              </ul>
            </div>

            {/* Right Column: Connect & Social */}
            <div className="col-6 col-lg-4">
              <h6 className="fw-bold text-white mb-3 text-uppercase tracking-wider">Connect</h6>
              <p className="small text-secondary mb-3">
                <a href="mailto:vilayateabhijeet1073@gmail.com" className="text-decoration-none text-secondary footer-email-link d-flex align-items-center gap-2">
                  <BsEnvelopeFill className="text-purple" />
                  <span className="text-truncate">vilayateabhijeet1073@gmail.com</span>
                </a>
              </p>

              <div className="social-icons d-flex flex-wrap gap-2">
                <a
                  href="https://github.com/abhijeetvilayate"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="footer-social-btn"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhijeet-vilayate-7abb50290/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className="footer-social-btn"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/travel_abhijeet_26/"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram Profile"
                  className="footer-social-btn"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://x.com/AbhijeetVilaya2"
                  target="_blank"
                  rel="noreferrer"
                  title="Twitter / X Profile"
                  className="footer-social-btn"
                >
                  <BsTwitterX />
                </a>
              </div>
            </div>
          </div>

          <hr className="footer-hr my-4" />

          {/* Footer Bottom Bar */}
          <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="mb-0 text-muted small text-center text-md-start">
              &copy; {year} Abhijeet Vilayate. Crafted with <BsHeartFill className="text-danger mx-1" /> using React &amp; Vite.
            </p>

            <button
              onClick={scrollToTop}
              className="top-btn-modern border-0 bg-transparent text-decoration-none d-flex align-items-center gap-2 text-muted"
              title="Back to Top"
            >
              <span className="small">Back to Top</span>
              <BsArrowUpCircleFill className="fs-4 text-purple" />
            </button>
          </div>
        </div>
      </TiltCard>
    </div>
  </footer>
  );
}