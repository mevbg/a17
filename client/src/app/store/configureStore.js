// =========================| Configure store |========================= //



//--------------------------| Import

// Redux
import { createStore, combineReducers } from 'redux';

// Reducers
import devicesReducer from '../reducers/devices';
import roomsReducer from '../reducers/rooms';
import switchersReducer from '../reducers/switchers';


//--------------------------| Export

export default () => createStore(
  combineReducers({
    devices: devicesReducer,
    rooms: roomsReducer,
    switchers: switchersReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
);
