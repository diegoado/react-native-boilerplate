import { createReducer } from 'reduxsauce';

import ExampleTypes from '../actions/example';

export const sayHello = (state, { message }) => ({
  ...state,
  message: message
});

export default createReducer('', {
  [ExampleTypes.SAY_HELLO]: sayHello
});
