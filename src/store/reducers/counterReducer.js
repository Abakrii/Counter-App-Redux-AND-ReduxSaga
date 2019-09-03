import {INCREMENT, DECREMENT} from '../actions/actionTypes';

export const counterReducer = (times = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return times + action.inc;
    case DECREMENT:
      return times - action.dec;

    default:
      return times;
  }
};

export default counterReducer;
