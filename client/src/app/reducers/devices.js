//====================================================|
// REDUCERS: DEVICES


//--------------------------| Import

import { devices } from '../../database/content.json';


//--------------------------| Default state

const localState = JSON.parse(localStorage.getItem('state'));
const devicesReducerDefaultState = localState ? localState.devices : devices;


//--------------------------| Export

export default (state = devicesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case 'SELECT_DEVICE':
      return state.map((device) => {
        const newDevice = device;

        delete newDevice.marked;
        newDevice.selected = !newDevice.selected && newDevice.name === action.device.name;

        return newDevice;
      });

    case 'MARK_DEVICE':
      return state.map((device) => {
        const newDevice = device;

        delete newDevice.selected;
        newDevice.marked =
          action.switcher.devices &&
          action.switcher.devices.indexOf(newDevice.name) !== -1 &&
          !action.switcher.selected;

        return newDevice;
      });
  }
};
