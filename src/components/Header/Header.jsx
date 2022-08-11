import React from 'react';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header;