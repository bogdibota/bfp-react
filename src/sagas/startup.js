import { put } from 'redux-saga/effects';
import { facebookLoginUrl, getAccessToken, shouldRelog } from '../lib/facebook';
import { loadCurrentUser } from '../redux/action/user';

export default function * startup() {
  if (getAccessToken()) {
    yield put(loadCurrentUser());
  } else if (shouldRelog()) {
    window.location = facebookLoginUrl;
  }
};
