// =========================| Switch |========================= //



//--------------------------| Import

import React from 'react';
import classNames from 'classnames';
import Meta from '../meta';
import './switch.scss';


//--------------------------| Body

const Switch = (props) => {
  const classes = classNames('pa-switch', {
    fat: props.features && props.features.indexOf('fat') !== -1,
    black: props.features && props.features.indexOf('black') !== -1,
    marked: props.marked,
    selected: props.selected
  });

  return (
    <a
      className={classes}
      data-wings={props.wings}
      data-role={props.role.name}
      title={props.role.title}
      onClick={() => {
        props.handleClick(props);
      }}
    >
      <span className="lever"><span className="bar"></span></span>
      <Meta text={props.label} />
    </a>
  );
};


//--------------------------| Export

export default Switch;
