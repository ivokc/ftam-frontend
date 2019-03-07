
//拉预警定义表
function alertDefListInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.alertDefList,params);
}

//新增预警定义
function alertDefInsertInterface({alertCycle,alertDefId,alertDefName,alertImpl,alertLevel,alertRemark,alertTime,taskDefId}) {

  const params = {
    alertCycle, //	预警周期
    alertDefId, //	预警定义编号
    alertDefName,	//预警定义名称
    alertImpl,	//预警实现
    alertLevel, //	预警级别
    alertRemark,	//预警描述
    alertTime:alertTime.format('HH:mm:ss'), //	预警时间
    taskDefId, //	任务定义编号
  }
  

  return global.Just.postRequest(global.Url.alertDefInsert,params);
}

//修改预警定义
function alertDefUpdateInterface({alertCycle,alertDefId,alertDefName,alertImpl,alertLevel,alertRemark,alertTime,taskDefId}) {

  const params = {
    alertCycle, //	预警周期
    alertDefId, //	预警定义编号
    alertDefName,	//预警定义名称
    alertImpl,	//预警实现
    alertLevel, //	预警级别
    alertRemark,	//预警描述
    alertTime:alertTime.format('HH:mm:ss'), //	预警时间
    taskDefId, //	任务定义编号
  }
  

  return global.Just.postRequest(global.Url.alertDefUpdate,params);
}
//删除预警定义
function alertDefDeleteInterface({alertDefId}) {

  const params = {
    alertDefId
  }
  return global.Just.postRequest(global.Url.alertDefDelete+`/${alertDefId}`,params);
}

export {
  alertDefListInterface,
  alertDefInsertInterface,
  alertDefUpdateInterface,
  alertDefDeleteInterface
}
