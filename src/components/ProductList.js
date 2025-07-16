import ProductCard from './ProductCard';
import { productsData } from '../data'; 
import useWindowSize from '../hooks/useWindowSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
function ProductList() {
  const { width } = useWindowSize();
  const breakpoint = 767;
  if (width > breakpoint) {
    return (
      <section className="product-list-section">
        <div className="container">
          <div className="product-grid">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  }
   return (
    <section className="product-list-section mobile">
      <div className="container">
        <div className="swiper-wrapper-custom">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10} 
              slidesPerView={2} 
              navigation={true}
              className="product-swiper-mobile"
            >
              {productsData.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ProductList;