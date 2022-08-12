import React, { useState } from 'react';
import styles from './Slider.module.scss';
import sliderImages from '../../sliderImages.js';


function Slider() {
  const [page, setPage] = useState(0);

  const prevClick = () => {
    page <= 0
      ? setPage(sliderImages.length - 1)
      : setPage(page - 1);
  }
  const nextClick = () => {
    page >= sliderImages.length - 1
      ? setPage(0)
      : setPage(page + 1);
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slider__container}>
        {
          sliderImages.map(item =>
            <div key={item.id} className={item.id === page + 1 ? styles.slider__active : styles.slider__card}>
              < img className={styles.slider__item} src={item.src} alt={item.description} />
              <p className={styles.slider__item_desc}>{item.description}</p>
            </div>
          )}
      </div>
      <button className={styles.prev} onClick={prevClick}>&#10094;</button>
      <button className={styles.next} onClick={nextClick}>&#10095;</button>
    </div>
  )
}

export default Slider;