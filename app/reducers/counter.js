import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER
} from '../actions/counter';

export default function counter(state = 0, action) {
  var actions = {
    [INCREMENT_COUNTER]: (state) => state + 1,
    [DECREMENT_COUNTER]: (state) => state - 1,
    [RESET_COUNTER]: (state) => 0
  };

  return actions[action.type] ?
    actions[action.type](state) :
    state;
}
