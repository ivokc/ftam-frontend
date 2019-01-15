import {alertDefListInterface} from './Interface';
import {getAlertDefListAction} from './dataflow/Action';

async function alertDefListTask(dispatch){
  try {
    let response = await alertDefListInterface();

    dispatch(getAlertDefListAction(response));

  }catch(error){
    global.Just.log('foasjfoidf|error',error);
  }
}

export {
  alertDefListTask
};
