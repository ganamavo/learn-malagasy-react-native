import {SET_PHRASES} from '../constants/ActionVariables';

export const phrases = (state = {}, action) => {
  switch (action.type) {
    case SET_PHRASES:
      return {
        ...state,
        phrases: action.payload,
        isLoading: !action.isLoading,
      };
    default:
      return state;
  }
};
