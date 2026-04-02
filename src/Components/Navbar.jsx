import { useState } from "react";
import "../Styles/Navbar.css";
import Button from "./Button";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
      {/* LEFT SIDE */}
      <div className="left">
        <div
          className="hamburger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className="menu-icon" />
        </div>

        <ul className={`main-part ${menuOpen ? "show-menu" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>

          <li className="pages-item" onClick={toggleDropdown}>
            Pages <FaChevronDown className="down-arrow" />

            {showDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                <li><Link to="/FAQs">FAQs</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* CENTER LOGO */}
      <div className="logo">
        <img
          src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac0cf2dd4689bf7d609aa_apartment.svg"
          alt="Logo"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <Button cont="Inquire Now" />
      </div>
    </nav>
  );
};

export default Navbar;