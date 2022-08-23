import React, { useEffect, useState } from 'react';
import styles from './About.module.scss';

function About() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/goods')
      .then(response => {
        return response.json();
      })
      .then(products => {
        console.log(products);
        console.log(products[0]);
        setProducts(products);
      })
  }, []);


  return (
    <div className={styles.about}>
      <h1 className={styles.about__title}>This is About Page</h1>
      <div className={styles.productList}>
        <div className={styles.productList__wrapper}>
          {
            products && products.map(product => {
              return (
                <div className={styles.productCard} key={product.id}>
                  <h3 className={styles.productCard__title}>{product.title}</h3>
                  <p className={styles.productCard__picture}>{product.picture}</p>
                  <p className={styles.productCard__description}>{product.description}</p>
                  <div className={styles.productCard__price}>Price is: $<span>{product.price}</span></div>
                  <div className={styles.productCard__btns}>
                    <button className={styles.productCard__btns_details}>Details</button>
                    <button className={styles.productCard__btns_buy}>Buy Now</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default About;