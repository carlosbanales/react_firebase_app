import React from 'react';
import './style.css';

const HomePage = () => (
  <div>

    <iframe
      title="Reel" width="700" height="400" src="https://www.youtube.com/embed/gdhfysJNNqM"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <div className='Container'>
      
      <div className='LeftBox'>
        <h3>Design</h3>
        <p>
          Whether you need a website, logo, or billboard, 
          we can help you express your brands values through 
          thoughtful design. 
        </p>
      </div>

      <div className='MiddleBox'>
        <h3>Marketing</h3>
        <p>
          We offer Social Media Marketing Services where we Create, 
          Run, and Monitor, Monthly Ad Campaigns on Instagram 
          and Facebook to help reach your optimal target audience.
          Contact us for more info on SMM. 
        </p>
      </div>

      <div className='RightBox'>
        <h3>Video Production</h3>
        <p>
          We offer a wide variety of Video Production
          Services that are sure to fit your needs.
        </p>
      </div>

    </div>
  </div>
);

export default HomePage;
