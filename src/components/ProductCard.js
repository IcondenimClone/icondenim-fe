import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColorId, setSelectedColorId] = useState(product?.variants?.[0]?.id);
  if (!product || !product.variants || product.variants.length === 0) {
    return null; 
  }
  const activeVariant = product.variants.find(variant => variant.id === selectedColorId);
  if (!activeVariant) {
      return null;
  }
  const productUrl = `/products/${product.id}`;
  return (
    <a 
      href={productUrl} 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={isHovered ? activeVariant.imageHover : activeVariant.imageDefault} 
          alt={product.name}
          className="product-image"
        />
        {product.tagImage && (
          <img src={product.tagImage} alt="Product Tag" className="product-tag-image" />
        )}

        <div className={`product-hover-overlay ${isHovered ? 'visible' : ''}`}>
          <button className="overlay-button"><FaShoppingCart /></button>
          <button className="overlay-button"><FaRegEye /></button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <div className="product-colors">
          {product.variants.map((variant) => (
            <div 
              key={variant.id} 
              className={`color-swatch-button ${selectedColorId === variant.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault(); 
                e.stopPropagation();
                setSelectedColorId(variant.id);
              }}
            >
              <img src={variant.colorSwatch} alt={variant.colorName} />
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProductCard;