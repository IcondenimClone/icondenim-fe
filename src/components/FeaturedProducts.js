import { useState } from 'react';
import { displayTabs, featuredProductsData } from '../data';
import ProductCard from './ProductCard'; 

function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState(displayTabs[0].id);
  const currentProducts = featuredProductsData[activeTab] || [];
  const activeTabData = displayTabs.find(tab => tab.id === activeTab);

  return (
    <section className="featured-products-section">
      <div className="container">
        <div className="section-header">
          {displayTabs.map(tab => (
            <button 
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="featured-grid-unified">
          <a href="#" className="promo-banner-unified">
            {activeTabData && (
              <img src={activeTabData.bannerImage} alt={activeTabData.title} />
            )}
          </a>
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;