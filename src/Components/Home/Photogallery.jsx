import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Home/Photogallery.css";
import Button from "../Button";

const Photogallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Array of images/videos
  const slides = [
    {
      type: "video",
      src: "/gallery/gallery_vide0_1.mp4",
    },
    {
      type: "image",
      src: "/gallery/image_1.png",
    },
    {
      type: "image",
      src: "/gallery/image_2.avif",
    },
    {
        type: "image",
        src: "/gallery/image_3.jfif",
    },
    {
        type: "image",
        src: "/gallery/image_4.jpg",
    },
    {
        type: "image",
        src: "/gallery/image_5.jfif",
    },
    {
      type: "video",
      src: "/gallery/gallery_vide0_2.mp4",
    },
    // Add more images/videos here
  ];

  return (
    <div className="photogallery-container">
      <div className="photogallery-header">
        <h1>See our luxurious living</h1>
        <Link to="/Gallery">
          <Button cont="View Gallery" />
        </Link>
      </div>

      <div className="slider-wrapper">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div className="slide-item" key={index}>
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  controls
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img src={slide.src} alt={`Slide ${index + 1}`} />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Photogallery;