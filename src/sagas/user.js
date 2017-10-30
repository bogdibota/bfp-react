import { all, call, put, takeEvery } from 'redux-saga/effects';
import { currentUserLoaded, LOAD_CURRENT_USER, LOGOUT } from '../redux/action/user';

import { login } from '../lib/apollo';
import { logout } from '../lib/facebook';

function * loadCurrentUser() {
  const user = yield call(login);
  yield put(currentUserLoaded(user));
}

function * logoutCurrentUser() {
  yield call(logout);
  yield put(currentUserLoaded(null));
}

export default function * userSagas() {
  yield all([
    takeEvery(LOAD_CURRENT_USER, loadCurrentUser),
    takeEvery(LOGOUT, logoutCurrentUser),
  ]);
}
