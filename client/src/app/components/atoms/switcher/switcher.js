//====================================================|
// SWITCHER


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

// Styles
import styles from './switcher.scss';

// Actions
import { selectSwitcher } from '../../../actions/switchers';
import { markRoom } from '../../../actions/rooms';
import { markDevice } from '../../../actions/devices';

// Atoms
import Meta from '../meta';


//--------------------------| Component

const Switcher = (props) => {
  const {
    features,
    marked,
    selected,
    wings,
    role,
    label,
    dispatch
  } = props;
  const classes = classNames(styles.root, {
    [styles.marked]: marked,
    [styles.selected]: selected
  });

  return (
    <a
      className={classes}
      data-weight={features && features.indexOf('fat') !== -1 ? 'fat' : ''}
      data-color={features && features.indexOf('black') !== -1 ? 'black' : ''}
      data-wings={wings}
      data-role={role.name}
      title={role.title}
      onClick={() => {
        dispatch(selectSwitcher(props));
        dispatch(markDevice(props));
        dispatch(markRoom(props));
      }}
    >
      <span className={styles.lever}><span className={styles.bar} /></span>
      <Meta className={styles.label} text={label} />
    </a>
  );
};


//--------------------------| Export

export default connect()(Switcher);
