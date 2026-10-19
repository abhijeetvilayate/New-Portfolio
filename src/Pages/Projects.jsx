import React, { useState } from 'react';
import './Projects.css';
import newPortfolioImg from '../assets/New portfolio.png';
import netflixCloneImg from '../assets/Netflix-clone.png';
import emsManagementImg from '../assets/Management.png';
import StatsBanner from '../Main/StatsBanner';
import TiltCard from '../Components/TiltCard';
import CyberCircuitBackdrop from '../Components/CyberCircuitBackdrop';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filterCategories = [
    'All Projects',
    'Full Stack',
    'Java / JDBC',
    'Frontend',
    'Web Development',
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
      featuredTag: 'Enterprise Java',
    },
    {
      id: 2,
      title: 'Gulf Countries Hiring Agency Platform',
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
      featuredTag: 'Spring Boot & React',
    },
    {
      id: 3,
      title: 'Personal Developer Portfolio Website',
      category: ['Frontend', 'Web Development'],
      technologies: 'React.js, JavaScript (ES6+), Bootstrap 5, CSS3, HTML5, Vite',
      descriptionPoints: [
        'Designed and deployed a modern developer portfolio application built with React and Vite, featuring component-driven modularity and interactive filtering.',
        'Crafted responsive layouts using CSS flexbox/grid and Bootstrap 5, ensuring cross-browser compatibility and optimized mobile responsiveness.',
      ],
      githubUrl: 'https://github.com/abhijeetvilayate/New-Portfolio',
      liveUrl: 'https://new-portfolio-sigma-taupe.vercel.app/',
      imageSrc: newPortfolioImg,
      featuredTag: 'Vite & Modern CSS',
    },
  ];

  // Filter projects dynamically
  const filteredProjects = activeFilter === 'All Projects'
    ? projectsData
    : projectsData.filter((project) => project.category.includes(activeFilter));

  return (
    <div className="projects-page py-5 position-relative overflow-hidden">
      {/* Giant 3D Ghost Watermark */}
      <div className="projects-ghost-watermark" aria-hidden="true">
        CREATIONS
      </div>

      {/* Cybernetic PCB Circuit Board Network */}
      <CyberCircuitBackdrop />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        
        {/* PAGE HEADER */}
        <div className="text-center mb-4">
          <div className="modern-badge mb-3">
            <i className="bi bi-code-slash"></i>
            <span>Portfolio Showcase [ 3D Spatial Grid ]</span>
          </div>
          <h1 className="projects-main-title">
            Featured <span className="gradient-text-hero">Projects</span>
          </h1>
          <div className="projects-title-line mx-auto mb-3"></div>
          <p className="text-muted max-w-600 mx-auto small">
            A curated showcase of applications I have architected and deployed, featuring full stack systems,
            robust backend APIs, and modern responsive frontends.
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

        {/* PROJECTS GRID (WITH 3D TILT CARDS) */}
        <div className="row g-4 mb-5">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <TiltCard maxTilt={11} scale={1.02} className="h-100">
                <div className="modern-glass-card h-100 d-flex flex-column p-3">
                  
                  {/* Browser Window Webpage Preview (3D Middle Layer) */}
                  <a
                    href={project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="webpage-preview-wrapper tilt-layer-middle text-decoration-none d-block mb-3 rounded-4 overflow-hidden position-relative"
                    title={`Click to open ${project.title}`}
                  >
                  {/* Browser Address Bar Header */}
                  <div className="browser-mockup-header d-flex align-items-center justify-content-between px-3 py-2">
                    <div className="d-flex align-items-center gap-1">
                      <span className="dot bg-danger rounded-circle" style={{ width: '8px', height: '8px', display: 'inline-block' }}></span>
                      <span className="dot bg-warning rounded-circle" style={{ width: '8px', height: '8px', display: 'inline-block' }}></span>
                      <span className="dot bg-success rounded-circle" style={{ width: '8px', height: '8px', display: 'inline-block' }}></span>
                    </div>
                    <div className="browser-url-bar mx-2 px-2 py-0_5 rounded text-truncate text-center flex-grow-1" style={{ fontSize: '10.5px' }}>
                      <i className="bi bi-lock-fill text-success me-1"></i>
                      {project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : project.githubUrl}
                    </div>
                    <i className="bi bi-box-arrow-up-right text-muted" style={{ fontSize: '11px' }}></i>
                  </div>

                  {/* Webpage Screen Preview */}
                  <div className="webpage-image-container position-relative overflow-hidden" style={{ height: '180px' }}>
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="webpage-preview-img w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                    {/* Hover Redirect Overlay */}
                    <div className="webpage-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <span className="badge bg-modern-purple shadow px-3 py-2 rounded-pill d-flex align-items-center gap-2" style={{ fontSize: '12px' }}>
                        <i className="bi bi-box-arrow-up-right"></i> Open Live Preview
                      </span>
                    </div>
                  </div>
                </a>

                {/* Tag & Title */}
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="project-category-tag">{project.featuredTag}</span>
                  <span className="text-muted" style={{ fontSize: '11px' }}>ID #{project.id}</span>
                </div>

                <h6 className="fw-bold text-white mb-2 fs-6">{project.title}</h6>
                
                {project.technologies && (
                  <p className="small mb-3 text-purple fw-semibold" style={{ fontSize: '12px' }}>
                    <span className="text-muted fw-normal">Stack:</span> {project.technologies}
                  </p>
                )}

                {project.descriptionPoints && (
                  <ul className="project-points-list ps-3 mb-3 text-secondary small flex-grow-1" style={{ fontSize: '12px' }}>
                    {project.descriptionPoints.map((point, idx) => (
                      <li key={idx} className="mb-1">{point}</li>
                    ))}
                  </ul>
                )}

                {/* Card Footer Actions */}
                <div className="row g-2 mt-auto pt-2">
                  <div className="col-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn project-btn-outline w-100 d-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="bi bi-github"></i> Code
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn project-btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Demo
                    </a>
                  </div>
                </div>

                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* BOTTOM STATS BANNER */}
        <StatsBanner />

      </div>
    </div>
  );
};

export default Projects;
