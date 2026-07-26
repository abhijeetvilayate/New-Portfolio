
import './Skills.css';

export const Skills = () => {
  // Top Circular Skill Gauges (SVG Circles with SVG Dashoffset)
  const topSkills = [
    { name: 'HTML', percent: 95, color: '#e44d26', icon: 'bi-filetype-html' },
    { name: 'CSS', percent: 90, color: '#264de4', icon: 'bi-filetype-css' },
    { name: 'JavaScript', percent: 90, color: '#f7df1e', icon: 'bi-filetype-js' },
    { name: 'Bootstrap', percent: 85, color: '#7952b3', icon: 'bi-bootstrap-fill' },
    { name: 'React + Vite', percent: 90, color: '#00d8ff', icon: 'bi-atom' },
    { name: 'Node.js', percent: 85, color: '#68a063', icon: 'bi-node-plus-fill' },
    { name: 'Python', percent: 90, color: '#3776ab', icon: 'bi-filetype-py' },
  ];

  return (
    <div className="skills-page py-5">
      <div className="container">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-5">
          <h1 className="skills-main-title">My Skills</h1>
          <div className="skills-title-line mx-auto mb-3"></div>
          <p className="text-secondary max-w-600 mx-auto small">
            I have worked with a variety of technologies and tools in the web development
            ecosystem. Here are my technical skills and proficiency levels.
          </p>
        </div>

        {/* TOP CIRCULAR GAUGES BANNER */}
        <div className="skills-card p-4 mb-4">
        <div className="row g-3 justify-content-between text-center align-items-center">
            {topSkills.map((skill, index) => {
            const radius = 36;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.percent / 100) * circumference;

            return (
                <div key={index} className="col-6 col-sm-4 col-md-2 col-lg gauge-item">
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
                        }}
                    />
                    </svg>
                    <div className="gauge-content d-flex flex-column align-items-center justify-content-center">
                    <i className={`bi ${skill.icon} fs-5`} style={{ color: skill.color }}></i>
                    </div>
                </div>
                <h5 className="fw-bold mt-2 mb-0 fs-6">{skill.percent}%</h5>
                <small className="text-muted small">{skill.name}</small>
                </div>
            );
            })}
        </div>
        </div>
        {/* CATEGORY GRID CARDS */}
        <div className="row g-4">
          
          {/* Card 1: Frontend Development */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="skills-card p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="category-icon-wrapper text-primary">
                  <i className="bi bi-display"></i>
                </div>
                <h6 className="fw-bold mb-0 text-dark">Frontend Development</h6>
              </div>

              <div className="d-flex flex-column gap-3">
                <SkillBar icon="bi-filetype-html text-danger" name="HTML" percent={95} color="#e44d26" />
                <SkillBar icon="bi-filetype-css text-primary" name="CSS" percent={90} color="#264de4" />
                <SkillBar icon="bi-filetype-js text-warning" name="JavaScript" percent={90} color="#f7df1e" />
                <SkillBar icon="bi-bootstrap text-purple" name="Bootstrap" percent={85} color="#7952b3" />
                <SkillBar icon="bi-atom text-info" name="React + Vite" percent={90} color="#00d8ff" />
              </div>
            </div>
          </div>

          {/* Card 2: Backend Development  */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="skills-card p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="category-icon-wrapper text-purple">
                  <i className="bi bi-server"></i>
                </div>
                <h6 className="fw-bold mb-0 text-dark">Backend Development</h6>
              </div>

              <div className="d-flex flex-column gap-3">
                <SkillBar icon="bi-node-plus text-success" name="Node.js" percent={85} color="#68a063" />
                <SkillBar icon="bi-diagram-3 text-purple" name="RESTful APIs" percent={90} color="#7952b3" />
                <SkillBar icon="bi-cup-hot text-danger" name="Java" percent={85} color="#e44d26" />
                <SkillBar icon="bi-cpu text-primary" name="JDBC" percent={80} color="#4f46e5" />
              </div>
            </div>
          </div>

          {/* Card 3: Programming & ML */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="skills-card p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="category-icon-wrapper text-purple">
                  <i className="bi bi-brain"></i>
                </div>
                <h6 className="fw-bold mb-0 text-dark">Programming & ML</h6>
              </div>

              <div className="d-flex flex-column gap-3">
                <SkillBar icon="bi-filetype-py text-primary" name="Python" percent={90} color="#3776ab" />
                <SkillBar icon="bi-cpu text-purple" name="Machine Learning" percent={80} color="#8b5cf6" />
                <SkillBar icon="bi-bar-chart text-dark" name="Pandas" percent={85} color="#1e1e2f" />
                <SkillBar icon="bi-grid-3x3 text-info" name="NumPy" percent={85} color="#0284c7" />
              </div>
            </div>
          </div>

          {/* Card 4: Database & Cloud */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="skills-card p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="category-icon-wrapper text-primary">
                  <i className="bi bi-cloud"></i>
                </div>
                <h6 className="fw-bold mb-0 text-dark">Database & Cloud</h6>
              </div>

              <div className="d-flex flex-column gap-3">
                <SkillBar icon="bi-database-fill-check text-success" name="MongoDB" percent={85} color="#10b981" />
                <SkillBar icon="bi-database text-danger" name="SQL" percent={90} color="#ef4444" />
                <SkillBar icon="bi-database-gear text-primary" name="MySQL" percent={85} color="#2563eb" />
              </div>
            </div>
          </div>

          {/* Card 5: Tools & Platforms */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="skills-card p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="category-icon-wrapper text-purple">
                  <i className="bi bi-tools"></i>
                </div>
                <h6 className="fw-bold mb-0 text-dark">Tools & Platforms</h6>
              </div>

              <div className="d-flex flex-column gap-3">
                <SkillBar icon="bi-git text-dark" name="Git & GitHub" percent={90} color="#181717" />
                <SkillBar icon="bi-code-square text-primary" name="VS Code" percent={90} color="#007acc" />
                <SkillBar icon="bi-send text-danger" name="Postman" percent={85} color="#ff6c37" />
                <SkillBar icon="bi-triangle-fill text-dark" name="Vercel" percent={80} color="#000000" />
              </div>
            </div>
          </div>

          {/* Card 6: Other Skills */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="skills-card p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="category-icon-wrapper text-primary">
                  <i className="bi bi-star"></i>
                </div>
                <h6 className="fw-bold mb-0 text-dark">Other Skills</h6>
              </div>

              <div className="d-flex flex-column gap-3">
                <SkillBar icon="bi-code-slash text-purple" name="DSA (Java/Python)" percent={80} color="#8b5cf6" />
                <SkillBar icon="bi-box text-purple" name="OOPs Concepts" percent={90} color="#7c3aed" />
                <SkillBar icon="bi-lightbulb text-warning" name="Problem Solving" percent={85} color="#f59e0b" />
                <SkillBar icon="bi-arrow-repeat text-success" name="Agile / SDLC" percent={80} color="#10b981" />
              </div>
            </div>
          </div>

          {/* Card 7: Soft Skills */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="skills-card p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="category-icon-wrapper text-purple">
                  <i className="bi bi-people"></i>
                </div>
                <h6 className="fw-bold mb-0 text-dark">Soft Skills</h6>
              </div>

              <div className="d-flex flex-column gap-3">
                <SkillBar name="Communication" percent={90} color="#8b5cf6" />
                <SkillBar name="Teamwork" percent={90} color="#3b82f6" />
                <SkillBar name="Adaptability" percent={85} color="#10b981" />
                <SkillBar name="Time Management" percent={90} color="#f97316" />
              </div>
            </div>
          </div>

          {/* Card 8: Learning & Growth */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="skills-card p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="category-icon-wrapper text-primary">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <h6 className="fw-bold mb-0 text-dark">Learning & Growth</h6>
              </div>

              <div className="d-flex flex-column gap-3">
                <SkillBar name="Quick Learner" percent={95} color="#8b5cf6" />
                <SkillBar name="Self Motivated" percent={90} color="#3b82f6" />
                <SkillBar name="Continuous Learner" percent={95} color="#10b981" />
                <SkillBar name="Research Oriented" percent={85} color="#ef4444" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

// Sub-component for rendering individual progress bars
const SkillBar = ({ icon, name, percent, color }) => {
  return (
    <div className="skill-item">
      <div className="d-flex justify-content-between align-items-center mb-1">
        <div className="d-flex align-items-center gap-2">
          {icon && <i className={`bi ${icon} fs-6`}></i>}
          <span className="small text-dark fw-medium" style={{ fontSize: '13px' }}>{name}</span>
        </div>
        <span className="small text-muted" style={{ fontSize: '12px' }}>{percent}%</span>
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