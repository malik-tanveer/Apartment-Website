import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/Home/Hero1.css";

const Hero1 = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <>
            <hr />
            <div className="modern-container">
                <div className="modern-image" data-aos="fade-right">
                    <img
                        src="/Hero1/Main.avif"
                        alt="Modern Building"
                    />
                </div>
                <div className="modern-content" data-aos="fade-left">
                    <h1 className="main-heading">Where modern design meets comfort</h1>
                    <p className="description">
                        Experience the perfect blend of modern design and ultimate comfort, crafted for contemporary living.
                    </p>
                    <div className="features">
                        <p>Spacious floor plans</p>
                        <p>Resort-style amenities</p>
                        <p>Designer interiors</p>
                        <p>24/7 maintenance support</p>
                        <p>Panoramic city views</p>
                    </div>
                    <button className="download-btn">
                        <p>Download brochure</p> <FaDownload />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero1;