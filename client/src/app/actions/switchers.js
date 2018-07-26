//====================================================|
// ACTIONS: SWITCHERS


//--------------------------| Select switcher

export const selectSwitcher = switcher => ({
  type: 'SELECT_SWITCHER',
  switcher
});


//--------------------------| Mark switcher

export const markSwitcher = button => ({
  type: 'MARK_SWITCHER',
  button
});
