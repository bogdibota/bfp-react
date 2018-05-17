export const LOAD_MY_GROUPS = 'LOAD_MY_GROUPS';
export function loadMyGroups() {
  return {type: LOAD_MY_GROUPS};
}

export const GROUPS_LOADED = 'GROUPS_LOADED';
export function groupsLoaded(groups) {
  return {type: GROUPS_LOADED, groups};
}

export const CREATE_GROUP = 'CREATE_GROUP';
export function createGroup(name) {
  return {type: CREATE_GROUP, name};
}

export const ADD_USER = 'ADD_USER';
export function addUser(userName, groupId) {
  return {type: ADD_USER, userName, groupId };
}
