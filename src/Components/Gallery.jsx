import React, { useEffect } from "react";
import "../Styles/Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="container">
  <div className="gallery-header">
    <h1>Our Gallery</h1>

    {/* 🔥 NEW DESCRIPTION */}
    <p className="gallery-desc">
      Explore our premium spaces, modern designs, and beautifully crafted living environments.
      Discover the elegance and comfort that define our residential experience.
    </p>
  </div>
</div>
      <div className="gallery-container">
        <div className="image-container" data-aos="zoom-in">
          <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/66f3e382a542e9b079226d90_gallery-image-01.avif" alt="Slider Image 1" className="image" />
        </div>
        <div className="image-container" data-aos="zoom-in">
          <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673c357b98d84b3627967257_gallery-image-02.avif" alt="Slider Image 2" className="image" />
        </div>
        <div className="image-container" data-aos="zoom-in">
          <video
            src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0%2F673c367f8bad0abb721751f8_gallery-video1-transcode.mp4"
            className="large-video" 
            autoPlay
            loop
            muted
          />
        </div>
      </div>
      <div className="gallery-container1">
        <div className="image-container1" data-aos="zoom-in">
          <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673c357b98d84b3627967257_gallery-image-02.avif" alt="Slider Image 2" className="image1" />
        </div>
        <div className="image-container1" data-aos="zoom-in">
          <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673c384e1e6ce1ffacff3f9b_gallery-image-08.avif" alt="Slider Image 2" className="image1" />
        </div>
        <div className="image-container1" data-aos="zoom-in">
          <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673c31df1e6ce1ffacf99944_gallery-image-04.avif" alt="Slider Image 2" className="image1" />
        </div>
        <div className="image-container1" data-aos="zoom-in">
          <img
            src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673c3a6227094b6b3734f875_gallery-image-05.avif"
            alt="Slider Image 2"
            className="image1"
          />
        </div>
      </div>

      <div className="gallery-container2">
        <div className="image-container2" data-aos="zoom-in">
          <img
            src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673c35a51e6ce1ffacfcd30a_gallery-image-06.avif"
            alt="Slider Image 2"
            className="image2"
          />
        </div>
        <div className="image-container2" data-aos="zoom-in">
          <video
            src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0%2F66f3e4fb6214d76f87c3bbef_gallery-video-transcode.mp4"
            className="large-video1"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="image-container2" data-aos="zoom-in">
          <img
            src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673c37edb2ad35060739a2a5_gallery-image-07.avif"
            alt="Slider Image 2"
            className="image2"
         />
        </div>
      </div>

      <div className="gallery-container1">
        <div className="image-container1" data-aos="zoom-in">
          <img
            src="https://www.renderhub.com/vivekt478/exhibition-stand-stall-one-side-open-8x5/exhibition-stand-stall-one-side-open-8x5-01.jpg"
            alt="Slider Image 2"
            className="image1"
          />
        </div>
        <div className="image-container1" data-aos="zoom-in">
          <img
            src="https://cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/B23F4I2AYZSMASS3T6VJRKNDPY.jpg"
            alt="Slider Image 2"
            className="image1"
          />
        </div>
        <div className="image-container1" data-aos="zoom-in">
          <img
            src="https://cdn.houseplansservices.com/content/kiljti45641tbdsrrvhdohbuf2/w991x660.jpg?v=2"
            alt="Slider Image 2"
            className="image1"
          />
        </div>
        <div className="image-container1" data-aos="zoom-in">
          <img
            src="https://cdngeneralcf.rentcafe.com/dmslivecafe/3/518484/The%20Park%20Slider%201.jpg?crop=(0,0,300,126)&cropxunits=300&cropyunits=126&quality=85&scale=both&"
            alt="Slider Image 2"
            className="image1"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
