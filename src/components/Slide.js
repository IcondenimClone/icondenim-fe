import React from "react";
import Slider from "react-slick"; 

import banner1 from '../assets/images/banner-1.webp';
import banner2 from '../assets/images/banner-2.jpg';
import banner3 from '../assets/images/banner-3.jpg';
import banner4 from '../assets/images/banner-4.webp';

const bannerData = [
  { id: 1, image: banner1, alt: "Banner 1" },
  { id: 2, image: banner2, alt: "Banner 2" },
  { id: 3, image: banner3, alt: "Banner 3" },
  { id: 4, image: banner4, alt: "Banner 4" }
];

function Slide() {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <section className="section-slide">
      <Slider {...settings}>
        {bannerData.map(banner => (
          <div key={banner.id} className="slide-item">
            <img src={banner.image} alt={banner.alt} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Slide;