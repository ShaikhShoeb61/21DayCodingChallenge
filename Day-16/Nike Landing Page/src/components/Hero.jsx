import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Nike Swoosh Where Style Meets Performance</h1>
        <p>
          Step into the Future of Footwear. Discover the Nike Swoosh shoe, where
          innovation, fashion, and performance unite. Get ready to elevate your
          stride and style. Let's get started!
        </p>
        <div className="hero-btn">
          <button>Get Started Now</button>
          <div className="learn-more">Learn More</div>
        </div>
      </div>
      <div className="hero-image">
        <img src="../images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default Hero;
