import React from 'react';
import styles from './Slider.module.scss';

function Slider() {
  return (
    <div className={styles.slider}>

      <div className={styles.slider__content}>
        <img className={styles.slider__item} src={"/images/item1.jpg"} alt="Item1" />
        <img className={styles.slider__item} src={"/images/item2.jpg"} alt="Item2" />
        <img className={styles.slider__item} src="/images/item3.jpg" alt="Item3" />
        <img className={styles.slider__item} src="/images/item4.jpg" alt="Item4" />
        <img className={styles.slider__item} src="/images/item5.jpg" alt="Item5" />

      </div>

    </div>
  )
}

export default Slider;