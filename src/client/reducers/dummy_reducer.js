import { DUMMY_ACTION } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case DUMMY_ACTION:
      return { ...state, dummyState: action.payload };
    default:
      return state;
  };
}
