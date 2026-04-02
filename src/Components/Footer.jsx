import React from "react";
import "../Styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* LOGO + IMAGE */}
                <div className="footer-logo-section">
                    <img
                        src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac993342deb5c460060ea_apartment-footer.svg"
                        alt="Logo"
                        className="footer-logo"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/66f39f1b82e983b9dc855469_footer-image.avif"
                        alt="Footer"
                        className="footer-image"
                    />
                </div>

                {/* LINKS */}
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Pages</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Gallery">Gallery</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li><Link to="/Contact">Contact</Link></li>
                            <li><Link to="/Faqs">FAQs</Link></li>
                            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* CONTACT + SOCIAL */}
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <ul>
                            <li className="footer-email">
                                <FaEnvelope /> mtanveerdev.33@gmail.com
                            </li>
                        </ul>

                    </div>
                </div>

            </div>

            <hr className="footer-line" />

            {/* BOTTOM */}
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} <span className="highlight">Tanveer Dev</span>. All rights reserved.
                </p>

                <div className="footer-icons">
                    <a href="https://github.com/malik-tanveer" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;