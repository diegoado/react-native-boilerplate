import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import immutableTransform from 'redux-persist-transform-immutable';
import { persistReducer, persistStore } from 'redux-persist';

import rootSaga from './sagas';
import createRootReducer from './reducers';

const middlewares = [];

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: AsyncStorage
};

const configureStore = () => {
  // Connect the sagas to the redux store
  const saga = createSagaMiddleware();
  middlewares.push(saga);

  // Redux persist
  const rootReducer = persistReducer(persistConfig, createRootReducer());

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  const persistor = persistStore(store);

  // Kick off the root saga
  saga.run(rootSaga);

  return { store, persistor };
};

export default configureStore;
