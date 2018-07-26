//====================================================|
// LABEL


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './label.scss';


//--------------------------| Component

const Label = props => (
  <label className="pa-label">
    {props.text}
  </label>
);


//--------------------------| Export

export default Label;
