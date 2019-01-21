
//拉预警定义表
function alertEventListInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.alertEventList,params);
}

export {
  alertEventListInterface,
}
