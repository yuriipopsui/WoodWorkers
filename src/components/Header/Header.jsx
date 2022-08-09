import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>This is Header</h1>
    </div>
  )
}

export default Header;