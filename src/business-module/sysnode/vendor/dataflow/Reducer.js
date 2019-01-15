import {GET_SYSNODE_LIST} from './Action';






function sysnodeReducer(state = null, action){
  switch (action.type) {
    case GET_SYSNODE_LIST:
      return [
        ...action.payload
      ];
    default:
        return state;
  }
}

export {
  sysnodeReducer,
}
