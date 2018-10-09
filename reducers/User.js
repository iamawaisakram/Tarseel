import { SAVE_USER } from '../utilities/Keys';

const initialState = {
  data: {}
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        data
      };
    default:
      return state;
  }
}
