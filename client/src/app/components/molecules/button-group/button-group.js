//====================================================|
// BUTTON GROUP


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './button-group.scss';

// Atoms
import Button from '../../atoms/button';


//--------------------------| Component

const ButtonGroup = props => (
  <ul className={styles.root}>
    { props.items.map(item => (
      <li className={styles.item} key={item.name}>
        <Button
          className={styles.button}
          group={props.group}
          {...item}
        />
      </li>
    )) }
  </ul>
);


//--------------------------| Export

export default ButtonGroup;
