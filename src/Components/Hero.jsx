import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Hero.css";
import Button from "./Button";

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div className="Luxury-container">
            <div className="Luxury-content" data-aos="fade-up">
                <h1 data-aos="fade-down">Luxury living & city vibes</h1>
                <p className="Luxury-paragraph" data-aos="fade-right">
                    <img
                        className="logo-logo"
                        src="/Hero/hero_logo.svg"
                        alt=""
                        data-aos="zoom-in"
                    />
                    <div className="Luxury-inner" data-aos="fade-left">
                        Where luxury meets convenience. Nestled in the heart of the city. Our modern apartments
                        offer unparalleled comfort and stunning views.
                    </div>
                </p>
                <div className="butn" data-aos="zoom-in-up">
                    <Button cont="Explore floor Plans" />
                </div>
            </div>
            <div className="images-container">
                <img
                    src="/Hero/hero_main.avif"
                    alt="Luxury Apartments"
                    className="main-image"
                    data-aos="flip-left"
                />
                <img src="/Hero/hero_main1.avif" alt="Side View" className="side-image" data-aos="flip-right" />
            </div>
        </div>
    );
};

export default Hero;
