//====================================================|
// META


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './meta.scss';


//--------------------------| Component

const Meta = props => (
  <label className="pa-meta">
    {props.text}
  </label>
);


//--------------------------| Export

export default Meta;
