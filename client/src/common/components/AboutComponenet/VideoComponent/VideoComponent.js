import React from 'react';
import './VideoComponent.css';

const VideoComponent = () => {
  return (
    <div className='video_comp'>
        <div className="video-container">
        <div className="video-wrapper">
            <video className="video" controls>
            <source src="https://youtu.be/eyxcogxfNAw?si=J8NCdaET_s-Wuvfl" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <div className="play-button">
            <span>▶</span>
            </div>
        </div>
        <div className="yellow-apopos-circlee"></div>
        </div>
    </div>
  );
};

export default VideoComponent;
