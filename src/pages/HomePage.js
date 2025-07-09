import { useState } from 'react';
import Slide from '../components/Slide';
import PoliciesSection from '../components/PoliciesSection';
import CategoriesSection from '../components/CategoriesSection';
import VouchersSection from '../components/VouchersSection';
import JeansFinder from '../components/JeansFinder'; 
import ProductList from '../components/ProductList';
import  BlockButton  from '../components/BlockButton';
import FeaturedProducts from '../components/FeaturedProducts';
import { categoryData } from '../data';

function HomePage() {
  const [activeCategory, setActiveCategory] = useState('tat-ca-jeans');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };
  return (
    <>
      
      <Slide />
      <PoliciesSection />
      <CategoriesSection />
      <VouchersSection />
      <JeansFinder 
        categories={categoryData}
        activeId={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProductList></ProductList>
       <BlockButton>Xem tất cả</BlockButton>

      <FeaturedProducts />
      <BlockButton>Xem tất cả</BlockButton>
    </>
  );
}

export default HomePage;