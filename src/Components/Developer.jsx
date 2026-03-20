import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Developer.css";
import Button from "./Button";

const Developer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="container1" data-aos="fade-up">
                <div className="dev1" data-aos="fade-right">
                    <h1 style={{ color: "white" }}>
                        This is most diffilcut but manage this time
                        From Concept to creation by Imprintly
                    </h1>
                    <p>
                        Imprintly brings vision to life with expertly designed and thoughtfully developed modern living
                        spaces.
                    </p>
                    <div className="abbtn" data-aos="zoom-in">
                        <Button cont="Send a Request" />
                    </div>
                </div>
                <div className="image-side" data-aos="fade-left">
                    <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673c23c4ca503bfb1f1f0e5d_about-image-02.avif" alt="Development" />
                </div>
            </div>

            <section className="milestones-container" data-aos="fade-up">
                <h2 data-aos="fade-down">Our development milestones</h2>
                <div className="milestones-content">
                    <div className="milestone" data-aos="fade-right">
                        <h4>Type:</h4>
                        <p><span>Luxury apartments</span></p>
                    </div>
                    <div className="milestone" data-aos="fade-left">
                        <h4>Unit Size:</h4>
                        <p><span>750 to 1,500 sq.ft</span></p>
                    </div>
                    <div className="milestone" data-aos="zoom-in">
                        <h4>Number Of Units:</h4>
                        <p><span>50 apartments</span></p>
                    </div>
                    <div className="milestone" data-aos="slide-up">
                        <h4>Completion time:</h4>
                        <p><span>March 2025</span></p>
                    </div>
                    <div className="milestone" data-aos="zoom-out">
                        <h4>Starting price:</h4>
                        <p><span className="liil">From $450,000</span></p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Developer;
