import {loginInterface ,menuInterface,testInterface} from './Interface';
import {loginAction,getMenuAction} from '../../dataflow/Action';

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
    let menus = response.map((v) => {
    let key;
      switch (v.text) {
        case '监控':
          key = 'monitor';
          break;
        case '版本管理':
          key = 'versionManage';
        break;
        case '任务定义管理':
          key = 'mission';
        break;
        case '节点管理':
          key = 'sysnode';
        break;
        case '版本更新':
          key = 'versionUpdate';
        break;
        case '预警定义':
          key = 'alert';
        break;
        default: key = 'jjm'
      }
      return {
        key: key,
        text: v.text
      };
    });
    dispatch(getMenuAction(menus))
  }catch(error){}
}
function testTask(){
  return testInterface();
}

export {
  loginTask,
  menuTask,
  testTask
};
