import React, { useRef, useState } from "react";

const Backvideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src="/assets/Back.mp4" type="video/mp4" />
        </video>

        {/* overlay (light dark effect) */}
        <div className="overlay"></div>

        <button className="video-control-btn" onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      {/* CSS inside JSX */}
      <style>{`
        .video-container {
          position: relative;
          width: 100%;
          height: 90vh;
          overflow: hidden;
        }

        .background-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* overlay for better visibility */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.25);
        }

        /* button */
        .video-control-btn {
          position: absolute;
          bottom: 30px;
          right: 30px;
          padding: 10px 18px;
          border: none;
          background: #d8af72;
          color: #fff;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        }

        /* responsive */
        @media (max-width: 768px) {
          .video-container {
            height: 60vh;
          }

          .video-control-btn {
            bottom: 15px;
            right: 15px;
            padding: 8px 14px;
          }
        }
      `}</style>
    </>
  );
};

export default Backvideo;