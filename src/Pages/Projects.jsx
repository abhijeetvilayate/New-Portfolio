import React, { useState } from 'react';
import './Projects.css';
import newPortfolioImg from '../assets/New portfolio.png';
import netflixCloneImg from '../assets/Netflix-clone.png';
import emsManagementImg from '../assets/Management.png'; // Imported your Employee Management System image

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filterCategories = [
    'All Projects',
    'Web Development',
    'Java / JDBC',
    'Frontend',
    'Full Stack',
  ];

  const projectsData = [
    {
      id: 1,
      title: 'ERP College Management System',
      category: ['Java / JDBC', 'Web Development', 'Full Stack'],
      technologies: 'Java Servlets, React 19, REST APIs, Oracle SQL, BCrypt, PL/SQL',
      descriptionPoints: [
        'Built a full-stack educational management platform using Java Servlets, React 19, and Oracle Database.',
        'Implemented Role-Based Access Control (RBAC) across 8 distinct user roles secured with BCrypt password hashing and PL/SQL verification procedures.',
        'Designed modular REST endpoints using JDBC API and DAO architecture to execute CRUD operations for department, attendance, course, and user management.',
        'Developed responsive single-page application (SPA) frontends using React Router DOM, Axios, and Bootstrap 5.',
      ],
      githubUrl: 'https://github.com/abhijeetvilayate/ERP',
      liveUrl: 'https://college-erp-frontend-sace.onrender.com/',
      imageSrc: emsManagementImg,
    },
    {
      id: 2,
      title: 'Gulf Countries Hiring Agency Website',
      category: ['Full Stack', 'Web Development', 'Frontend'],
      technologies: 'Java, Spring Boot, React, REST APIs, MongoDB, Tailwind CSS',
      descriptionPoints: [
        'Built Spring Boot REST APIs with DTO validation, controller-service-repository layering, CORS integration, and Spring Mail notification service.',
        'Constructed a modern React 18 SPA featuring modular components, custom modals, responsive industry/service cards, and stateful API handlers via Axios.',
        'Formatted persistence layer with Spring Data JPA/MongoDB, and incorporated native .xlsx report rendering via Apache POI OOXML.',
      ],
      githubUrl: 'https://github.com/abhijeetvilayate/manpower',
      liveUrl: 'https://manpower-frontend.onrender.com/',
      imageSrc: netflixCloneImg,
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      category: ['Frontend', 'Web Development'],
      technologies: 'React.js, JavaScript (ES6+), Bootstrap 5, CSS3, HTML5, Vite',
      descriptionPoints: [
        'Designed and deployed a modern developer portfolio application built with React and Vite, featuring component-driven modularity and interactive filtering.',
        'Crafted responsive layouts using CSS flexbox/grid and Bootstrap 5, ensuring cross-browser compatibility and optimized mobile responsiveness.',
      ],
      githubUrl: 'https://github.com/abhijeetvilayate/New-Portfolio',
      liveUrl: 'https://abhijeetvilayate.github.io/New-Portfolio/',
      imageSrc: newPortfolioImg,
    },
  ];

  // Filter projects dynamically
  const filteredProjects = activeFilter === 'All Projects'
    ? projectsData
    : projectsData.filter((project) => project.category.includes(activeFilter));

  return (
    <div className="projects-page py-5">
      <div className="container">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-4">
          <h1 className="projects-main-title">
            My <span className="text-purple">Projects</span>
          </h1>
          <div className="projects-title-line mx-auto mb-3"></div>
          <p className="text-secondary max-w-600 mx-auto small">
            A collection of projects I have built using various technologies.
            Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`filter-pill-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="row g-4 mb-5">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div className="project-card h-100 d-flex flex-column p-3">
                
                {/* Browser Window Webpage Preview (Clickable Redirect) */}
                <a
                  href={project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="webpage-preview-wrapper text-decoration-none d-block mb-3 rounded-3 overflow-hidden border position-relative"
                  title={`Click to open ${project.title}`}
                >
                  {/* Browser Address Bar Header */}
                  <div className="browser-mockup-header d-flex align-items-center justify-content-between px-2 py-1_5 bg-dark">
                    <div className="d-flex align-items-center gap-1 ps-1">
                      <span className="dot bg-danger rounded-circle" style={{ width: '8px', height: '8px', display: 'inline-block' }}></span>
                      <span className="dot bg-warning rounded-circle" style={{ width: '8px', height: '8px', display: 'inline-block' }}></span>
                      <span className="dot bg-success rounded-circle" style={{ width: '8px', height: '8px', display: 'inline-block' }}></span>
                    </div>
                    <div className="browser-url-bar mx-2 px-2 py-1 rounded bg-secondary bg-opacity-25 text-white-50 text-truncate text-center flex-grow-1" style={{ fontSize: '10px', fontFamily: 'monospace' }}>
                      <i className="bi bi-lock-fill text-success me-1"></i>
                      {project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : project.githubUrl}
                    </div>
                    <i className="bi bi-box-arrow-up-right text-white-50 pe-1" style={{ fontSize: '11px' }}></i>
                  </div>

                  {/* Webpage Screen Preview */}
                  <div className="webpage-image-container position-relative overflow-hidden" style={{ height: '170px' }}>
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="webpage-preview-img w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                    {/* Hover Redirect Overlay */}
                    <div className="webpage-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <span className="badge bg-purple shadow px-3 py-2 rounded-pill d-flex align-items-center gap-2" style={{ fontSize: '12px' }}>
                        <i className="bi bi-box-arrow-up-right"></i> Open Live Website
                      </span>
                    </div>
                  </div>
                </a>

                {/* Card Title & Content */}
                <h6 className="fw-bold text-dark mb-2">{project.title}</h6>
                
                {project.technologies && (
                  <p className="small mb-2 text-purple fw-medium" style={{ fontSize: '12px' }}>
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                )}

                {project.descriptionPoints ? (
                  <ul className="project-points-list ps-3 mb-3 text-secondary small flex-grow-1" style={{ fontSize: '12px' }}>
                    {project.descriptionPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-secondary small mb-3 flex-grow-1" style={{ fontSize: '12px' }}>
                    {project.description}
                  </p>
                )}

                {/* Card Footer Actions */}
                <div className="row g-2 mt-auto">
                  <div className="col-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn project-btn-outline w-100 d-flex align-items-center justify-content-center gap-1"
                    >
                      <i className="bi bi-github"></i> GitHub
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn project-btn-outline w-100 d-flex align-items-center justify-content-center gap-1"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> View Project
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM STATS BANNER */}
        <div className="projects-stats-banner p-3 rounded-4 bg-white border shadow-sm">
          <div className="row g-3 align-items-center justify-content-evenly text-center">
            
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="stats-icon-purple">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="text-start">
                  <h5 className="fw-bold text-dark mb-0">3+</h5>
                  <small className="text-muted" style={{ fontSize: '11px' }}>Projects Completed</small>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="stats-icon-purple">
                  <i className="bi bi-layers-fill"></i>
                </div>
                <div className="text-start">
                  <h5 className="fw-bold text-dark mb-0">4+</h5>
                  <small className="text-muted" style={{ fontSize: '11px' }}>Technologies Used</small>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="stats-icon-purple">
                  <i className="bi bi-trophy-fill"></i>
                </div>
                <div className="text-start">
                  <h5 className="fw-bold text-dark mb-0">100%</h5>
                  <small className="text-muted" style={{ fontSize: '11px' }}>Passion & Dedication</small>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="stats-icon-purple">
                  <i className="bi bi-rocket-takeoff-fill"></i>
                </div>
                <div className="text-start">
                  <h5 className="fw-bold text-dark mb-0">Continuous</h5>
                  <small className="text-muted" style={{ fontSize: '11px' }}>Learning Journey</small>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
