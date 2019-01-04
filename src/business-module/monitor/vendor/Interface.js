

function taskMonitorInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.taskMonitor,params);
}
function sysnodeMonitorInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.sysnodeMonitor,params);
}

export {
  taskMonitorInterface,
  sysnodeMonitorInterface
}
