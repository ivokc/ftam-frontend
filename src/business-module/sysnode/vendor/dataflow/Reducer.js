import {GET_SYSNODE_LIST} from './Action';





const initialMonitorReducer = {
  
}
function sysnodeReducer(state = initialMonitorReducer, action){
  switch (action.type) {
    case GET_SYSNODE_LIST:
      return {
        ...action.payload
      };
    default:
        return state;
  }
}

export {
  sysnodeReducer,
}
