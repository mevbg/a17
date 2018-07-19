// =========================| Switcher |========================= //



//--------------------------| Import

import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Meta from '../meta';
import './switcher.scss';
import { selectSwitcher } from '../../../actions/switchers';
import { markRoom } from '../../../actions/rooms';
import { markDevice } from '../../../actions/devices';


//--------------------------| Body

const Switcher = (props) => {
  const classes = classNames('pa-switcher', {
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
        props.dispatch(selectSwitcher(props));
        props.dispatch(markDevice(props));
        props.dispatch(markRoom(props));
      }}
    >
      <span className='lever'><span className='bar'></span></span>
      <Meta text={props.label} />
    </a>
  );
};


//--------------------------| Export

export default connect()(Switcher);
