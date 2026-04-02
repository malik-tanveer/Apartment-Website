import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "aos/dist/aos.css";
import "../Styles/Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneNumber || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "⚠️ Please fill all fields!",
        text: "All fields are required!",
      });
      return;
    }

    emailjs
      .sendForm("service_nl65ww3", "template_zh5swtp", formRef.current, "QzWjWiQWDWttxMdw6")
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your message has been sent successfully!",
          confirmButtonColor: "#3085d6",
        });
        setFormData({ name: "", phoneNumber: "", email: "", message: "" });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "❌ Error!",
          text: "Failed to send the message. Please try again later.",
        });
        console.error(error.text);
      });
  };

  return (
    <div className="contact-main-container">
      {/* Get Started / Map Section */}
      <div className="contact-getstarted-map">
        <div className="contact-getstarted">
          <h1 className="contact-title" data-aos="fade-right">
            Get in touch with <br /> Apartmentt
          </h1>
          <div className="contact-details">
            <p data-aos="fade-left">
              <FaPhoneAlt className="contact-icon" /> +1 (555) 123-4567
            </p>
            <p data-aos="fade-up">
              <FaEnvelope className="contact-icon" /> business@example.com
            </p>
          </div>
          <p className="contact-location" data-aos="zoom-in">
            <FaMapMarkerAlt className="contact-icon" /> Chicago HQ Estica Cop. Macomb, MI 48042
          </p>
        </div>

        <div className="contact-map-container" data-aos="flip-left">
          <img
            src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac97d9a97cb3ec9181211_map.avif"
            alt="Map"
            className="contact-map-img"
          />
        </div>
      </div>

      {/* Agent Image + Form */}
      <div className="contact-bottom-section">
        <div className="contact-agent" data-aos="zoom-in">
          <img
            src="https://images.livemint.com/img/2022/08/02/1600x900/Gaurav_Pandey_1659429569474_1659429569610_1659429569610.jfif"
            alt="Agent"
            className="agent-image"
          />
          <p className="agent-name">Samuel Bishop</p>
          <p className="agent-subtitle">Property consultant at WBS Co.</p>
          <p className="contact-info-agent">
            <span>Ph-</span> +1 (1) 123-4567
          </p>
          <p className="contact-info-agent">
            <span>Mail-</span> youloos477@gmail.com
          </p>
        </div>

        <div className="contact-form-section" data-aos="fade-up">
          <form ref={formRef} onSubmit={sendEmail} className="form-grid">
            <h1 className="form-title">Let’s Connect</h1>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="form-input"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone number"
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-input"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help?"
              className="form-textarea"
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;