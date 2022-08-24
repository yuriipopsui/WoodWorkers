import React from 'react';
import styles from './ProductCard.module.scss';

function ProductCard({ product }) {
  // console.log(product.title);

  return (
    // temporary inline styles for Card bg and Picture bg.delete after adding
    // Product Picture
    <div className={styles.productCard} style={{ background: `#${Math.random().toString(16).slice(-6)}` }}>
      <h3 className={styles.productCard__title}>{product.title}</h3>
      <p className={styles.productCard__picture} style={{ background: `#${Math.random().toString(16).slice(-6)}` }}>{product.picture}</p>
      <p className={styles.productCard__description}>{product.description}</p>
      <div className={styles.productCard__price}>Price is: $<span>{product.price}</span></div>
      <div className={styles.productCard__btns}>
        {/* <button className={styles.productCard__btns_details}>Details</button> */}
        <button className={styles.productCard__btns_buy}>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductCard;