import {GET_TASK_MONITOR,GET_SYSNODE_MONITOR} from './Action';





const initialMonitorReducer = {
  task:[],
  sysnode:{}
}
function monitorReducer(state = initialMonitorReducer, action){
  switch (action.type) {
    case GET_TASK_MONITOR:
      return {
        ...state,
        task:action.payload
      };
    case GET_SYSNODE_MONITOR:
      return {
        ...state,
        sysnode:action.payload
      };
    default:
        return state;
  }
}

export {
  monitorReducer,
}
