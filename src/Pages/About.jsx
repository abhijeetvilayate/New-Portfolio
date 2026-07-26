
import './About.css';
import profileImg from '../assets/ME.png';
import reactLogo from '../assets/react.svg'; // Imported your local SVG logo

export const About = () => {
  return (
    <div className="about-page">
      <div className="container py-5">
        
        {/* TOP HERO SECTION */}
        <div className="row align-items-center gy-5 mb-5">
          
          {/* LEFT: Image Container with Cards & Decorative Dots */}
          <div className="col-12 col-lg-5">
            <div className="about-img-wrapper position-relative">
              
              {/* Outer Glow & Background Cards */}
              <div className="about-bg-card-backdrop"></div>
              <div className="about-portrait-card">
                <img
                  src={profileImg}
                  alt="Abhijeet Vilayate"
                  className="about-person-img"
                />
              </div>

              {/* Floating "Open to Work" Badge */}
              <div className="open-to-work-badge d-flex align-items-center gap-2 shadow-sm">
                <div className="work-badge-icon">
                  <i className="bi bi-briefcase-fill"></i>
                </div>
                <div>
                  <small className="text-muted d-block lh-1">Open to</small>
                  <strong className="text-purple">Work</strong>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: About Details & Info Grid */}
          <div className="col-12 col-lg-7">
            <div className="ps-lg-4">
              <span className="about-subtitle">About Me</span>
              <div className="about-title-underline mb-4"></div>

              <h1 className="about-main-heading mb-3">
                Building Solutions, <br />
                Solving <span className="text-purple">Problems</span>
              </h1>

              <p className="about-intro-text text-secondary mb-4">
                I'm <strong>Abhijeet Vilayate</strong>, a passionate Full Stack Developer currently learning Java
                Full Stack Development. I enjoy building responsive, user-friendly web applications
                and exploring new technologies to create efficient solutions.
              </p>

              {/* Info Grid (2 Columns) */}
              <div className="row g-4 mt-2">
                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="info-icon-box">
                      <i className="bi bi-calendar-event"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Date of Birth</small>
                      <strong className="info-text-value">26 December 2002</strong>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="info-icon-box">
                      <i className="bi bi-mortarboard"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Education</small>
                      <strong className="info-text-value">B.E. Chemical Engineering</strong>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="info-icon-box">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Email</small>
                      <a href="mailto:vilayateabhijeet1073@gmail.com" className="text-decoration-none">
                        <strong className="info-text-value">vilayateabhijeet1073@gmail.com</strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="info-icon-box">
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
                  <div className="d-flex align-items-center gap-3">
                    <div className="info-icon-box">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Location</small>
                      <strong className="info-text-value">Pune, Maharashtra, India</strong>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="info-icon-box">
                      <i className="bi bi-code-slash"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block">Freelance</small>
                      <strong className="info-text-value">Available</strong>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM CARDS GRID */}
        <div className="row g-4">
          
          {/* Card 1: My Journey */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-feature-card h-100 p-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="card-header-icon">
                  <i className="bi bi-person"></i>
                </div>
                <h5 className="fw-bold mb-0">My Journey</h5>
              </div>
              <p className="text-secondary small leading-relaxed mb-0">
                I started my journey with a curiosity for coding and problem-solving. Over time,
                I discovered my passion for web development and full stack technologies.
                I'm on a continuous path of learning, building projects, and improving myself everyday.
              </p>
            </div>
          </div>

          {/* Card 2: Education Timeline */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-feature-card h-100 p-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="card-header-icon">
                  <i className="bi bi-mortarboard"></i>
                </div>
                <h5 className="fw-bold mb-0">Education</h5>
              </div>
              
              <div className="timeline-wrapper ms-1">
                <div className="timeline-item pb-3 position-relative">
                  <span className="timeline-dot"></span>
                  <small className="text-purple fw-semibold d-block">2022 - 2026</small>
                  <strong className="d-block text-dark small">B.E. Chemical Engineering</strong>
                  <small className="text-muted d-block">AISSMS College of Engineering, Pune</small>
                </div>

                <div className="timeline-item pb-3 position-relative">
                  <span className="timeline-dot"></span>
                  <small className="text-purple fw-semibold d-block">2019 - 2021</small>
                  <strong className="d-block text-dark small">Higher Secondary (HSC)</strong>
                  <small className="text-muted d-block">Maharashtra State Board</small>
                </div>

                <div className="timeline-item position-relative">
                  <span className="timeline-dot"></span>
                  <small className="text-purple fw-semibold d-block">2018 - 2019</small>
                  <strong className="d-block text-dark small">Secondary (SSC)</strong>
                  <small className="text-muted d-block">Central Board Secondary Education</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: What I Do */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-feature-card h-100 p-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="card-header-icon">
                  <i className="bi bi-code-square"></i>
                </div>
                <h5 className="fw-bold mb-0">What I Do</h5>
              </div>

              <ul className="list-unstyled mb-0 d-flex flex-column gap-2 small text-secondary">
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle text-purple"></i> Frontend Development
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle text-purple"></i> Backend Development
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle text-purple"></i> RESTful API Integration
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle text-purple"></i> Database Management
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle text-purple"></i> Problem Solving
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle text-purple"></i> Clean & Efficient Code
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: Technologies I Love */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-feature-card h-100 p-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="card-header-icon">
                  <i className="bi bi-heart"></i>
                </div>
                <h5 className="fw-bold mb-0">Technologies I Love</h5>
              </div>

              {/* Tech Grid Icons */}
              <div className="row g-2 text-center">
                <div className="col-3">
                  <div className="tech-icon-box p-2 rounded-3 bg-light">
                    <i className="bi bi-filetype-html text-danger fs-4"></i>
                    <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>HTML5</small>
                  </div>
                </div>
                <div className="col-3">
                  <div className="tech-icon-box p-2 rounded-3 bg-light">
                    <i className="bi bi-filetype-css text-primary fs-4"></i>
                    <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>CSS3</small>
                  </div>
                </div>
                <div className="col-3">
                  <div className="tech-icon-box p-2 rounded-3 bg-light">
                    <i className="bi bi-filetype-js text-warning fs-4"></i>
                    <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>JavaScript</small>
                  </div>
                </div>
                
                {/* React Local SVG Logo */}
                <div className="col-3">
                  <div className="tech-icon-box p-2 rounded-3 bg-light d-flex flex-column align-items-center justify-content-center">
                    <img src={reactLogo} alt="React" style={{ width: '24px', height: '24px' }} />
                    <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>React</small>
                  </div>
                </div>

                <div className="col-3">
                  <div className="tech-icon-box p-2 rounded-3 bg-light">
                    <i className="bi bi-cup-hot text-danger fs-4"></i>
                    <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>Java</small>
                  </div>
                </div>
                <div className="col-3">
                  <div className="tech-icon-box p-2 rounded-3 bg-light">
                    <i className="bi bi-bootstrap text-purple fs-4"></i>
                    <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>Spring Boot</small>
                  </div>
                </div>
                <div className="col-3">
                  <div className="tech-icon-box p-2 rounded-3 bg-light">
                    <i className="bi bi-database text-primary fs-4"></i>
                    <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>MySQL</small>
                  </div>
                </div>
                <div className="col-3">
                  <div className="tech-icon-box p-2 rounded-3 bg-light">
                    <i className="bi bi-git text-danger fs-4"></i>
                    <small className="d-block text-muted mt-1" style={{ fontSize: '10px' }}>Git</small>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;