import {alertEventListInterface} from './Interface';
import {getalertEventListAction} from './dataflow/Action';

async function alertEventListTask(dispatch){
  try {
    let response = await alertEventListInterface();
    dispatch(getalertEventListAction(response));
  }catch(error){
  }
}


export {
  alertEventListTask,
};
