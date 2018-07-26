//====================================================|
// BOARD LEVEL


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './board-level.scss';

// Atoms
import Switcher from '../../atoms/switcher';


//--------------------------| Component

const BoardLevel = props => (
  <div className='pm-board-level'>
    {
      props.switchers.map((switcher, index) => (
        <div key={index} className="pm-board-level--item">
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
