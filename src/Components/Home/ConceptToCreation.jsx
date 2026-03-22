import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/Home/ConceptToCreation.css";
import Button from "../Button";

const ConceptToCreation = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <div className="developer-section">
                <div className="dev-left" data-aos="fade-right">
                    <h1>From Concept to Creation by Imprintly</h1>
                    <p>
                        Imprintly brings vision to life with expertly designed and thoughtfully developed
                        modern living spaces.
                    </p>
                    <div className="btn-container" data-aos="zoom-in">
                        <Button cont="Send a Request" />
                    </div>
                </div>
                <div className="dev-right" data-aos="fade-left">
                    <img
                        src="/assets/ConceptToCreation.avif"
                        alt="Development"
                    />
                </div>
            </div>

            <section className="milestones-section" data-aos="fade-up">
                <h2 data-aos="fade-down">Our Development Milestones</h2>
                <div className="milestones-grid">
                    <div className="milestone" data-aos="fade-right">
                        <h4>Type:</h4>
                        <p>Luxury apartments</p>
                    </div>
                    <div className="milestone" data-aos="fade-left">
                        <h4>Unit Size:</h4>
                        <p>750 to 1,500 sq.ft</p>
                    </div>
                    <div className="milestone" data-aos="zoom-in">
                        <h4>Number of Units:</h4>
                        <p>50 apartments</p>
                    </div>
                    <div className="milestone" data-aos="slide-up">
                        <h4>Completion Time:</h4>
                        <p>March 2025</p>
                    </div>
                    <div className="milestone" data-aos="zoom-out">
                        <h4>Starting Price:</h4>
                        <p className="price">From $450,000</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConceptToCreation;