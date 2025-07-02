import Slide from '../components/Slide';
import PoliciesSection from '../components/PoliciesSection';
import CategoriesSection from '../components/CategoriesSection'; 
import VouchersSection from '../components/VouchersSection';

function HomePage() {
  return (
    <>
      <Slide />
      <PoliciesSection />
      <CategoriesSection /> 
      <VouchersSection />
    </>
  );
}

export default HomePage;