//====================================================|
// BUTTON GROUP


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './button-group.scss';

// Atoms
import Button from '../../atoms/button';


//--------------------------| Component

const ButtonGroup = props => (
  <ul className="pm-button-group">
    { props.items.map((item, index) => (
      <li className='item' key={item.name}>
        <Button
          group={props.group}
          {...item}
        />
      </li>
    )) }
  </ul>
);


//--------------------------| Export

export default ButtonGroup;
