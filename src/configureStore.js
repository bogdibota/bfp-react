import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './redux/reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const middleware = process.env.NODE_ENV && process.env.NODE_ENV === 'production'
    ? applyMiddleware(sagaMiddleware)
    : applyMiddleware(sagaMiddleware, logger);
  const store = createStore(reducer, middleware);
  sagaMiddleware.run(sagas);
  return store;
};
