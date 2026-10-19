import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import ResumePDF from "../assets/Abhijeet_Vilayate_Resume.pdf";
import TiltCard from '../Components/TiltCard';
import CyberCircuitBackdrop from '../Components/CyberCircuitBackdrop';

export const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('vilayateabhijeet1073@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = 'service_gxqg5sa';
    const TEMPLATE_ID = 'template_mbm3nii';
    const PUBLIC_KEY = 'k_x1UkeUetZ0_BTg2';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          alert('Thank you! Your message was sent successfully to Abhijeet.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          alert('Failed to send message. Please try emailing directly at vilayateabhijeet1073@gmail.com.');
        }
      );
  };

  return (
    <div className="contact-page py-5 position-relative overflow-hidden">
      {/* Giant 3D Ghost Watermark */}
      <div className="contact-ghost-watermark" aria-hidden="true">
        CONNECT
      </div>

      {/* Cybernetic PCB Circuit Board Network */}
      <CyberCircuitBackdrop />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        
        {/* HERO SECTION */}
        <div className="row align-items-center gy-5 mb-5">
          <div className="col-12 col-lg-6">
            <div className="modern-badge mb-3">
              <i className="bi bi-chat-dots-fill"></i>
              <span>Get In Touch</span>
            </div>

            <h1 className="contact-hero-title mb-3">
              Let's Build <br />
              <span className="gradient-text-hero">Something Remarkable</span>
            </h1>

            <p className="contact-hero-description text-secondary mb-4">
              I am actively seeking software engineering roles, full-stack development opportunities,
              and innovative freelance collaborations. Have an idea or position in mind? Let's talk!
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#contact-form" className="btn-modern-primary text-decoration-none">
                <span>Send Message</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <a
                href={ResumePDF}
                download="Abhijeet_Vilayate_Resume.pdf"
                className="btn-modern-outline text-decoration-none"
              >
                <span>Download CV</span>
                <i className="bi bi-file-earmark-arrow-down-fill"></i>
              </a>
            </div>
          </div>

          {/* RIGHT HERO GRAPHIC CARD */}
          <div className="col-12 col-lg-6 text-center">
            <div className="contact-hero-graphic p-4 position-relative mx-auto">
              <div className="graphic-aura-lilac"></div>
              <div className="graphic-aura-amber"></div>

              <div className="modern-glass-card p-4 mx-auto text-start position-relative" style={{ maxWidth: '400px' }}>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="contact-icon-box bg-purple-glow">
                    <i className="bi bi-send-check-fill fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold text-white mb-0">Direct Outreach</h5>
                    <small className="contact-subtext">Always Open for Discussions</small>
                  </div>
                </div>

                <div className="p-3 rounded-3 contact-status-panel mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="status-label">Target Recipient</span>
                    <strong className="text-white small">Abhijeet Vilayate</strong>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="status-label">Current Status</span>
                    <span className="status-badge-hire">
                      <span className="pulsing-dot-tiny me-1"></span> Available for Hire
                    </span>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  type="button"
                  className="btn btn-copy-email w-100 d-flex align-items-center justify-content-center gap-2 py-2"
                >
                  <i className={`bi ${copied ? 'bi-check-lg text-success' : 'bi-clipboard'}`}></i>
                  <span>{copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FORM & CONTACT INFO SECTION */}
        <div className="row g-4 mb-5" id="contact-form">
          
          {/* LEFT: Contact Information Card */}
          <div className="col-12 col-lg-4">
            <div className="modern-glass-card h-100 p-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-person-lines-fill text-purple fs-5"></i>
                <h5 className="fw-bold text-white mb-0">Direct Contact</h5>
              </div>
              <div className="contact-title-line mb-4"></div>

              <div className="d-flex flex-column gap-3 mb-4">
                {/* Email */}
                <div className="contact-info-tile p-3 rounded-4 d-flex align-items-center gap-3">
                  <div className="info-box-icon text-purple">
                    <i className="bi bi-envelope-at-fill"></i>
                  </div>
                  <div className="overflow-hidden">
                    <small className="text-muted d-block">Email</small>
                    <a href="mailto:vilayateabhijeet1073@gmail.com" className="text-decoration-none text-white fw-semibold small text-truncate d-block">
                      vilayateabhijeet1073@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-tile p-3 rounded-4 d-flex align-items-center gap-3">
                  <div className="info-box-icon text-amber">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Phone / WhatsApp</small>
                    <a href="tel:7350882557" className="text-decoration-none text-white fw-semibold small">
                      +91 7350882557
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-info-tile p-3 rounded-4 d-flex align-items-center gap-3">
                  <div className="info-box-icon text-info">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Location</small>
                    <strong className="text-white small">Pune, Maharashtra, India</strong>
                  </div>
                </div>

                {/* Availability */}
                <div className="contact-info-tile p-3 rounded-4 d-flex align-items-center gap-3">
                  <div className="info-box-icon text-success">
                    <i className="bi bi-briefcase-fill"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Employment Status</small>
                    <strong className="text-success small">Open for Full-Time &amp; Freelance</strong>
                  </div>
                </div>
              </div>

              {/* Follow Me Social Links */}
              <div>
                <p className="small text-muted fw-semibold mb-2">Connect Across Platforms</p>
                <div className="d-flex gap-2">
                  <a href="https://github.com/abhijeetvilayate" target="_blank" rel="noreferrer" className="contact-social-btn" title="GitHub">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/abhijeet-vilayate-7abb50290/" target="_blank" rel="noreferrer" className="contact-social-btn" title="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="mailto:vilayateabhijeet1073@gmail.com" className="contact-social-btn" title="Email">
                    <i className="bi bi-envelope-fill"></i>
                  </a>
                  <a href="https://www.instagram.com/travel_abhijeet_26/" target="_blank" rel="noreferrer" className="contact-social-btn" title="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://x.com/AbhijeetVilaya2" target="_blank" rel="noreferrer" className="contact-social-btn" title="Twitter / X">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Send Me a Message Form (3D Tilt Card) */}
          <div className="col-12 col-lg-8">
            <TiltCard maxTilt={5} scale={1.008}>
              <div className="modern-glass-card p-4 p-md-5">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="bi bi-envelope-paper-heart text-purple fs-5"></i>
                  <h5 className="fw-bold text-white mb-0">Send Me a Message</h5>
                </div>
                <div className="contact-title-line mb-4"></div>

                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold text-muted">Your Name</label>
                      <input
                        type="text"
                        name="from_name"
                        className="form-control custom-dark-input"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => {
                          handleChange(e);
                          setFormData((prev) => ({ ...prev, name: e.target.value }));
                        }}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold text-muted">Your Email</label>
                      <input
                        type="email"
                        name="from_email"
                        className="form-control custom-dark-input"
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          handleChange(e);
                          setFormData((prev) => ({ ...prev, email: e.target.value }));
                        }}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-semibold text-muted">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control custom-dark-input"
                        placeholder="Project Opportunity / Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-semibold text-muted">Message</label>
                      <textarea
                        name="message"
                        rows="5"
                        className="form-control custom-dark-input"
                        placeholder="Tell me about your project, timeline, or open role..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-modern-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <i className="bi bi-send-fill"></i>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </TiltCard>
          </div>

        </div>

        {/* WHY WORK WITH ME? CARDS */}
        <div className="text-center my-5">
          <div className="modern-badge mb-2">
            <i className="bi bi-stars"></i>
            <span>Value Proposition</span>
          </div>
          <h3 className="fw-bold text-white mb-2">Why Collaborate With Me?</h3>
          <div className="contact-title-line mx-auto mb-4"></div>

          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="modern-glass-card p-4 text-center h-100">
                <div className="why-icon-box mx-auto mb-3 text-amber">
                  <i className="bi bi-lightning-charge-fill"></i>
                </div>
                <h6 className="fw-bold text-white mb-2">Prompt Communication</h6>
                <p className="text-secondary small mb-0">I value clear correspondence and typically reply within 24 hours.</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="modern-glass-card p-4 text-center h-100">
                <div className="why-icon-box mx-auto mb-3 text-purple">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h6 className="fw-bold text-white mb-2">Full Stack Expertise</h6>
                <p className="text-secondary small mb-0">End-to-end fluency across Java backends, REST APIs, and responsive React SPAs.</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="modern-glass-card p-4 text-center h-100">
                <div className="why-icon-box mx-auto mb-3 text-info">
                  <i className="bi bi-rocket-takeoff-fill"></i>
                </div>
                <h6 className="fw-bold text-white mb-2">Scalable Solutions</h6>
                <p className="text-secondary small mb-0">Engineered for real-world load with clean architecture and secure authentication.</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="modern-glass-card p-4 text-center h-100">
                <div className="why-icon-box mx-auto mb-3 text-success">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h6 className="fw-bold text-white mb-2">Dedicated Ownership</h6>
                <p className="text-secondary small mb-0">Self-driven problem solver committed to delivering on milestones with high quality.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA CALLOUT BANNER */}
        <div className="cta-banner p-4 p-md-5 rounded-4 my-5 text-white position-relative overflow-hidden">
          <div className="cta-backdrop-glow"></div>
          <div className="row align-items-center gy-3 position-relative" style={{ zIndex: 2 }}>
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <h4 className="fw-bold mb-2">Have a vision ready to come alive?</h4>
              <p className="mb-0 text-white-50 small">
                Let's discuss how my full stack engineering skills can help bring your product to life.
              </p>
            </div>
            <div className="col-12 col-lg-5 d-flex flex-wrap justify-content-center justify-content-lg-end gap-3">
              <a 
                href="#contact-form" 
                className="btn btn-white text-dark fw-bold px-4 py-2.5 rounded-3 text-decoration-none shadow"
              >
                Start a Conversation <i className="bi bi-arrow-right"></i>
              </a>
              <a
                href={ResumePDF}
                download="Abhijeet_Vilayate_Resume.pdf"
                className="btn btn-outline-light fw-bold px-4 py-2.5 rounded-3 text-decoration-none"
              >
                Get Resume <i className="bi bi-download"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;