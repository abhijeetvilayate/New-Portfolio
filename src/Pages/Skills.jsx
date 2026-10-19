import React from 'react';
import './Skills.css';
import reactLogo from '../assets/react.svg';
import TiltCard from '../Components/TiltCard';
import CyberCircuitBackdrop from '../Components/CyberCircuitBackdrop';

export const Skills = () => {
  // Top Circular Skill Gauges (Directly matching resume core highlights)
  const topSkills = [
    { name: 'Java', percent: 95, color: '#f59e0b', icon: 'bi-cup-hot-fill' },
    { name: 'Spring Boot', percent: 90, color: '#10b981', icon: 'bi-cpu-fill' },
    { name: 'React.js', percent: 90, color: '#38bdf8', svg: reactLogo },
    { name: 'REST APIs', percent: 92, color: '#c084fc', icon: 'bi-diagram-3-fill' },
    { name: 'MongoDB', percent: 88, color: '#10b981', icon: 'bi-database-fill-check' },
    { name: 'JavaScript', percent: 90, color: '#facc15', icon: 'bi-filetype-js' },
  ];

  return (
    <div className="skills-page py-5 position-relative overflow-hidden">
      {/* Giant 3D Ghost Watermark */}
      <div className="skills-ghost-watermark" aria-hidden="true">
        EXPERTISE
      </div>

      {/* Cybernetic PCB Circuit Board Network */}
      <CyberCircuitBackdrop />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        
        {/* PAGE HEADER */}
        <div className="text-center mb-4">
          <div className="modern-badge mb-3">
            <i className="bi bi-file-earmark-person-fill"></i>
            <span>Resume Competencies [ 3D Spatial Deck ]</span>
          </div>
          <h1 className="skills-main-title">
            Technical <span className="gradient-text-hero">Skills</span>
          </h1>
          <div className="skills-title-line mx-auto mb-3"></div>
          <p className="text-muted max-w-600 mx-auto small">
            Hands-on technical competencies strictly aligned with my professional resume, production projects,
            and engineering coursework.
          </p>
        </div>

        {/* TOP CIRCULAR GAUGES BANNER (6 SYMMETRIC ITEMS IN 3D TILT CARD) */}
        <TiltCard maxTilt={5} scale={1.01} className="mb-4">
          <div className="modern-glass-card p-4">
            <div className="row g-3 justify-content-center text-center align-items-center">
            {topSkills.map((skill, index) => {
              const radius = 34;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.percent / 100) * circumference;

              return (
                <div key={index} className="col-6 col-sm-4 col-md-2 gauge-item">
                  <div className="gauge-container mx-auto position-relative">
                    <svg className="gauge-svg" viewBox="0 0 90 90">
                      <circle
                        className="gauge-bg"
                        cx="45"
                        cy="45"
                        r={radius}
                      />
                      <circle
                        className="gauge-progress"
                        cx="45"
                        cy="45"
                        r={radius}
                        style={{
                          stroke: skill.color,
                          strokeDasharray: circumference,
                          strokeDashoffset: strokeDashoffset,
                          color: skill.color,
                        }}
                      />
                    </svg>
                    <div className="gauge-content d-flex flex-column align-items-center justify-content-center">
                      {skill.svg ? (
                        <img src={skill.svg} alt={skill.name} style={{ width: '24px', height: '24px' }} />
                      ) : (
                        <i className={`bi ${skill.icon} fs-5`} style={{ color: skill.color }}></i>
                      )}
                    </div>
                  </div>
                  <h5 className="fw-bold mt-2 mb-0 text-white fs-6 gauge-percent">{skill.percent}%</h5>
                  <small className="text-muted small gauge-label">{skill.name}</small>
                </div>
              );
            })}
          </div>
        </div>
      </TiltCard>

        {/* CERTIFICATION SPOTLIGHT BANNER (IN 3D TILT CARD) */}
        <TiltCard maxTilt={5} scale={1.01} className="mb-5">
          <div className="certification-card modern-glass-card p-4 position-relative overflow-hidden">
            <div className="cert-backdrop-glow"></div>
            <div className="row align-items-center gy-3 position-relative" style={{ zIndex: 2 }}>
              <div className="col-12 col-md-auto text-center text-md-start">
                <div className="cert-badge-icon mx-auto mx-md-0">
                  <i className="bi bi-award-fill"></i>
                </div>
              </div>
              <div className="col-12 col-md text-center text-md-start">
                <span className="badge cert-pill mb-1">
                  <i className="bi bi-patch-check-fill text-warning me-1"></i> Verified Certification
                </span>
                <h5 className="fw-bold text-white mb-1">
                  Full Stack Development in Artificial Intelligence and Machine Learning
                </h5>
                <p className="text-muted small mb-0">
                  Issued by <strong className="text-white">Seed Infotech Ltd</strong> &bull; Hands-on training in AI APIs, automation, and AI-assisted development.
                </p>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* 7 CATEGORY CARDS (STRICT 1-TO-1 MATCH TO RESUME WITH 3D TILT) */}
        <div className="row g-4">
          
          {/* Card 1: Programming Languages */}
          <div className="col-12 col-md-6 col-lg-4">
            <TiltCard maxTilt={9} scale={1.01} className="h-100">
              <div className="modern-glass-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="category-icon-wrapper bg-amber-glow">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-white">Programming Languages</h6>
                    <small className="text-muted" style={{ fontSize: '11px' }}>Core Languages</small>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3">
                  <SkillBar icon="bi-cup-hot text-amber" name="Java" percent={95} color="#f59e0b" />
                  <SkillBar icon="bi-filetype-js text-warning" name="JavaScript" percent={90} color="#facc15" />
                  <SkillBar icon="bi-filetype-html text-danger" name="HTML5" percent={95} color="#f87171" />
                  <SkillBar icon="bi-filetype-css text-primary" name="CSS3" percent={92} color="#818cf8" />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 2: Backend Development */}
          <div className="col-12 col-md-6 col-lg-4">
            <TiltCard maxTilt={9} scale={1.01} className="h-100">
              <div className="modern-glass-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="category-icon-wrapper bg-amber-glow">
                    <i className="bi bi-server"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-white">Backend Development</h6>
                    <small className="text-muted" style={{ fontSize: '11px' }}>Server &amp; Services</small>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3">
                  <SkillBar icon="bi-cup-hot text-amber" name="Java" percent={95} color="#f59e0b" />
                  <SkillBar icon="bi-cpu text-success" name="Spring Boot" percent={90} color="#10b981" />
                  <SkillBar icon="bi-diagram-3 text-purple" name="REST APIs" percent={92} color="#c084fc" />
                  <SkillBar icon="bi-cloud-check text-info" name="RESTful Web Services" percent={90} color="#38bdf8" />
                  <SkillBar icon="bi-arrow-repeat text-success" name="CRUD Operations" percent={94} color="#10b981" />
                  <SkillBar icon="bi-layers text-primary" name="Backend Development" percent={90} color="#60a5fa" />
                  <SkillBar icon="bi-box-seam text-amber" name="Object-Oriented Programming" percent={92} color="#f59e0b" />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 3: Frontend Development */}
          <div className="col-12 col-md-6 col-lg-4">
            <TiltCard maxTilt={9} scale={1.01} className="h-100">
              <div className="modern-glass-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="category-icon-wrapper bg-purple-glow">
                    <i className="bi bi-display"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-white">Frontend Development</h6>
                    <small className="text-muted" style={{ fontSize: '11px' }}>Web UI &amp; Interfaces</small>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3">
                  <SkillBar svg={reactLogo} name="React.js" percent={90} color="#38bdf8" />
                  <SkillBar icon="bi-filetype-js text-warning" name="JavaScript" percent={90} color="#facc15" />
                  <SkillBar icon="bi-filetype-html text-danger" name="HTML5" percent={95} color="#f87171" />
                  <SkillBar icon="bi-filetype-css text-primary" name="CSS3" percent={92} color="#818cf8" />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 4: Databases */}
          <div className="col-12 col-md-6 col-lg-4">
            <TiltCard maxTilt={9} scale={1.01} className="h-100">
              <div className="modern-glass-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="category-icon-wrapper bg-amber-glow">
                    <i className="bi bi-database"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-white">Databases</h6>
                    <small className="text-muted" style={{ fontSize: '11px' }}>Persistence &amp; Storage</small>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3">
                  <SkillBar icon="bi-database-fill-check text-success" name="MongoDB" percent={88} color="#10b981" />
                  <SkillBar icon="bi-database text-purple" name="Database Management" percent={90} color="#c084fc" />
                  <SkillBar icon="bi-bezier2 text-amber" name="Data Modeling" percent={88} color="#f59e0b" />
                  <SkillBar icon="bi-hdd-network text-info" name="CRUD Operations" percent={92} color="#38bdf8" />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 5: Software Engineering */}
          <div className="col-12 col-md-6 col-lg-4">
            <TiltCard maxTilt={9} scale={1.01} className="h-100">
              <div className="modern-glass-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="category-icon-wrapper bg-purple-glow">
                    <i className="bi bi-diagram-2"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-white">Software Engineering</h6>
                    <small className="text-muted" style={{ fontSize: '11px' }}>Practices &amp; Quality</small>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3">
                  <SkillBar icon="bi-layers text-purple" name="MVC Architecture" percent={92} color="#c084fc" />
                  <SkillBar icon="bi-bug text-danger" name="Debugging" percent={90} color="#f87171" />
                  <SkillBar icon="bi-shield-exclamation text-amber" name="Exception Handling" percent={92} color="#f59e0b" />
                  <SkillBar icon="bi-send-check text-info" name="API Testing" percent={90} color="#38bdf8" />
                  <SkillBar icon="bi-lightbulb text-warning" name="Problem Solving" percent={92} color="#facc15" />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 6: Development Tools */}
          <div className="col-12 col-md-6 col-lg-4">
            <TiltCard maxTilt={9} scale={1.01} className="h-100">
              <div className="modern-glass-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="category-icon-wrapper bg-purple-glow">
                    <i className="bi bi-tools"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-white">Development Tools</h6>
                    <small className="text-muted" style={{ fontSize: '11px' }}>Version Control &amp; IDEs</small>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3">
                  <SkillBar icon="bi-git text-danger" name="Git" percent={92} color="#f87171" />
                  <SkillBar icon="bi-github text-white" name="GitHub" percent={92} color="#ffffff" />
                  <SkillBar icon="bi-code-square text-info" name="VS Code" percent={95} color="#38bdf8" />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 7: Currently Learning (Full Width Card) */}
          <div className="col-12">
            <TiltCard maxTilt={6} scale={1.01}>
              <div className="modern-glass-card p-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="category-icon-wrapper bg-purple-glow">
                    <i className="bi bi-rocket-takeoff"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-white">Currently Learning</h6>
                    <small className="text-muted" style={{ fontSize: '11px' }}>Skills Under Active Expansion</small>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6 col-lg-3">
                    <SkillBar icon="bi-database text-primary" name="PostgreSQL" percent={85} color="#60a5fa" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <SkillBar icon="bi-database-gear text-info" name="MySQL" percent={85} color="#38bdf8" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <SkillBar icon="bi-box-arrow-up-right text-info" name="Docker" percent={80} color="#38bdf8" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <SkillBar icon="bi-cloud text-amber" name="Cloud Platforms" percent={78} color="#f59e0b" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <SkillBar icon="bi-arrow-left-right text-success" name="CI/CD" percent={80} color="#10b981" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <SkillBar icon="bi-hdd-stack text-purple" name="Distributed Systems" percent={75} color="#c084fc" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <SkillBar icon="bi-lightning-charge text-amber" name="AI APIs" percent={85} color="#f59e0b" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <SkillBar icon="bi-stars text-purple" name="AI-assisted Development" percent={88} color="#c084fc" />
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

// Sub-component for rendering individual progress bars
const SkillBar = ({ icon, svg, name, percent, color }) => {
  return (
    <div className="skill-item" style={{ '--skill-color': color }}>
      <div className="d-flex justify-content-between align-items-center mb-1">
        <div className="d-flex align-items-center gap-2">
          {svg ? (
            <img src={svg} alt={name} style={{ width: '16px', height: '16px' }} />
          ) : icon ? (
            <i className={`bi ${icon} fs-6`}></i>
          ) : null}
          <span className="skill-name fw-medium" style={{ fontSize: '13px' }}>{name}</span>
        </div>
        <span className="skill-percent fw-semibold" style={{ fontSize: '12px' }}>{percent}%</span>
      </div>
      <div className="progress skill-progress-bg">
        <div
          className="progress-bar rounded-pill"
          style={{ width: `${percent}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;