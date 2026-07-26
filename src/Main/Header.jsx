import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-navbar py-3">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center text-decoration-none" to="/">
          <div className="logo-circle">AV</div>
          <div className="ms-2">
            <h5 className="mb-0 fw-bold">Abhijeet Vilayate</h5>
            <small className="text-muted">Full Stack Developer</small>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link
                  to={item.path}
                  className={`nav-link nav-btn ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center justify-content-center gap-3 mt-3 mt-lg-0">
            <a
              href="/resume.pdf"
              download="Abhijeet_Vilayate_Resume.pdf"
              className="btn resume-btn text-decoration-none"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;