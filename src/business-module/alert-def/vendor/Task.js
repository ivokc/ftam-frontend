import {alertDefListInterface,alertDefInsertInterface,alertDefUpdateInterface,alertDefDeleteInterface} from './Interface';
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
    console.log(error)
  }
}

async function alertDefUpdateTask(params,dispatch){
  try {
    await alertDefUpdateInterface(params);
    alertDefListTask(dispatch)
  }catch(error){
    console.log(error)
  }
}

async function alertDefDeleteTask(params,dispatch){
  try {
    await alertDefDeleteInterface(params);
    alertDefListTask(dispatch)
  }catch(error){
    console.log(error)
  }
}

export {
  alertDefListTask,
  alertDefInsertTask,
  alertDefUpdateTask,
  alertDefDeleteTask
};
