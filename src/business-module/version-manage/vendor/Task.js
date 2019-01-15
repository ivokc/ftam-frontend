import {versionManageListInterface} from './Interface';
import {getVersionManageListAction} from './dataflow/Action';

async function versionManageListTask(dispatch){
  try {
    let versionList = await versionManageListInterface();
    dispatch(getVersionManageListAction(versionList));

  }catch(error){
  }
}

export {
  versionManageListTask
};
