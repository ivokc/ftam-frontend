import {loginInterface ,menuInterface,testInterface} from './Interface';

function loginTask(params) {
  return loginInterface(params);
}
function menuTask(){
  return menuInterface();
}
function testTask(){
  return testInterface();
}

export {
  loginTask,
  menuTask,
  testTask
};
