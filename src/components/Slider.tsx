import React from 'react';
import { Carousel } from 'antd';
import banner from '../assets/home-images/banner.png';

const Slider: React.FC = () => (
  <div className="max-w-7xl mx-auto my-8">
    <Carousel autoplay={{dotDuration: true}} autoplaySpeed={5000}>
      <div >
          <img
            src={banner}
            alt='Slide'
            className="w-full object-cover rounded-xl"
          />
      </div>
      <div >
          <img
            src={banner}
            alt='Slide'
            className="w-full object-cover rounded-xl"
          />
      </div>
      <div >
          <img
            src={banner}
            alt='Slide'
            className="w-full object-cover rounded-xl"
          />
      </div>
      <div >
          <img
            src={banner}
            alt='Slide'
            className="w-full object-cover rounded-xl"
          />
        </div>
    </Carousel>
  </div>
);

export default Slider;
