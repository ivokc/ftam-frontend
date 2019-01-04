import {taskMonitorInterface,sysnodeMonitorInterface} from './Interface';
import {getTaskMonitorAction,getSysnodeMonitorAction} from './dataflow/Action';

async function monitorInitTask(dispatch){
  try {
    let [tasks, sysnode] = await Promise.all([taskMonitorInterface(), sysnodeMonitorInterface()]);
    dispatch(getTaskMonitorAction(tasks));
    dispatch(getSysnodeMonitorAction(sysnode));

  }catch(error){}
}


export {
  monitorInitTask
};
