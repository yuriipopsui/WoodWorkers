import React from 'react';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <a href="/">About us</a>
      <a href="/our_projects">Our Projects</a>
      <a href="/gallery">Gallery</a>
      <a href="/contacts">Contacts</a>
    </nav>
  )
}

export default Navigation;