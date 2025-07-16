import React from 'react';
import CategoryCard from './CategoryCard';

import catImg1 from '../assets/images/banner-5.webp';
import catImg2 from '../assets/images/banner-6.webp';
import catImg3 from '../assets/images/banner-7.webp';
import catImg4 from '../assets/images/banner-8.webp';

const categoriesData = [
  { image: catImg1, link: '/collections/tech-urban' },
  { image: catImg2, link: '/collections/denim' },
  { image: catImg3, link: '/collections/daily-wear' },
  { image: catImg4, link: '/collections/office-wear' },
];

function CategoriesSection() {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-wrap">
          {categoriesData.map((cat, index) => (
            <div className="inner-item" key={index}>
              <CategoryCard
                image={cat.image}
                link={cat.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;