import {
  taskdefListInterface,
  taskdeftasktriggerInsertInterface,
  taskdefUpdateInterface,
  tasktriggerUpdateInterface,
  taskdefDeleteInterface,
  taskdefSyncInterface,
  taskdefTestInterface,
  taskdefEnableInterface,
  taskdefDisableInterface,
} from './Interface';
import {getTaskdefListAction} from './dataflow/Action';


async function taskdefListTask(dispatch){
  try {
    let sysnodeList = await taskdefListInterface();
    dispatch(getTaskdefListAction(sysnodeList));

  }catch(error){}
}
async function taskdeftasktriggerInsertTask(params,dispatch){
  try {
    await taskdeftasktriggerInsertInterface(params);
    taskdefListTask(dispatch);

  }catch(error){}
}
async function taskdefUpdateTask(params,dispatch){
  try {
    await taskdefUpdateInterface(params);
    taskdefListTask(dispatch);

  }catch(error){}
}
async function tasktriggerUpdateTask(params,dispatch){
  try {
    await tasktriggerUpdateInterface(params);
    taskdefListTask(dispatch);

  }catch(error){}
}
async function taskdefDeleteTask(params,dispatch){
  try {
    await taskdefDeleteInterface(params);
    taskdefListTask(dispatch);

  }catch(error){}
}
async function taskdefSyncTask(params,dispatch){
  try {
    await taskdefSyncInterface(params);
    taskdefListTask(dispatch);

  }catch(error){}
}
async function taskdefTestTask(params,dispatch){
  try {
    await taskdefTestInterface(params);
    taskdefListTask(dispatch);

  }catch(error){}
}
async function taskdefEnableTask(params,dispatch){
  try {
    await taskdefEnableInterface(params);
    taskdefListTask(dispatch);

  }catch(error){}
}
async function taskdefDisableTask(params,dispatch){
  try {
    await taskdefDisableInterface(params);
    taskdefListTask(dispatch);

  }catch(error){}
}

export {
  taskdefListTask,
  taskdeftasktriggerInsertTask,
  taskdefUpdateTask,
  tasktriggerUpdateTask,
  taskdefDeleteTask,
  taskdefSyncTask,
  taskdefTestTask,
  taskdefEnableTask,
  taskdefDisableTask,
};
