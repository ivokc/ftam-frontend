

/*
* 登录接口
*/
function loginInterface({username,password}) {
  const params = {
    username,
    password,
  };
  return global.Just.postRequest(global.Url.login,params);
}

/*
* 获取菜单接口
*/
function menuInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.menu,params);
}
/*
* 测试接口
*/
function testInterface() {
  const params = {
    a:1,
    b:2,
    c:'123'
  };
  return global.Just.postRequest('/test1.txt',params);
}




export {
  loginInterface,
  menuInterface,
  testInterface
}
