import React, {useState, useEffect} from 'react';
import ProductsCard from '../main-page/products/ProductsCard';
import axios from '../../axios';

function WomenJackets() {
  const [womenJackets, setWomenJackets] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("women/jackets");
      setWomenJackets(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="horizCentre">
    <div className="products-header">
      <div className="all-featured-cards">
        {womenJackets.map((product) => (
          <ProductsCard
            key={product.product_id}
            prod_id={product.product_id}
            imgUrl={product.image_url}
            name={product.product_name}
            price={product.price}
            desc = {product.product_description}
          />
        ))}
      </div>
    </div>
      
    </div>
  );
}

export default WomenJackets