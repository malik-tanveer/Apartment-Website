import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Luxury.css";

const amenities = [
    { icon: "amenities-01.svg", text: "Rooftop pool", animation: "zoom-in" },
    { icon: "amenities-02.svg", text: "Fitness studio", animation: "fade-right" },
    { icon: "amenities-03.svg", text: "Rooftop cinema", animation: "zoom-in" },
    { icon: "amenities-02.svg", text: "Kids play area", animation: "fade-left" },
    { icon: "amenities-05.svg", text: "Yoga studio", animation: "fade-down" },
    { icon: "amenities-06.svg", text: "EV charging stations", animation: "zoom-in" },
    { icon: "amenities-07.svg", text: "Elevator lobby lounge", animation: "fade-right" },
    { icon: "amenities-08.svg", text: "Outdoor grilling & dining area", animation: "fade-left" },
    { icon: "amenities-09.svg", text: "Library & reading nook", animation: "fade-down" },
    { icon: "amenities-10.svg", text: "Valet parking", animation: "zoom-in" },
    { icon: "amenities-11.svg", text: "Resident lounge", animation: "fade-right" },
    { icon: "amenities-12.svg", text: "24/7 security", animation: "fade-left" },
];

const Luxury = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <div className="Contain">
                <h1 data-aos="fade-up">Designed for your lifestyle</h1>
                <div className="all">
                    {amenities.map((item, index) => (
                        <div className="st" key={index} data-aos={item.animation}>
                            <img
                                src={`/luxury/${item.icon}`}
                                alt={item.text}
                                className="amenity-icon"
                            />
                            <p className="life-text" data-aos="fade-up">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </>
    );
};

export default Luxury;