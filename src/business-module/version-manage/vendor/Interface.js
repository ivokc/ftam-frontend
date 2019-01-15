

function versionManageListInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.versionList,params);
}


export {
  versionManageListInterface
}
