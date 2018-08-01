//====================================================|
// REDUCERS: ROOMS


//--------------------------| Import

import { rooms } from '../../database/content.json';


//--------------------------| Default state

const localState = JSON.parse(localStorage.getItem('switchboard-a17'));
const roomsReducerDefaultState = localState ? localState.rooms : rooms;


//--------------------------| Export

export default (state = roomsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case 'SELECT_ROOM':
      return state.map((room) => {
        const newRoom = room;

        delete newRoom.marked;
        newRoom.selected = !newRoom.selected && newRoom.name === action.room.name;

        return newRoom;
      });

    case 'MARK_ROOM':
      return state.map((room) => {
        const newRoom = room;

        delete newRoom.selected;
        newRoom.marked =
          action.switcher.rooms &&
          action.switcher.rooms.indexOf(newRoom.name) !== -1 &&
          !action.switcher.selected;

        return newRoom;
      });
  }
};
