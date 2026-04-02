import React, {useState, useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Faq.css";
import {Link} from "react-router-dom";
import Button from "./Button";

const Faq = () => {
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    const toggleTab = (index) => {
        setActiveTab(activeTab === index ? null : index);
    };

    const faqItems = [
        {
            id: 1,
            question: "What is the down payment required to purchase an apartment?",
            answer: "The typical down payment is 20% of the total purchase price. However, this may vary depending on financing options or special promotions.",
            animation: "fade-left",
        },
        {
            id: 2,
            question: "Are pets allowed in the building?",
            answer: "Yes, the building is pet-friendly. There are specific guidelines for pet size and breed, and an additional deposit may be required.",
            animation: "fade-right",
        },
        {
            id: 3,
            question: "What amenities are available to residents?",
            answer: "The building offers a variety of amenities, including a gym, swimming pool, rooftop lounge, and 24/7 security.",
            animation: "fade-left",
        },
        {
            id: 4,
            question: "Is parking included with the apartment purchase?",
            answer: "Each unit comes with one designated parking space. Additional parking spaces can be purchased or rented based on availability.",
            animation: "fade-right",
        },
        {
            id: 5,
            question: "What is the expected move-in date?",
            answer: "Move-in dates vary depending on unit availability, but for new buyers, the average move-in timeframe is within 2 to 3 months.",
            animation: "fade-left",
        },
        {
            id: 6,
            question: "Are there financing options available for buyers?",
            answer: "Yes, several financing options are available through our preferred lenders. You can also explore other mortgage options with your financial institution.",
            animation: "fade-right",
        },
    ];

    return (
        <>
            <>
                <div className="faqcontain">
    <h1>Frequently Asked Questions</h1>
    <p className="faq-description">
        Here are some of the most common questions our residents and buyers ask. 
        If you don’t find your answer here, feel free to contact us directly.
    </p>
</div>
                <div className="faq-columns">
                    <div className="faq-column">
                        <div className="faq-accordion">
                            {faqItems.map((item) => (
                                <div key={item.id} className="accordion-item" data-aos={item.animation}>
                                    <div
                                        className={`accordion-title ${activeTab === item.id ? "active" : ""}`}
                                        onClick={() => toggleTab(item.id)}
                                    >
                                        {item.question}
                                        <span className="accordion-icon">{activeTab === item.id ? "-" : "+"}</span>
                                    </div>
                                    {activeTab === item.id && (
                                        <div className="accordion-content">
                                            <p>{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="faqbottom">
                    <h1 data-aos="fade-up">Have more questions?</h1>
                    <Link className="faqbottom-link">
                        <div data-aos="zoom-in">
                            <Button cont="Contact" />
                        </div>
                    </Link>
                </div>
            </>
        </>
    );
};

export default Faq;
