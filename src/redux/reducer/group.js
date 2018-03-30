import { GROUPS_LOADED, LOAD_MY_GROUPS, CREATE_GROUP, ADD_USER } from '../action/group';

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
    case CREATE_GROUP:
      return {
        ...state,
        myGroups: [...state.myGroups,{name: action.name, users:[]}]
      };
    case ADD_USER:
      console.log(state,action);
      return {
        ...state
      };
    default:
      return state;
  }
}
