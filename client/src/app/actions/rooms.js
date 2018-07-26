//====================================================|
// ACTIONS: ROOMS


//--------------------------| Select room

export const selectRoom = room => ({
  type: 'SELECT_ROOM',
  room
});


//--------------------------| Mark room

export const markRoom = switcher => ({
  type: 'MARK_ROOM',
  switcher
});
