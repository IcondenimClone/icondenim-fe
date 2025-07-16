import React from "react";

function CategoryCard({ link, image }) {
  return (
    <a href={link} className="category-card">
      <img src={image} alt="" />
    </a>
  );
}

export default CategoryCard;