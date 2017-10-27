import { put } from 'redux-saga/effects';
import { getAccessToken } from '../lib/facebook';
import { loadCurrentUser } from '../redux/action/user';

export default function * startup() {
  if (getAccessToken()) {
    yield put(loadCurrentUser());
  }
};
