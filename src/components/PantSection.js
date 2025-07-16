import { useState } from 'react';
import { displayPantTabs, pantSectionData } from '../data';
import ProductCard from './ProductCard'; 
import useWindowSize from '../hooks/useWindowSize'; 

function PantSection() {
  const [activeTab, setActiveTab] = useState(displayPantTabs[0].id);
  const currentProducts = pantSectionData[activeTab] || [];
  const activeTabData = displayPantTabs.find(tab => tab.id === activeTab);
  const { width } = useWindowSize(); 
  const breakpoint = 992;
  const bannerToShow = (width < breakpoint && activeTabData?.bannerImageResponsive) 
    ? activeTabData.bannerImageResponsive 
    : activeTabData?.bannerImage;

  return (
    <section className="pant-products-section">
      <div className="container">
        <div className="section-header">
          {displayPantTabs.map(tab => (
            <button 
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="pant-grid-unified">
          <a href="#" className="promo-banner-unified">
            {activeTabData && (
              <img src={bannerToShow} alt={activeTabData.title} />
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

export default PantSection;