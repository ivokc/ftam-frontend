import {USER_LOGIN,USER_LOGOUT,USER_FORGET,GET_MENU,SELECT_MENU,GET_DICT,ENTER_SEARCH} from './Action';
import {monitorReducer} from '../business-module/monitor/vendor/dataflow/Reducer';
import {sysnodeReducer} from '../business-module/sysnode/vendor/dataflow/Reducer';
import {versionManageReducer} from '../business-module/version-manage/vendor/dataflow/Reducer';
import {versionUpdateReducer} from '../business-module/version-update/vendor/dataflow/Reducer';
import {alertDefReducer} from '../business-module/alert-def/vendor/dataflow/Reducer';
import {taskdefReducer} from '../business-module/task-def/vendor/dataflow/Reducer';
import {alertEventReducer} from '../business-module/alert-event/vendor/dataflow/Reducer';




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

function searchReducer(state = {searchText:''}, action) {
  switch (action.type) {
    case ENTER_SEARCH:
      return {
        searchText: action.payload
      }
    default:
      return state;
  }
}

function menuReducer(state = {selected:'monitor',menus:null}, action) {
  switch (action.type) {
    case GET_MENU:
      return {
        ...state,
        menus:[
          ...action.payload
        ]};

    case SELECT_MENU:
      return {
        ...state,
        selected: action.payload
      }
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
    searchReducer,
    menuReducer,
    dictReducer,
    monitorReducer,
    sysnodeReducer,
    versionManageReducer,
    alertDefReducer,
    taskdefReducer,
    alertEventReducer,
    versionUpdateReducer
}
