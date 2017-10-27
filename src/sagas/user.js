import { all, call, put, takeEvery } from 'redux-saga/effects';
import { currentUserLoaded, LOAD_CURRENT_USER } from '../redux/action/user';

import { login } from '../lib/apollo';

function * loadCurrentUser() {
  const user = yield call(login);
  yield put(currentUserLoaded(user));
}

export default function * userSagas() {
  yield all([
    takeEvery(LOAD_CURRENT_USER, loadCurrentUser),
  ]);
}
