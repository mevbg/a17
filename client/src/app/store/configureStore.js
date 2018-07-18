// =========================| Configure store |========================= //



// Import
import { createStore, combineReducers } from 'redux';
import devicesReducer from '../reducers/devices';
import roomsReducer from '../reducers/rooms';
import switchersReducer from '../reducers/switchers';



// Export
export default () => createStore(combineReducers({
  devices: devicesReducer,
  rooms: roomsReducer,
  switchers: switchersReducer
}));
