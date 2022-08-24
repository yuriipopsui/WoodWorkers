import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.scss';
import ProductCard from './ProductCard/ProductCard';


function ProductList() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/goods')
      .then(response => {
        return response.json();
      })
      .then(products => {
        // console.log(products);
        setProducts(products);
      })
  }, []);

  return (
    <div className={styles.productList}>
      <div className={styles.productList__wrapper}>
        {
          products && products.map(product => {
            return (
              <ProductCard product={product} key={product.id} />
            )
          })
        }
      </div>
    </div>
  )
}
export default ProductList;