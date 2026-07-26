import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImg from '../assets/ME.png';
import StatsBanner from '../Main/StatsBanner';

export const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="hero-section py-5">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center gy-5">
            {/* LEFT COLUMN */}
            <div className="col-12 col-lg-6">
              <div className="hero-badge mb-3">
                Hello, I'm <span role="img" aria-label="wave">👋</span>
              </div>

              <h1 className="hero-title">
                Abhijeet <span className="hero-title-highlight">Vilayate</span>
              </h1>

              <h2 className="hero-subtitle mt-2">
                Full Stack <span className="text-dark">Developer</span>
              </h2>

              <p className="hero-description my-4">
                I build responsive, scalable, and user-friendly web applications
                with modern technologies. Currently learning Java Full Stack
                Development and exploring new tech every day.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link
                  to="/contact"
                  className="btn btn-purple d-inline-flex align-items-center gap-2 text-decoration-none"
                >
                  Hire Me <i className="bi bi-arrow-right"></i>
                </Link>
                <Link
                  to="/projects"
                  className="btn btn-outline-purple d-inline-flex align-items-center gap-2 text-decoration-none"
                >
                  View My Work <i className="bi bi-code-slash"></i>
                </Link>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-muted small fw-semibold mb-2">Follow Me</p>
                <div className="d-flex gap-2">
                  <a href="https://github.com/abhijeetvilayate" target="_blank" rel="noreferrer" className="social-icon-btn">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/abhijeet-vilayate-7abb50290/" target="_blank" rel="noreferrer" className="social-icon-btn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="mailto:vilayateabhijeet1073@gmail.com" className="social-icon-btn">
                    <i className="bi bi-envelope-fill"></i>
                  </a>
                  <a href="https://x.com/AbhijeetVilaya2" target="_blank" rel="noreferrer" className="social-icon-btn">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-12 col-lg-6">
              <div className="hero-img-container">
                <div className="hero-blob-backdrop"></div>
                <div className="hero-organic-shape"></div>
                <img
                  src={profileImg}
                  alt="Abhijeet Vilayate"
                  className="hero-person-cutout"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner renders exclusively on Home page */}
      <StatsBanner />
    </div>
  );
};

export default Home;