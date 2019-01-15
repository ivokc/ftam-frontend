

function taskdefListInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.taskdefList,params);
}


export {
  taskdefListInterface
}
