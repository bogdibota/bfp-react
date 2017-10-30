import { GROUPS_LOADED, LOAD_MY_GROUPS } from '../action/group';

const initialState = {
  myGroups: [],
};

export default function reducer(state = initialState, action) {
  const {type, groups} = action;
  switch (type) {
    case LOAD_MY_GROUPS:
      return {
        ...state,
        loading: true,
      };
    case GROUPS_LOADED:
      return {
        myGroups: groups,
      };
    default:
      return state;
  }
}
