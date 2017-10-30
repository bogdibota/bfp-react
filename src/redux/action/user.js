export const LOAD_CURRENT_USER = 'LOAD_CURRENT_USER';
export function loadCurrentUser() {
  return {type: LOAD_CURRENT_USER};
}

export const CURRENT_USER_LOADED = 'CURRENT_USER_LOADED';
export function currentUserLoaded(user) {
  return {type: CURRENT_USER_LOADED, user};
}

export const LOGOUT = 'LOGOUT';
export function logout() {
  return {type: LOGOUT};
}
