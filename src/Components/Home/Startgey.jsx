import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/Home/Startgey.css";

const facts = [
  {
    number: "250",
    title: "Parking spaces",
    desc: "250 Secure underground parking spots",
  },
  {
    number: "12",
    title: "Amenities",
    desc: "Including a rooftop pool and fitness center",
  },
  {
    number: "7",
    title: "Elevators",
    desc: "Seamless access with modern elevators",
  },
  {
    number: "10,000",
    unit: "sq. ft.",
    title: "Green spaces",
    desc: "Landscaped gardens and courtyards",
  },
  {
    number: "15+",
    title: "Floors",
    desc: "Stories of modern living",
  },
];

const Startgey = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <hr />
      <section className="facts-section">
        <h1 className="section-title" data-aos="fade-up">
          Facts that matter
        </h1>

        <div className="facts-container">
          {facts.map((item, index) => (
            <div className="fact" key={index} data-aos="fade-up">
              <h2 className="fact-number">
                {item.number}{" "}
                {item.unit && <span className="unit">{item.unit}</span>}
              </h2>
              <p className="fact-title">{item.title}</p>
              <p className="fact-description">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Startgey;