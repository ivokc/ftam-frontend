import {alertEventListInterface,alertEventDealInterface} from './Interface';
import {getalertEventListAction} from './dataflow/Action';

async function alertEventListTask(dispatch){
  try {
    let response = await alertEventListInterface();
    dispatch(getalertEventListAction(response));
  }catch(error){
    console.log(error)
  }
}

async function alertEventDealTask(params,dispatch){
  try {
    await alertEventDealInterface(params);
    alertEventListTask(dispatch)
  }catch(error){
    console.log(error)
  }
}


export {
  alertEventListTask,
  alertEventDealTask
};
