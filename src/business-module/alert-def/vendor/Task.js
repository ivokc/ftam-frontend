import {alertDefListInterface,alertDefInsertInterface} from './Interface';
import {getAlertDefListAction} from './dataflow/Action';

async function alertDefListTask(dispatch){
  try {
    let response = await alertDefListInterface();
    dispatch(getAlertDefListAction(response));
  }catch(error){
  }
}
async function alertDefInsertTask(params,dispatch){
  try {
    await alertDefInsertInterface(params);
    alertDefListTask(dispatch)
  }catch(error){
  }
}

export {
  alertDefListTask,
  alertDefInsertTask
};
