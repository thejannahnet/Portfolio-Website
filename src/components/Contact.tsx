import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaGlobe } from "react-icons/fa";
import Logo from "./Logo";
import "./styles/Contact.css";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-container section-container">
        <div className="contact-header">
          <h3 className="contact-subtitle">GET IN TOUCH</h3>
          <h2 className="contact-title">Let's work <span>together</span></h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-col">
            <div className="contact-method">
              <h4>Email</h4>
              <a href="mailto:Alynumaan@hotmail.com" data-cursor="disable" className="contact-link">
                Alynumaan@hotmail.com
              </a>
            </div>
            <div className="contact-method">
              <h4>Phone</h4>
              <a href="tel:+923087666622" data-cursor="disable" className="contact-link">
                +92 308 7666622
              </a>
            </div>
          </div>

          <div className="contact-social-col">
            <h4>Socials</h4>
            <div className="social-links-grid">
              <a href="https://wa.me/923087666622" target="_blank" rel="noopener noreferrer" className="social-card">
                <FaWhatsapp className="social-icon" />
                <div className="social-text">
                  <span>WhatsApp</span>
                  <MdArrowOutward className="arrow-icon" />
                </div>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-card">
                <FaLinkedin className="social-icon" />
                <div className="social-text">
                  <span>LinkedIn</span>
                  <MdArrowOutward className="arrow-icon" />
                </div>
              </a>
              <a href="https://thejannah-net.vercel.app" target="_blank" rel="noopener noreferrer" className="social-card">
                <FaGlobe className="social-icon" />
                <div className="social-text">
                  <span>Website</span>
                  <MdArrowOutward className="arrow-icon" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo-section">
            <Logo />
            <p className="footer-tagline">Empowering Amazon Sellers & Businesses Worldwide</p>
          </div>

          <div className="footer-credits">
            <div className="copyright">
              <MdCopyright /> 2024 Ali Noman. All rights reserved.
            </div>
            <button onClick={scrollToTop} className="back-to-top" data-cursor="disable">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
