import { combineReducers } from 'redux';

import example from './example';

const createRootReducer = () => combineReducers({ example });

export default createRootReducer;
