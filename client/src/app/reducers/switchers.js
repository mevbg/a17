// =========================| Reducers: Switchers |========================= //



//--------------------------| Import

import { switchers } from '../../model.json';


//--------------------------| Default state

const localState = JSON.parse(localStorage.getItem('state'));
const switchersReducerDefaultState = localState ? localState.switchers : switchers;


//--------------------------| Export

export default (state = switchersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case 'SELECT_SWITCHER':
      return state.map((switcher) => {
        const newSwitcher = switcher;

        delete newSwitcher.marked;
        newSwitcher.selected = !newSwitcher.selected && newSwitcher.id === action.switcher.id;

        return newSwitcher;
      });

    case 'MARK_SWITCHER':
      return state.map((switcher) => {
        const newSwitcher = switcher;

        delete newSwitcher.selected;
        newSwitcher.marked =
          !action.button.selected &&
          newSwitcher[action.button.group] &&
          newSwitcher[action.button.group].indexOf(action.button.name) !== -1;

        return newSwitcher;
      });
  }
};
