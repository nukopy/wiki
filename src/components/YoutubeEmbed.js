import React from "react";
import "./styles.css";

const YoutubeEmbed = ({ link }) => {
  return (
    <div className="video-responsive">
      <iframe
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
