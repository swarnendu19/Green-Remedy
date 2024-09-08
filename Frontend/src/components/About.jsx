import React, { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setVideoPlaying(true);
    
   
    window.open(process.env.PUBLIC_URL + "/video.mp4", "_blank");
  };

  return (
    <div className="bg-[#263b20] relative flex items-center justify-between rounded-[30px]" id="about">
      <div className="absolute left-[-150px] z-[-2] rounded-[30px]">
        <img src="../assets/about-background-image.jpg" alt="" />
      </div>
      <div className="pt-[50px] pb-[50px] flex-[0.9] pl-[50px] mr-[3rem] overflow-hidden relative rounded-[50px]">
        <img
         src="../assets/about-background.jpg"
         alt=""
         className="rounded-[50px] transition-transform duration-500 ease-in-out hover:scale-110"
          />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">About PlantSpace</h1>
        <p className="primary-text">
          Welcome to Plantspace, where greenery meets technology to create a harmonious space for plant enthusiasts and nature lovers alike.
          <h4 className="secondary-heading">Our Story</h4>
          Plantspace was born out of a shared passion for plants and a commitment in 2024 to bring the beauty of nature into every home and workspace.
          <h3 className="secondary-heading">Our Mission</h3>
          At Plantspace, our mission is to inspire and empower individuals to cultivate a deeper connection with nature. We believe that incorporating plants into daily life enhances well-being, promotes a healthier environment.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button" onClick={handlePlayVideo}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
