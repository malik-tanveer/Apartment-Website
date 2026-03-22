import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../Styles/Home/Comment.css";
import Start from "./Start"; // star component

// Updated testimonials array
const testimonials = [
  {
    name: "David Thompson",
    role: "CEO",
    text: "This project exceeded my expectations in quality, aesthetics, and durability. A true investment for the future.",
    image: "https://www.usbank.com/dam/images/wealth_management/ascent/photo-business-owner-planning-470x264.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Co-Founder",
    text: "The planning and execution were flawless. The entire team has done an exceptional job!",
    image: "https://upstartgroup.com/wp-content/uploads/Dec-CP-2-Co-Owners-and-the-challenge-of-exit-plans-to-suit-them-both.jpg",
  },
  {
    name: "Sarah Anderson",
    role: "Lead Architect & Designer",
    text: "The design blends modern aesthetics with functionality. Every corner tells a story of elegance and efficiency.",
    image: "https://www.zippia.com/_next/image/?url=https%3A%2F%2Fmedia.zippia.com%2Fjob-title%2Fimages%2Fhardware-engineer%2Fhardware-engineer-2.webp&w=3840&q=75",
  },
  {
    name: "Emma Wilson",
    role: "Founder",
    text: "Our vision is now a reality thanks to the dedication and creativity of the team. Exceptional work.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Roberts",
    role: "Co-Founder",
    text: "From concept to creation, every detail has been meticulously handled. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const Comment = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="testimonial-container" data-aos="fade-up">
      <h2 className="testimonial-title" data-aos="zoom-in">
        What Experts Say About Our Building
      </h2>

      <div className="testimonial-card" data-aos="fade-up">
        <button onClick={prevTestimonial} className="nav-button left" data-aos="fade-right">
          <FaChevronLeft />
        </button>

        <div className="testimonial-content">
          <Start /> {/* Star rating */}
          <div className="testimonial-image-container" data-aos="zoom-in">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="testimonial-image"
            />
          </div>

          <div className="testimonial-text" data-aos="fade-up">
            <p>"{testimonials[index].text}"</p>
          </div>

          <div className="testimonial-info" data-aos="fade-down">
            <h3 className="testimonial-name">{testimonials[index].name}</h3>
            <p className="testimonial-role">{testimonials[index].role}</p>
          </div>
        </div>

        <button onClick={nextTestimonial} className="nav-button right" data-aos="fade-left">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Comment;