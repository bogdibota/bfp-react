import { all, call, put, takeEvery } from 'redux-saga/effects';
import { CREATE_GROUP, groupsLoaded, LOAD_MY_GROUPS, loadMyGroups } from '../redux/action/group';
import { CURRENT_USER_LOADED } from '../redux/action/user';

import { createGroup, myGroups } from '../lib/apollo';

function * executeLoadMyGroups({type, user}) {
  if (type === CURRENT_USER_LOADED && !user) {
    return;
  }
  const groups = yield call(myGroups);
  yield put(groupsLoaded(groups));
}

function * executeCreateGroup({name}) {
  yield call(createGroup, name);
  yield put(loadMyGroups());
}

export default function * groupSagas() {
  yield all([
    takeEvery(LOAD_MY_GROUPS, executeLoadMyGroups),
    takeEvery(CREATE_GROUP, executeCreateGroup),
    takeEvery(CURRENT_USER_LOADED, executeLoadMyGroups),
  ]);
}
