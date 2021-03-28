import React from "react";
import Button from "../Button";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video
        src="https://res.cloudinary.com/dm1kh3yma/video/upload/v1616955482/video-2_rhqfb0.mp4"
        autoPlay
        loop
        muted
      />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => {}}
        >
          GET STARTED
        </Button>
        <Button
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => {}}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
