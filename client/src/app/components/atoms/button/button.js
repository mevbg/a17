//====================================================|
// BUTTON


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

// Styles
import styles from './button.scss';

// Actions
import { markSwitcher } from '../../../actions/switchers';
import { selectDevice } from '../../../actions/devices';
import { selectRoom } from '../../../actions/rooms';


//--------------------------| Component

const Button = (props) => {
  const {
    marked,
    selected,
    className,
    title,
    dispatch
  } = props;
  const classes = classNames(styles.root, className, {
    [styles.marked]: marked,
    [styles.selected]: selected
  });

  return (
    <a className={classes} onClick={() => {
      dispatch(selectDevice(props));
      dispatch(selectRoom(props));
      dispatch(markSwitcher(props));
    }}>
    <span>
      {title}
    </span>
    </a>
  );
};


//--------------------------| Export

export default connect()(Button);
