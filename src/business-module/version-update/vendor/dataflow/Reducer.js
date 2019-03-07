import {GET_VERSIONUPDATE_LIST} from './Action';


function versionUpdateReducer(state = null, action){
  switch (action.type) {
    case GET_VERSIONUPDATE_LIST:
      return [
        ...action.payload
      ];
    default:
        return state;
  }
}

export {
  versionUpdateReducer,
}
