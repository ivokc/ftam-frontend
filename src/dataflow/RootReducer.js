import {USER_LOGIN,USER_LOGOUT,USER_FORGET,GET_MENU} from './Action';
import {monitorReducer} from '../business-module/monitor/vendor/dataflow/Reducer';

function userReducer(state = null, action){
  switch (action.type) {
    case USER_LOGIN:
      global.Just.log('userReducer',action);

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



export default {
    userReducer,
    menuReducer,
    monitorReducer
}
