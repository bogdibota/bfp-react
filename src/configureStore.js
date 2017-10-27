import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux/reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const middleware = applyMiddleware(sagaMiddleware);
  const store = createStore(reducer, middleware);
  sagaMiddleware.run(sagas);
  return store;
};
