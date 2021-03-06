import {LEARNT_PHRASES} from '../constants/ActionVariables';

export const learntPhrases = (state = [], action) => {
  switch (action.type) {
    case LEARNT_PHRASES:
      return [...state, action.payload];
    default:
      return state;
  }
};
