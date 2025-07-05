import ProductCard from './ProductCard';
import { productsData } from '../data'; 

function ProductList() {
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

export default ProductList;