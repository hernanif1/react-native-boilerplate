import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

export default () => {
  const middleware = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const store = createStore(reducers, applyMiddleware(...middleware));
  sagaMiddleware.run(sagas);

  return store;
};
