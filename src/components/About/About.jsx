import React from 'react';
import styles from './About.module.scss';
import ProductList from '../ProductList/ProductList';

function About() {

  return (
    <div className={styles.about}>
      <h1 className={styles.about__title}>This is About Page</h1>
      <p className={styles.about__text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatibus assumenda omnis error labore. Dolor maiores, ad debitis minus nihil eum inventore? Dolores placeat totam inventore quibusdam vel labore, cupiditate architecto, dignissimos, adipisci corrupti molestias facere dolore animi sapiente assumenda iste aperiam provident accusamus omnis tenetur dolor reiciendis veritatis? Accusantium dolore saepe eos corrupti fuga eum rerum similique adipisci asperiores.
      </p>

      <ProductList />

    </div>
  )
}

export default About;