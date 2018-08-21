//====================================================|
// META


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './meta.scss';


//--------------------------| Component

const Meta = ({ text, className }) => (
  <label className={`${styles.root} ${className}`}>
    {text}
  </label>
);


//--------------------------| Export

export default Meta;
