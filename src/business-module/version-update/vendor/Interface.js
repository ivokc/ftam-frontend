

function sysNodeVersionlistInterface() {
  const params = {
  };
  return global.Just.postRequest(global.Url.sysNodeVersionlist,params);
}


export {
  sysNodeVersionlistInterface
}
