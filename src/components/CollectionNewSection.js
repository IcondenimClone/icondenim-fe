// src/components/CollectionSection.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { collectionsData } from '../data';

function CollectionSection() {
  return (
    <section className="collection-section">
      <div className="container">
        <h2 className="inner-title">Bộ Sưu Tập Mới Nhất</h2>
        <div className="collection-slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={true}
            loop={false}
            className="collection-slider"
          >
            {collectionsData.map((collection) => (
              <SwiperSlide key={collection.id} className="collection-slide-item">
                <a href={collection.link}>
                  <div className="slide-image-wrapper">
                    <img src={collection.image} alt={collection.alt} className="slide-image" />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;