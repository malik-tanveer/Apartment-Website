import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos"; 
import Swal from "sweetalert2";
import "aos/dist/aos.css"; 
import "../../Styles/Home/Readyapartment.css";

const Readyapartment = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      Swal.fire({
        icon: "warning",
        title: "⚠️ Please fill all fields!",
        text: "All fields are required before submission.",
      });
      return;
    }

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      to_name: "Your Name", 
    };

    emailjs
      .send(
        "service_nl65ww3", 
        "template_zh5swtp", 
        emailParams,
        "QzWjWiQWDWttxMdw6"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "✅ Success!",
          text: "Your request has been submitted successfully!",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });

        setFormData({ name: "", email: "", phone: "" });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "❌ Error!",
          text: "Failed to send the request. Please try again.",
        });
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <>
      <div className="readyapartment">
        <h1 data-aos="fade-up">Ready to make the apartment your home?</h1>
        <p className="pa" data-aos="fade-up">Drop your info, and we’ll connect with you soon</p>
        <form onSubmit={handleSubmit}>
          <div className="iu">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              data-aos="fade-right"
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              data-aos="fade-left"
            />
            <input
              className="input"
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              data-aos="fade-right"
            />
          </div>
          <div className="bnm" data-aos="flip-up">
            <button className="sub" type="submit">
              Book a Tour
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Readyapartment;
