

function sysnodeListInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.sysnodeList,params);
}


export {
  sysnodeListInterface
}
