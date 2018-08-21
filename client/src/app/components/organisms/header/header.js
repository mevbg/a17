//====================================================|
// HEADER


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './header.scss';

// Data
import pkg from '../../../../../../package.json';


//--------------------------| Component

const title = pkg.title.split(' ');

const Header = () => (
  <div className={styles.root}>
    <span>{title[0]} <strong>{title[1]}</strong></span>
  </div>
);


//--------------------------| Export

export default Header;
