//====================================================|
// BOARD LEVEL


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './board-level.scss';

// Atoms
import Switcher from '../../atoms/switcher';


//--------------------------| Component

const BoardLevel = ({ switchers }) => (
  <div className={styles.root}>
    {
      switchers.map((switcher, index) => (
        <div key={index} className={styles.item}>
          <Switcher
            {...switcher}
          />
        </div>
      ))
    }
  </div>
);


//--------------------------| Export

export default BoardLevel;
