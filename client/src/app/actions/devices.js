//====================================================|
// ACTIONS: DEVICES


//--------------------------| Select device

export const selectDevice = device => ({
  type: 'SELECT_DEVICE',
  device
});


//--------------------------| Mark device

export const markDevice = switcher => ({
  type: 'MARK_DEVICE',
  switcher
});
