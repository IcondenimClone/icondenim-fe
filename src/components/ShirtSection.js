import { useState } from 'react';
import { displayShirtTabs, shirtSectionData } from '../data';
import ProductCard from './ProductCard'; 
import useWindowSize from '../hooks/useWindowSize'; 

function ShirtSection() {
    const [activeTab, setActiveTab] = useState(displayShirtTabs[0].id);
    const currentProducts = shirtSectionData[activeTab] || [];
    const activeTabData = displayShirtTabs.find(tab => tab.id === activeTab);
    
    const { width } = useWindowSize();
    const breakpoint = 992;
    
    const bannerToShow = (width < breakpoint && activeTabData?.bannerImageResponsive) 
    ? activeTabData.bannerImageResponsive
    : activeTabData?.bannerImage;
    
    return (
        <section className="shirt-products-section">
            <div className="container">
                <div className="section-header">
                    {displayShirtTabs.map(tab => (
                        <button 
                            key={tab.id}
                            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="shirt-grid-unified">
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

export default ShirtSection;