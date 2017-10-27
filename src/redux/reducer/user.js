import { CURRENT_USER_LOADED, LOAD_CURRENT_USER } from '../action/user';

const initialState = {};

export default function reducer(state = initialState, action) {
  const {type, user} = action;
  switch (type) {
    case LOAD_CURRENT_USER:
      return {
        loading: true,
      };
    case CURRENT_USER_LOADED:
      return {
        user,
      };
    default:
      return state;
  }
}
