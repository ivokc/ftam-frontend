import {loginInterface ,menuInterface,testInterface, dictInterface} from './Interface';
import {loginAction,getMenuAction,getDictAction} from '../../dataflow/Action';


function testTask(){
  return testInterface();
}

async function loginTask(params,dispatch) {
  try {
    let userInfo = await loginInterface(params);
    dispatch(loginAction({
      ...params,
      ...userInfo
    }));

  }catch(error){}
  
}

async function menuTask(dispatch){
  try{
    let response = await menuInterface();
    dispatch(getMenuAction(response))
  }catch(error){}
}

async function dictTask(dispatch) {
  try {
    let dicts = await dictInterface();
    dispatch(getDictAction(dicts));

  }catch(error){}
}


export {
  loginTask,
  menuTask,
  dictTask,
  testTask
};
