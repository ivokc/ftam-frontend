import {GET_VERSIONMANAGE_LIST} from './Action';


function versionManageReducer(state = null, action){
  switch (action.type) {
    case GET_VERSIONMANAGE_LIST:
      return [
        ...action.payload
      ];
    default:
        return state;
  }
}

export {
  versionManageReducer,
}
