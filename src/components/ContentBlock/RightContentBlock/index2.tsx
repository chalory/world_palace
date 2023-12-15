// Import React and CSS module
import React from 'react';
import Slider, { Settings } from "react-slick";
import './SlideshowComponent.css';

const SlideshowComponent: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slideshow">
      <Slider {...settings}>
        <div className="item">
          <img src="https://images.unsplash.com/photo-1465935343323-d742334bcbda?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925" alt="Slide 1" />
        </div>
        <div className="item">
          <img src="https://images.unsplash.com/photo-1443890923422-7819ed4101c0?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925" alt="Slide 2" />
        </div>
        <div className="item">
          <img src="https://images.unsplash.com/photo-1474861644511-0f2775ae97cc?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SlideshowComponent;