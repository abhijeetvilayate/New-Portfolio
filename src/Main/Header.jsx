import { Link, useLocation } from "react-router-dom";
import ResumePDF from "../assets/Abhijeet_Vilayate_Resume.pdf";
import avLogo from "../assets/av-logo.png";
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
        {/* Logo & Brand */}
        <Link className="navbar-brand d-flex align-items-center text-decoration-none" to="/">
          <div className="navbar-logo-wrapper">
            <img src={avLogo} alt="AV Logo" className="navbar-logo-img" />
          </div>
          <div className="ms-2 ps-1">
            <h5 className="mb-0 fw-bold brand-name">
              Abhijeet <span className="brand-highlight">Vilayate</span>
            </h5>
            <small className="brand-subtitle d-flex align-items-center gap-1">
              <span className="pulsing-dot-tiny"></span> Full Stack Developer
            </small>
          </div>
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2 text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto modern-nav-list my-3 my-lg-0">
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

          {/* Right Side CTA */}
          <div className="d-flex align-items-center justify-content-center gap-3 mt-3 mt-lg-0">
            <a
              href={ResumePDF}
              download="Abhijeet_Vilayate_Resume.pdf"
              className="btn resume-btn text-decoration-none d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-file-earmark-arrow-down-fill"></i>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;