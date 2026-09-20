import "./Footer.css";
import avLogo from "./assets/av-logo.png";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsTwitterX,
  BsEnvelopeFill,
  BsArrowUpCircleFill
} from "react-icons/bs";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-card">

          <div className="row gy-5">

            {/* Left */}

            <div className="col-lg-4">

              <img src={avLogo} alt="AV Logo" className="footer-logo-img mb-2" />

              <h4>Abhijeet Vilayate</h4>

              <p>
                Full Stack Developer passionate about building modern,
                responsive web applications with React, Spring Boot and Java.
              </p>

            </div>

            {/* Quick Links */}

            <div className="col-lg-4">

              <h5>Quick Links</h5>

              <ul className="footer-links">

                <li><a href="#home">Home</a></li>

                <li><a href="#about">About</a></li>

                <li><a href="#skills">Skills</a></li>

                <li><a href="#projects">Projects</a></li>

                <li><a href="#experience">Experience</a></li>

                <li><a href="#contact">Contact</a></li>

              </ul>

            </div>

            {/* Contact */}

            <div className="col-lg-4">

              <h5>Let's Connect</h5>

              <p>

                <BsEnvelopeFill className="me-2" />

                abhijeet@example.com

              </p>

              <div className="social-icons">

                <a href="#"><BsGithub /></a>

                <a href="#"><BsLinkedin /></a>

                <a href="#"><BsInstagram /></a>

                <a href="#"><BsTwitterX /></a>

              </div>

            </div>

          </div>

          <hr />

          <div className="footer-bottom">

            <p>
              © {year} Abhijeet Vilayate. All Rights Reserved.
            </p>

            <a href="#home" className="top-btn">
              <BsArrowUpCircleFill />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}