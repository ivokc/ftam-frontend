import {USER_LOGIN,USER_LOGOUT,USER_FORGET,GET_MENU,GET_DICT} from './Action';
import {monitorReducer} from '../business-module/monitor/vendor/dataflow/Reducer';
import {sysnodeReducer} from '../business-module/sysnode/vendor/dataflow/Reducer';
import {versionReducer} from '../business-module/version/vendor/dataflow/Reducer';
import {alertDefReducer} from '../business-module/alert-def/vendor/dataflow/Reducer';
import {taskdefReducer} from '../business-module/task-def/vendor/dataflow/Reducer';




function userReducer(state = null, action){
  switch (action.type) {
    case USER_LOGIN:

      return {
        ...action.payload
      };
    case USER_LOGOUT:
      return {

      };
    case USER_FORGET:
      return {

      };
    default:
        return state;
  }
}

function menuReducer(state = null, action) {
  switch (action.type) {
    case GET_MENU:
      return [
        ...action.payload
      ];
    default:
      return state;
  }
}

function dictReducer(state = null,action) {
  switch (action.type) {
    case GET_DICT:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}


export default {
    userReducer,
    menuReducer,
    dictReducer,
    monitorReducer,
    sysnodeReducer,
    versionReducer,
    alertDefReducer,
    taskdefReducer,
}
