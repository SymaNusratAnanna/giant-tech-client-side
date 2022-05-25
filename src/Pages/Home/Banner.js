import React from 'react';
import image from '../../assets/images/backround.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{background: `url(${image})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Giant Tech</h1>
            <p className="mb-5"> Giant Tech Co. Ltd is the professional and reliable manufacturer for computer accessories.</p>
          
          </div>
        </div>
      </div>
    );
};

export default Banner;