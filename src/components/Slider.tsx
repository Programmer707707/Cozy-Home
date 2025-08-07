import React from 'react';
import { Carousel } from 'antd';
import banner from '../assets/home-images/banner.png';

const Slider: React.FC = () => (
  <div className="w-full px-4 sm:px-6 lg:px-8 my-8">
    <div className="max-w-[80rem] mx-auto">
      <div className="hidden md:block">
        <Carousel autoplay autoplaySpeed={5000}>
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={banner}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="block md:hidden overflow-hidden rounded-xl">
        <img
          src={banner}
          alt="Static Banner"
          className="w-full h-[200px] object-cover"
        />
      </div>
    </div>
  </div>
);

export default Slider;
