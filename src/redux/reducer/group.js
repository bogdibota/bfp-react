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
        myGroups: [...state.myGroups,{id: state.myGroups.length, name: action.name, users:[]}]
      };
    case ADD_USER:
      let newState = Object.assign({},state);
      for(let group of newState.myGroups) {
        if(group.id === action.groupId) {
          group.users = [...group.users,{id:group.users.length ,name:action.userName, avatar:''}];
        }
      }
      return newState;

    default:
      return state;
  }
}
