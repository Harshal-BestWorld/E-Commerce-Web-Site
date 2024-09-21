import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

export const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="New Collection Icon" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <button className="hero-latest-btn">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="Arrow Icon" />
        </button>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Hero Product Display" />
      </div>
    </section>
  );
};
