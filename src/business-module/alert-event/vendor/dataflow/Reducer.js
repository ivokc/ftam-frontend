import {GET_ALERTEVENT_LIST} from './Action';


function alertEventReducer(state = null, action){
  switch (action.type) {
    case GET_ALERTEVENT_LIST:
      return [
        ...action.payload
      ];
    default:
        return state;
  }
}

export {
  alertEventReducer,
}
