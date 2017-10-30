import { CURRENT_USER_LOADED, LOAD_CURRENT_USER, LOGOUT } from '../action/user';

const initialState = {
  user: {
    name: 'Your name here!',
    avatar: null,
    isFake: true,
  },
};

export default function reducer(state = initialState, action) {
  const {type, user} = action;
  switch (type) {
    case LOAD_CURRENT_USER:
      return {
        ...state,
        loading: true,
      };
    case CURRENT_USER_LOADED:
      return {
        user: user || initialState.user,
      };
    case LOGOUT:
      return {
        user: initialState.user,
      };
    default:
      return state;
  }
}
