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
      title: 'Employee Management System – JDBC Web Project',
      category: ['Java / JDBC', 'Web Development', 'Full Stack'],
      technologies: 'JSP, JDBC, HTML, Oracle SQL',
      descriptionPoints: [
        'Developed login-based employee management system',
        'Implemented authentication and database integration',
        'Added employee data insertion and search functionality',
        'Used primary–foreign key relationships and session handling',
      ],
      githubUrl: 'https://github.com',
      liveUrl: '#',
      imageSrc: emsManagementImg,
    },
    {
      id: 2,
      title: 'Netflix Home Page using HTML and CSS',
      category: ['Frontend', 'Web Development'],
      technologies: 'HTML5, CSS3, Responsive Design',
      description: 'Responsive Netflix home page clone built using HTML and CSS.',
      githubUrl: 'https://github.com/abhijeetvilayate/NETFLIX-CLONE',
      liveUrl: 'https://abhijeetvilayate.github.io/NETFLIX-CLONE/',
      imageSrc: netflixCloneImg,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: ['Frontend', 'Web Development'],
      technologies: 'React, Bootstrap, JavaScript, CSS3',
      description: 'Modern, interactive developer portfolio built with React and Bootstrap.',
      githubUrl: 'https://github.com',
      liveUrl: '#',
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
                
                {/* Preview Image Wrapper */}
                <div className="project-preview-wrapper mb-3 rounded-3 overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

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
