

function taskdefListInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.taskdefList,params);
}

function taskdeftasktriggerInsertInterface({destNode,destPath,endTime,
  options,defremark,srcFileRule,srcNode,srcPath,startTime,status,
  syncStatus,taskDefName,taskDefType,cronCause,interval,intervalUnit,triggerremark,taskDefId,trigerType}) {
  const params = {
    taskDef: {
      destPath,
      destNode,
      endTime:endTime.format('YYYY-MM-DD HH:mm:ss'),
      options,
      remark:defremark,
      srcFileRule,
      srcNode,
      srcPath,
      startTime:startTime.format('YYYY-MM-DD HH:mm:ss'),
      status,
      syncStatus,
      // taskDefId
      taskDefName,
      taskDefType,
    },
    taskTrigger: {
      cronCause,
      interval,
      intervalUnit,
      remark:triggerremark,
      // taskDefId,
      // trigerId,
      trigerType,
    }
  };
  return global.Just.postRequest(global.Url.taskdeftasktriggerInsert,params);
}

function taskdefUpdateInterface({destNode,destPath,endTime,
  options,defremark,srcFileRule,srcNode,srcPath,startTime,status,taskDefId,
  syncStatus,taskDefName,taskDefType}) {
  const params = {
    destNode, 	//目标节点
    destPath, 	//目标路径
    endTime:endTime.format('YYYY-MM-DD HH:mm:ss'), 	//生效结束时间
    options, 	//任务选项
    remark:defremark, 	//备注
    srcFileRule, 	//源文件规则
    srcNode, 	//源节点
    srcPath, 	//源路径
    startTime:startTime.format('YYYY-MM-DD HH:mm:ss'), 	//生效起始时间
    status, 	//状态
    syncStatus,	//同步状态
    taskDefId,	//任务定义编号
    taskDefName, 	//任务定义名称
    taskDefType, 	//任务类型
  };
  return global.Just.postRequest(global.Url.taskdefUpdate,params);
}

function tasktriggerUpdateInterface({trigerId,cronCause,interval,intervalUnit,triggerremark,taskDefId,trigerType}) {
  const params = {
    cronCause,// 	Cron表达式
    interval,//	时间间隔
    intervalUnit,// 	间隔单位
    remark:triggerremark,//	备注
    taskDefId,// 	任务定义编号
    trigerId,//	任务触发编号
    trigerType,//	触发类型
  };
  return global.Just.postRequest(global.Url.tasktriggerUpdate,params);
}
function taskdefDeleteInterface({taskDefId}) {
  const params = {
    taskDefId,	//任务定义编号

  };
  return global.Just.postRequest(global.Url.taskdefDelete+`/${taskDefId}`,params);
}
function taskdefSyncInterface({taskDefId}) {
  const params = {
    taskDefId,	//任务定义编号

  };
  return global.Just.postRequest(global.Url.taskdefSync+`/${taskDefId}`,params);
}
function taskdefTestInterface({taskDefId}) {
  const params = {
    taskDefId,	//任务定义编号
  };
  return global.Just.postRequest(global.Url.taskdefTest+`/${taskDefId}`,params);
}
function taskdefEnableInterface({taskDefId}) {
  const params = {
    taskDefId,	//任务定义编号
  };
  return global.Just.postRequest(global.Url.tasktriggerUpdate+`/${taskDefId}`,params);
}
function taskdefDisableInterface({taskDefId}) {
  const params = {
    taskDefId,	//任务定义编号
  };
  return global.Just.postRequest(global.Url.tasktriggerUpdate+`/${taskDefId}`,params);
}


export {
  taskdefListInterface,
  taskdeftasktriggerInsertInterface,
  taskdefUpdateInterface,
  tasktriggerUpdateInterface,
  taskdefDeleteInterface,
  taskdefSyncInterface,
  taskdefTestInterface,
  taskdefEnableInterface,
  taskdefDisableInterface,
}
