import { useState } from 'react';

import { categoryData } from '../data'; 


function JeansFinder() {
  const [activeId, setActiveId] = useState('tat-ca-jeans');
  const activeCategory = categoryData.find(cat => cat.id === activeId);
    
    if (!activeCategory) return null;

  return (
    <section className="jeans-finder-wrapper">
      <div className="container">
        <div className="jeans-finder-content">
          <img 
            src={activeCategory.bannerImage} 
            alt="Jeans Banner" 
            className="finder-background-image"
          />
          <div className="filter-buttons-container">
            {categoryData.map((category) => (
              <button 
                key={category.id} 
                className="filter-button"
                onClick={() => setActiveId(category.id)}
              >
                <img 
                  src={activeId === category.id ? category.filterImageActive : category.filterImage} 
                  alt={category.id} 
                />
              </button>
            ))}
          </div>
          {/* <div className="finder-overlay-details">
            <div className="grand-opening">
            </div>
            <div className="techurban-jeans">
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default JeansFinder;