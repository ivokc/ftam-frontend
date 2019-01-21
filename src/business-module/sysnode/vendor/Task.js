import {
  sysnodeListInterface,
  sysInsertInterface,
  nodeInsertInterface,
  sysUpdateInterface,
  nodeUpdateInterface,
  nodeDeleteInterface,
  sysDeleteInterface
} from './Interface';
import {getSysnodeListAction} from './dataflow/Action';

async function sysnodeListTask(dispatch){
  try {
    let sysnodeList = await sysnodeListInterface();
    dispatch(getSysnodeListAction(sysnodeList));

  }catch(error){}
}

async function sysInsertTask(params,dispatch) {

  try {
    await sysInsertInterface(params);
    sysnodeListTask(dispatch);
  } catch (error) {
  }
}

async function nodeInsertTask(params,dispatch) {
  try {
    await nodeInsertInterface(params);
    sysnodeListTask(dispatch);
  } catch (error) {
  }
}

async function sysUpdateTask(params,dispatch) {

  try {
    await sysUpdateInterface(params);
    sysnodeListTask(dispatch);
  } catch (error) {
  }
}

async function nodeUpdateTask(params,dispatch) {
  try {
    await nodeUpdateInterface(params);
    sysnodeListTask(dispatch);
  } catch (error) {
  }
}
async function sysDeleteTask(params,dispatch) {
  try {
    await sysDeleteInterface(params);
    sysnodeListTask(dispatch);
  } catch (error) {
  }
}
async function nodeDeleteTask(params,dispatch) {
  try {
    await nodeDeleteInterface(params);
    sysnodeListTask(dispatch);
  } catch (error) {
  }
}

export {
  sysnodeListTask,
  sysInsertTask,
  nodeInsertTask,
  sysUpdateTask,
  nodeUpdateTask,
  sysDeleteTask,
  nodeDeleteTask,
};
