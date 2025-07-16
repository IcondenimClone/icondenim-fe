// src/components/CollectionSection.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Chỉ cần Navigation nếu không dùng pagination

import 'swiper/css';
import 'swiper/css/navigation';

import { collectionsData } from '../data';

function CollectionSection() {
  return (
    <section className="collection-section">
      <div className="container">
        <h2 className="inner-title">Bộ Sưu Tập Mới Nhất</h2>
        <div className="collection-slider-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            navigation={true}
            loop={false}
            className="collection-slider"
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 15
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20
              },
            }}
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