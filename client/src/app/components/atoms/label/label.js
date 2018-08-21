//====================================================|
// LABEL


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './label.scss';


//--------------------------| Component

const Label = ({ text }) => (
  <label className={styles.root}>
    {text}
  </label>
);


//--------------------------| Export

export default Label;
