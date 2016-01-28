import {bindActionCreators} from 'redux';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function reset() {
  return {
    type: RESET_COUNTER
  };
}

export default function counterActions($ngRedux) {
  let actionCreator = {
    increment,
    decrement,
    reset
  };

  return bindActionCreators(actionCreator, $ngRedux.dispatch);
}

counterActions.$inject = ['$ngRedux'];
