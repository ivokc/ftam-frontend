import {sysnodeListInterface} from './Interface';
import {getSysnodeListAction} from './dataflow/Action';

async function sysnodeListTask(dispatch){
  try {
    let sysnodeList = await sysnodeListInterface();
    dispatch(getSysnodeListAction(sysnodeList));

  }catch(error){}
}


export {
  sysnodeListTask
};
