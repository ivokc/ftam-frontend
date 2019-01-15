import {GET_TASKDEF_LIST} from './Action';






function taskdefReducer(state = null, action){
  switch (action.type) {
    case GET_TASKDEF_LIST:
      return [
        ...action.payload
      ];
    default:
        return state;
  }
}

export {
  taskdefReducer,
}
