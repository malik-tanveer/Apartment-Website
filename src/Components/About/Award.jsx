import React, { useEffect } from "react";
import "../../Styles/About/Award.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Award = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,          // 🔥 FAST (was 1000)
            easing: "ease-out-cubic", // smoother & faster feel
            once: true,
        });
    }, []);

    return (
        <div className="award">
            <h1 
              style={{ textAlign: "center" }} 
              data-aos="fade-up" 
              data-aos-duration="600"  // 🔥 fast heading
            >
              Our achievements & awards
            </h1>

            <div className="Award-pics">
                <div className="First" data-aos="fade-up" data-aos-delay="50">
                    <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673aca7710a4a5b6acb9dc39_award-01.svg" alt="" />
                    <p>Best luxury residential development</p>
                </div>

                <div className="Second" data-aos="fade-up" data-aos-delay="100">
                    <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/66f4e1a8ea1fa86468841de1_award-02.svg" alt="" />
                    <p>Green building leadership</p>
                </div>

                <div className="Third" data-aos="fade-up" data-aos-delay="150">
                    <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673aca786267bfe491792f33_award-03.svg" alt="" />
                    <p>Top luxury residential project</p>
                </div>

                <div className="Fourth" data-aos="fade-up" data-aos-delay="200">
                    <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673aca782c5087578506e8ef_award-04.svg" alt="" />
                    <p>Best use of technology in development</p>
                </div>

                <div className="Fifth" data-aos="fade-up" data-aos-delay="250">
                    <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673aca781107c6f465a79dc9_award-05.svg" alt="" />
                    <p>Top 5 urban developments</p>
                </div>
            </div>
        </div>
    );
};

export default Award;