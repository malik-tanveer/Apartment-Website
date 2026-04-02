import { useState } from "react";
import "../Styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        {/* LEFT LINKS */}
        <ul className="nav-left">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
        </ul>

        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img
              src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac0cf2dd4689bf7d609aa_apartment.svg"
              alt="logo"
            />
          </Link>
        </div>

        {/* RIGHT LINKS */}
        <ul className="nav-right">
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/PrivacyPolicy">Privacy</Link></li>
        </ul>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>
      </nav>

      {/* SIDEBAR MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </div>

        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/Gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
        <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/Blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/PrivacyPolicy" onClick={() => setMenuOpen(false)}>Privacy</Link>
      </div>
    </>
  );
};

export default Navbar;