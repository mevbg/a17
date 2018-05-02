// =========================| Button |========================= //



//--------------------------| Import

import React from 'react';
import classNames from 'classnames';
import './button.scss';


//--------------------------| Body


const Button = (props) => {
  const classes = classNames('pa-button', {
    marked: props.marked,
    selected: props.selected
  });

  return (
    <a className={classes} onClick={() => {
      props.handleClick(props);
    }}>
    <span>
      {props.title}
    </span>
    </a>
  );
};


//--------------------------| Export

export default Button;
