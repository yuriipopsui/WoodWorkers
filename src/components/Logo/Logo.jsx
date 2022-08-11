import React from 'react';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <div>
      <a className={styles.logo} href="/">
        WoodWorkers
      </a>
    </div>
  )
}

export default Logo;

