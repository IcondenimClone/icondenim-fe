import React from "react";
function CategoryCard({ image, link }) {
    return (
        <a href={link} className="category-card" style={{ backgroundImage: `url(${image})`}}>
        </a>
    );
}

export default CategoryCard;