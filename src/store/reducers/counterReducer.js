import {INCREMENT, DECREMENT} from '../actions/actionTypes';

const counterReducer = (times = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return (times+ 10);
    case DECREMENT:
      return --times;

    default:
      return times;
  }
};

export default counterReducer;
