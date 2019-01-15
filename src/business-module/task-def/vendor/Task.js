import {taskdefListInterface} from './Interface';
import {getTaskdefListAction} from './dataflow/Action';


async function taskdefListTask(dispatch){
  try {
    let sysnodeList = await taskdefListInterface();
    dispatch(getTaskdefListAction(sysnodeList));

  }catch(error){}
}

export {
  taskdefListTask
};
