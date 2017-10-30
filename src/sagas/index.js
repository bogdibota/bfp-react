import { all, fork } from 'redux-saga/effects';

import userSagas from './user';
import groupSagas from './group';
import startup from './startup';

export default function * root() {
  yield all([
    fork(userSagas),
    fork(groupSagas),
    fork(startup),
  ]);
}
