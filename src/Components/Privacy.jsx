import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "../Styles/Privacy.css";

const Privacy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="PRIVACYcontain" data-aos="fade-in">
        <h1 data-aos="fade-down">Privacy Policy</h1>
        <p data-aos="fade-up">Last updated: April 02, 2026</p>
      </div>

      <div className="privacy-sectionPRIVACY" data-aos="fade-in">
        <div className="container-smallPRIVACY w-containerPRIVACY">

          {/* Collecting Personal Information */}
          <div className="privacy-wrapPRIVACY" data-aos="fade-in">
            <div className="rich-textPRIVACY w-richtextPRIVACY">
              <h5 data-aos="fade-up">Collecting Personal Information</h5>
              <p data-aos="fade-left">
                We collect personal information such as name, email, phone number, and other details you provide when using our services. This helps us improve your experience and communicate effectively.
              </p>
              <ul role="list" data-aos="zoom-in">
                <li className="llii">Information is collected only with your consent.</li>
                <li className="llii">We ensure all data is stored securely.</li>
                <li className="llii">Data may be used for service improvements.</li>
                <li className="llii">We do not share your data without permission.</li>
              </ul>
            </div>
          </div>

          {/* Sharing Personal Information */}
          <div className="privacy-wrapPRIVACY" data-aos="fade-in">
            <div className="rich-textPRIVACY w-richtextPRIVACY">
              <h5 data-aos="fade-up">Sharing Personal Information</h5>
              <p data-aos="fade-left">
                We do not sell or rent your personal information. We may share data with trusted partners for service delivery, analytics, or legal compliance.
              </p>
              <ol role="list" data-aos="zoom-in">
                <li className="lllii">Third-party service providers with strict confidentiality.</li>
                <li className="lllii">Legal authorities when required by law.</li>
                <li className="lllii">Business partners for essential operations.</li>
                <li className="lllii">Aggregated anonymous data for analytics.</li>
              </ol>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="privacy-wrapPRIVACY" data-aos="fade-in">
            <div className="rich-textPRIVACY w-richtextPRIVACY">
              <h5 data-aos="fade-up">Cookies and Tracking</h5>
              <p data-aos="fade-left">
                Our website may use cookies to enhance user experience, analyze traffic, and personalize content. You can control cookies through your browser settings.
              </p>
              <ul role="list" data-aos="zoom-in">
                <li className="llii">Essential cookies for website functionality.</li>
                <li className="llii">Analytical cookies to improve services.</li>
                <li className="llii">Marketing cookies for personalized content.</li>
              </ul>
            </div>
          </div>

          {/* User Rights */}
          <div className="privacy-wrapPRIVACY" data-aos="fade-in">
            <div className="rich-textPRIVACY w-richtextPRIVACY">
              <h5 data-aos="fade-up">Your Rights</h5>
              <p data-aos="fade-left">
                You have the right to access, update, or delete your personal data. You may also withdraw consent at any time.
              </p>
              <ul role="list" data-aos="zoom-in">
                <li className="llii">Request a copy of your personal data.</li>
                <li className="llii">Correct inaccuracies in your information.</li>
                <li className="llii">Request deletion of your personal data.</li>
                <li className="llii">Opt-out of communications at any time.</li>
              </ul>
            </div>
          </div>

          {/* Contact for Privacy Concerns */}
          <div className="privacy-wrapPRIVACY" data-aos="fade-in">
            <div className="rich-textPRIVACY w-richtextPRIVACY">
              <h5 data-aos="fade-up">Contact Us</h5>
              <p data-aos="fade-left">
                If you have any questions about this Privacy Policy or want to exercise your rights, please contact us at:
              </p>
              <p data-aos="fade-right">
                <strong>Email:</strong> privacy@company.com <br/>
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Privacy;