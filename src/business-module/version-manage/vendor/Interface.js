
function versionManageListInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.versionList,params);
}


//新增版本
function versionInsertInterface({createtime,filename,remark,status,updatetime,verId,version}) {
  const params = {
    createtime, //	创建时间
    filename, //	更新包
    remark,	//描述
    status:0, //	状态
    updatetime, //	更新时间
    verId, //	编号
    version, //	版本号
  };
  return global.Just.postRequest(global.Url.versionInsert,params);
}
//修改版本
function versionUpdateInterface({createtime,filename,remark,status,updatetime,verId,version}) {
  const params = {
    createtime, //	创建时间
    filename, //	更新包
    remark,	//描述
    status, //	状态
    updatetime, //	更新时间
    verId, //	编号
    version, //	版本号
  };
  return global.Just.postRequest(global.Url.versionUpdate,params);
}
//新增版本
function versionDeleteInterface({verId}) {
  const params = {
  };
  return global.Just.postRequest(global.Url.versionDelete+ `/${verId}`,params);
}



export {
  versionManageListInterface,
  versionInsertInterface,
  versionUpdateInterface,
  versionDeleteInterface,

}
