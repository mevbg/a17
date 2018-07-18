// =========================| Controllers |========================= //



//--------------------------| Import

import React from 'react';
import { connect } from 'react-redux';
import ButtonGroup from '../../molecules/button-group';
import Label from '../../atoms/label';
import Meta from '../../atoms/meta';
import '../../../../styles/tokens/tokens_flexbox.scss';
import './controllers.scss';


//--------------------------| Body

const Controllers = props => (
  <div className="po-controllers">
    <div className="flex">
      <div className="column">
        <div data-role='devices'>
          <Label text='Device' />
          <ButtonGroup
            items={props.devices}
            group={'devices'}
          />
        </div>
      </div>

      <div className="column">
        <Meta text='or' />
      </div>

      <div className="column">
        <div data-role='rooms'>
          <Label text='Room' />
          <ButtonGroup
            items={props.rooms}
            group={'rooms'}
          />
        </div>
      </div>
    </div>
  </div>
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  devices: state.devices,
  rooms: state.rooms
});


//--------------------------| Export

export default connect(mapStateToProps)(Controllers);
