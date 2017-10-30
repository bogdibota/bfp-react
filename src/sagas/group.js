import { all, call, put, takeEvery } from 'redux-saga/effects';
import { groupsLoaded, LOAD_MY_GROUPS } from '../redux/action/group';
import { CURRENT_USER_LOADED } from '../redux/action/user';

import { myGroups } from '../lib/apollo';

function * loadMyGroups({type, user}) {
  if (type === CURRENT_USER_LOADED && !user) {
    return;
  }
  const groups = yield call(myGroups);
  yield put(groupsLoaded(groups));
}

export default function * groupSagas() {
  yield all([
    takeEvery(LOAD_MY_GROUPS, loadMyGroups),
    takeEvery(CURRENT_USER_LOADED, loadMyGroups),
  ]);
}
