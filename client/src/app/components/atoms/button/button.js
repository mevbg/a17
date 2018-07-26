//====================================================|
// BUTTON


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

// Styles
import './button.scss';

// Actions
import { markSwitcher } from '../../../actions/switchers';
import { selectDevice } from '../../../actions/devices';
import { selectRoom } from '../../../actions/rooms';


//--------------------------| Component

const Button = (props) => {
  const classes = classNames('pa-button', {
    marked: props.marked,
    selected: props.selected
  });

  return (
    <a className={classes} onClick={() => {
      props.dispatch(selectDevice(props));
      props.dispatch(selectRoom(props));
      props.dispatch(markSwitcher(props));
    }}>
    <span>
      {props.title}
    </span>
    </a>
  );
};


//--------------------------| Export

export default connect()(Button);
