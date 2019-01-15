import {GET_ALERTDEF_LIST} from './Action';


function alertDefReducer(state = null, action){
  switch (action.type) {
    case GET_ALERTDEF_LIST:
      return [
        ...action.payload
      ];
    default:
        return state;
  }
}

export {
  alertDefReducer,
}
