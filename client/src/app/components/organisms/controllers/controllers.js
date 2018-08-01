//====================================================|
// CONTROLLERS


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import CustomScroll from 'react-custom-scroll';

// Styles
import 'react-custom-scroll/dist/customScroll.css';
import './controllers.scss';
import '../../../../styles/tokens/tokens_flexbox.scss';
import '../../../../styles/external/custom-scrollbar.scss';

// Atoms
import Label from '../../atoms/label';
import Meta from '../../atoms/meta';

// Molecules
import ButtonGroup from '../../molecules/button-group';


//--------------------------| Component

const Controllers = props => (
  <div style={{ flex: 1, minHeight: 0, minWidth: 0 }}>
    <CustomScroll heightRelativeToParent='100%'>
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
    </CustomScroll>
  </div>
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  devices: state.devices,
  rooms: state.rooms
});


//--------------------------| Export

export default connect(mapStateToProps)(Controllers);
