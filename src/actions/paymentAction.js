import { 
  UPDATE_INPUT,
  SHOW_MODAL,
  VALIDATE_CARD
} from './types';
import valid from 'card-validator';

export function updateInput(inputObj) {
  return { type: UPDATE_INPUT, inputObj };
}

export function showModal(show) {
  return { type: SHOW_MODAL, show }
}

export function validateCard(cardNum) {
  let numberValidation = valid.number(cardNum);

  if (numberValidation) {
    let cardData = numberValidation
    return { type: VALIDATE_CARD, cardData}
  }
}