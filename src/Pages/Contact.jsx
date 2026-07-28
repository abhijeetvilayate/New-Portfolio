import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';
import ResumePDF from "../assets/Abhijeet_Vilayate_Resume.pdf";

export const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these 3 placeholders with your actual keys from EmailJS:
    const SERVICE_ID = 'service_gxqg5sa';
    const TEMPLATE_ID = 'template_mbm3nii';
    const PUBLIC_KEY = 'k_x1UkeUetZ0_BTg2';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          alert('Message sent successfully to vilayateabhijeet10@gmail.com!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          alert('Failed to send message. Please try again or email directly.');
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="container py-5">
        
        {/* HERO SECTION */}
        <div className="row align-items-center gy-5 mb-5">
          <div className="col-12 col-lg-6">
            <span className="contact-badge mb-3">Contact Me</span>
            <h1 className="contact-hero-title mb-3">
              Let's Build <br />
              <span className="text-purple">Something Amazing</span>
            </h1>
            <p className="contact-hero-description text-secondary mb-4">
              I'm always interested in discussing new opportunities, freelance projects,
              internships and collaborations.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#contact-form" className="btn btn-purple d-inline-flex align-items-center gap-2">
                Hire Me <i className="bi bi-arrow-right"></i>
              </a>
              <a
                href={ResumePDF}
                download="Abhijeet_Vilayate_Resume.pdf"
                className="btn btn-outline-purple d-inline-flex align-items-center gap-2 text-decoration-none"
              >
                Download Resume <i className="bi bi-download"></i>
              </a>
            </div>
          </div>

          {/* RIGHT HERO GRAPHIC */}
          <div className="col-12 col-lg-6 text-center">
            <div className="contact-hero-graphic p-4 position-relative mx-auto">
              <div className="graphic-bg-blob"></div>
              <div className="graphic-card shadow-lg p-4 rounded-4 bg-white mx-auto position-relative" style={{ maxWidth: '380px' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon-circle bg-purple-light text-purple">
                    <i className="bi bi-envelope-open-fill fs-4"></i>
                  </div>
                  <div className="text-start">
                    <strong className="d-block text-dark">Send Message</strong>
                    <small className="text-muted">Direct Outreach</small>
                  </div>
                </div>
                <div className="p-3 bg-light rounded-3 text-start small text-secondary">
                  <p className="mb-1"><strong>To:</strong> Abhijeet Vilayate</p>
                  <p className="mb-0"><strong>Status:</strong> Open for opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FORM & CONTACT INFO SECTION */}
        <div className="row g-4 mb-5" id="contact-form">
          
          {/* LEFT: Contact Information Card */}
          <div className="col-12 col-lg-4">
            <div className="contact-info-card h-100 p-4 rounded-4 bg-white border shadow-sm">
              <h5 className="fw-bold text-dark mb-1">Contact Information</h5>
              <div className="contact-title-line mb-4"></div>

              <div className="d-flex flex-column gap-3 mb-4">
                {/* Email */}
                <div className="info-box-item p-3 rounded-3 d-flex align-items-center gap-3">
                  <div className="info-box-icon text-purple">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="overflow-hidden">
                    <small className="text-muted d-block">Email</small>
                    <a href="mailto:vilayateabhijeet1073@gmail.com" className="text-decoration-none text-dark fw-semibold small text-truncate d-block">
                      vilayateabhijeet1073@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="info-box-item p-3 rounded-3 d-flex align-items-center gap-3">
                  <div className="info-box-icon text-purple">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Phone</small>
                    <a href="tel:7350882557" className="text-decoration-none text-dark fw-semibold small">
                      +91 7350882557
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="info-box-item p-3 rounded-3 d-flex align-items-center gap-3">
                  <div className="info-box-icon text-purple">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Location</small>
                    <strong className="text-dark small">Pune, Maharashtra, India</strong>
                  </div>
                </div>

                {/* Availability */}
                <div className="info-box-item p-3 rounded-3 d-flex align-items-center gap-3">
                  <div className="info-box-icon text-purple">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Availability</small>
                    <strong className="text-dark small">Open for Freelance Projects</strong>
                  </div>
                </div>
              </div>

              {/* Follow Me Social Links */}
              <div>
                <p className="small text-muted fw-semibold mb-2">Follow Me</p>
                <div className="d-flex gap-2">
                  <a href="https://github.com/abhijeetvilayate" target="_blank" rel="noreferrer" className="contact-social-btn">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/abhijeet-vilayate-7abb50290/" target="_blank" rel="noreferrer" className="contact-social-btn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="mailto:vilayateabhijeet1073@gmail.com" className="contact-social-btn">
                    <i className="bi bi-envelope-fill"></i>
                  </a>
                  <a href="https://www.instagram.com/travel_abhijeet_26/" target="_blank" rel="noreferrer" className="contact-social-btn">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://x.com/AbhijeetVilaya2" target="_blank" rel="noreferrer" className="contact-social-btn">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Send Me a Message Form */}
          <div className="col-12 col-lg-8">
            <div className="contact-form-card p-4 rounded-4 bg-white border shadow-sm">
              <h5 className="fw-bold text-dark mb-1">Send Me a Message</h5>
              <div className="contact-title-line mb-4"></div>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-semibold text-secondary">Your Name</label>
                    <input
                      type="text"
                      name="from_name"
                      className="form-control custom-input"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => {
                        handleChange(e);
                        setFormData((prev) => ({ ...prev, name: e.target.value }));
                      }}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-semibold text-secondary">Your Email</label>
                    <input
                      type="email"
                      name="from_email"
                      className="form-control custom-input"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => {
                        handleChange(e);
                        setFormData((prev) => ({ ...prev, email: e.target.value }));
                      }}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-semibold text-secondary">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control custom-input"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-semibold text-secondary">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      className="form-control custom-input"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-purple w-100 py-2.5 d-flex align-items-center justify-content-center gap-2"
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <i className="bi bi-send"></i>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* WHY WORK WITH ME? CARDS */}
        <div className="text-center my-5">
          <h3 className="fw-bold text-dark mb-1">Why Work With Me?</h3>
          <div className="contact-title-line mx-auto mb-4"></div>

          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="why-card p-4 rounded-4 bg-white border text-center h-100">
                <div className="why-icon-box mx-auto mb-3 text-purple">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <h6 className="fw-bold text-dark mb-2">Quick Response</h6>
                <p className="text-secondary small mb-0">I usually reply within 24 hours.</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="why-card p-4 rounded-4 bg-white border text-center h-100">
                <div className="why-icon-box mx-auto mb-3 text-purple">
                  <i className="bi bi-code-square"></i>
                </div>
                <h6 className="fw-bold text-dark mb-2">Full Stack Development</h6>
                <p className="text-secondary small mb-0">I build complete solutions with modern technologies for frontend & backend.</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="why-card p-4 rounded-4 bg-white border text-center h-100">
                <div className="why-icon-box mx-auto mb-3 text-purple">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <h6 className="fw-bold text-dark mb-2">Modern Technologies</h6>
                <p className="text-secondary small mb-0">I use latest tools and technologies to build scalable and efficient applications.</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="why-card p-4 rounded-4 bg-white border text-center h-100">
                <div className="why-icon-box mx-auto mb-3 text-purple">
                  <i className="bi bi-people"></i>
                </div>
                <h6 className="fw-bold text-dark mb-2">Collaborative Approach</h6>
                <p className="text-secondary small mb-0">I believe in clear communication and delivering quality work on time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA CALLOUT BANNER */}
        <div className="cta-banner p-4 p-md-5 rounded-4 mb-5 text-white">
          <div className="row align-items-center gy-3">
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <h4 className="fw-bold mb-2">Interested in working together?</h4>
              <p className="mb-0 text-light-purple small">Let's discuss your project idea and turn it into a real world solution.</p>
            </div>
            <div className="col-12 col-lg-5 d-flex flex-wrap justify-content-center justify-content-lg-end gap-3">
              <a 
                href="#contact-form" 
                className="btn btn-white text-purple fw-semibold px-4 rounded-3 text-decoration-none"
              >
                Hire Me <i className="bi bi-arrow-right"></i>
              </a>
              <a href="/resume.pdf" download="Abhijeet_Vilayate_Resume.pdf" className="btn btn-outline-white text-white border-white fw-semibold px-4 rounded-3 text-decoration-none">
                Download Resume <i className="bi bi-download"></i>
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="contact-footer pt-4 border-top">
          <div className="row g-4 mb-4">
            <div className="col-12 col-md-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="logo-circle">AV</div>
                <div>
                  <h6 className="mb-0 fw-bold text-dark">Abhijeet Vilayate</h6>
                  <small className="text-muted">Full Stack Developer</small>
                </div>
              </div>
              <p className="text-secondary small mt-2">
                Building scalable, responsive and user-friendly web applications with modern technologies.
              </p>
            </div>

            <div className="col-6 col-md-2">
              <h6 className="fw-bold text-dark mb-3">Quick Links</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small">
                <li><Link to="/" className="text-secondary text-decoration-none">Home</Link></li>
                <li><Link to="/about" className="text-secondary text-decoration-none">About</Link></li>
                <li><Link to="/skills" className="text-secondary text-decoration-none">Skills</Link></li>
                <li><Link to="/projects" className="text-secondary text-decoration-none">Projects</Link></li>
                <li><Link to="/contact" className="text-secondary text-decoration-none">Contact</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h6 className="fw-bold text-dark mb-3">Follow Me</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small">
                <li><a href="https://github.com/abhijeetvilayate" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none"><i className="bi bi-github me-2"></i>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/abhijeet-vilayate-7abb50290/" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none"><i className="bi bi-linkedin me-2"></i>LinkedIn</a></li>
                <li><a href="mailto:vilayateabhijeet1073@gmail.com" className="text-secondary text-decoration-none"><i className="bi bi-envelope me-2"></i>Email</a></li>
                <li><a href="https://www.instagram.com/travel_abhijeet_26/" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none"><i className="bi bi-instagram me-2"></i>Instagram</a></li>
                <li><a href="https://x.com/AbhijeetVilaya2" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none"><i className="bi bi-twitter-x me-2"></i>Twitter</a></li>
              </ul>
            </div>

            <div className="col-12 col-md-3">
              <h6 className="fw-bold text-dark mb-3">Let's Connect</h6>
              <p className="text-secondary small mb-3">
                Feel free to reach out to me for any opportunities or collaborations.
              </p>
              <small className="text-muted d-block">&copy; 2026 Abhijeet Vilayate.<br />All rights reserved.</small>
            </div>
          </div>

          <div className="bottom-note-strip p-2.5 rounded-3 bg-dark text-white text-center small mb-2">
            <i className="bi bi-heart-fill text-purple me-2"></i>
            Thanks for visiting my portfolio! Let's build something amazing together.
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Contact;