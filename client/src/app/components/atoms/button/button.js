// =========================| Button |========================= //



//--------------------------| Import

import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import './button.scss';
import { markSwitcher } from '../../../actions/switchers';
import { selectDevice } from '../../../actions/devices';
import { selectRoom } from '../../../actions/rooms';


//--------------------------| Body

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

const mapDispatchToProps = dispatch => ({
  selectDevice: props => dispatch(selectDevice(props)),
  selectRoom: props => dispatch(selectRoom(props)),
  markSwitcher: props => dispatch(markSwitcher(props))
});

export default connect(mapDispatchToProps)(Button);
