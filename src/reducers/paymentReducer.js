import {
  UPDATE_INPUT,
  SHOW_MODAL,
  VALIDATE_CARD
} from '../actions/types';

const initialState = {
  showModal: false,
  inputObj: {},
  cardData: {}
};


export default function (state = initialState, action) {
  const {
    inputObj,
    show,
    cardData
  } = action;

  switch (action.type) {
    case UPDATE_INPUT:
      return Object.assign({}, state, { inputObj });

    case SHOW_MODAL:
      return Object.assign({}, state, { showModal: show });

    case VALIDATE_CARD:
      return Object.assign({}, state, { cardData });

    default:
      return state;
  }
}
