import React, {useState, useEffect} from 'react'
import axios from '../../axios';
import ProductsCard from '../main-page/products/ProductsCard';

function WomenShoes() {
  const [womenShoes, setWomenShoes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("women/shoes");
      setWomenShoes(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="horizCentre">
    <div className="products-header">
      <div className="all-featured-cards">
        {womenShoes.map((product) => (
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

export default WomenShoes