
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
    alertTime, //	预警时间
    taskDefId, //	任务定义编号
  }

  return global.Just.postRequest(global.Url.alertDefInsert,params);
  // return Promise.resolve([{"sys":{"pasoCode":"T24","remark":"测试数据","seqNo":1,"subSeqNo":1,"sysCode":"1","sysName":"T24"},"sysNode":[{"currentStatus":1,"enable":1,"host":"192.168.1.1","nodeCode":"1","nodeName":"T24节点1","port":88,"remark":"测试数据","seqNo":1,"sysCode":"1","user":"root","version":"1.0"},{"currentStatus":1,"enable":0,"host":"192.168.1.2","nodeCode":"2","nodeName":"T24节点2","port":89,"remark":"测试数据","seqNo":2,"sysCode":"1","user":"t24","version":"1.1"}]},{"sys":{"pasoCode":"UID","remark":"测试数据","seqNo":2,"subSeqNo":1,"sysCode":"2","sysName":"影像平台"},"sysNode":[{"currentStatus":-2,"enable":1,"host":"192.168.2.3","nodeCode":"10","nodeName":"影像平台节点1","port":88,"remark":"测试数据1","seqNo":0,"sysCode":"2","user":"uiduser","version":"v1.0"},{"currentStatus":-2,"enable":1,"host":"192.168.2.3","nodeCode":"11","nodeName":"影像平台节点1","port":89,"remark":"测试数据1","seqNo":50,"sysCode":"2","user":"uiduser","version":"v1.0"}]},{"sys":{"pasoCode":"ESB","remark":"测试数据","seqNo":3,"subSeqNo":1,"sysCode":"3","sysName":"数据总线"},"sysNode":[{"currentStatus":0,"enable":1,"host":"192.168.1.3","nodeCode":"3","nodeName":"数据总线节点","port":90,"remark":"测试数据","seqNo":3,"sysCode":"3","user":"esb","version":"1.0"}]},{"sys":{"pasoCode":"JAVAPLAT","remark":"测试数据","seqNo":4,"subSeqNo":2,"sysCode":"4","sysName":"Java平台"},"sysNode":[{"currentStatus":0,"enable":1,"host":"192.168.1.4","nodeCode":"4","nodeName":"Java平台节点","port":91,"remark":"测试数据","seqNo":1,"sysCode":"4","user":"java","version":"2.0"}]},{"sys":{"pasoCode":"ehr考勤系统","remark":"测试数据2","seqNo":1,"subSeqNo":3,"sysCode":"ehr","sysName":"人力资源"},"sysNode":[{"currentStatus":0,"enable":0,"host":"192.168.1.1","nodeCode":"7","nodeName":"string","port":898,"remark":"string","seqNo":0,"sysCode":"ehr","user":"string","version":"string"},{"currentStatus":0,"enable":0,"host":"192.168.2.1","nodeCode":"8","nodeName":"string","port":898,"remark":"string","seqNo":1,"sysCode":"ehr","user":"string","version":"string"},{"currentStatus":-2,"enable":1,"host":"192.168.1.1","nodeCode":"9","nodeName":"string","port":8,"remark":"测试数据","seqNo":9,"sysCode":"ehr","user":"admin","version":"测试数据"}]},{"sys":{"pasoCode":"ftam","remark":"测试数据","seqNo":1,"subSeqNo":2,"sysCode":"ftam","sysName":"文件传输平台"},"sysNode":[]},{"sys":{"pasoCode":"hdq","remark":"测试数据","seqNo":2,"subSeqNo":-1,"sysCode":"hdq","sysName":"历史账户查询"},"sysNode":[]},{"sys":{"pasoCode":"电话银行","remark":"测试数据","seqNo":1,"subSeqNo":3,"sysCode":"telebank","sysName":"电话银行"},"sysNode":[]},{"sys":{"pasoCode":"fasd","remark":"asdf","seqNo":1,"subSeqNo":4,"sysCode":"adf","sysName":"asdd"},"sysNode":[]}])
}

export {
  alertDefListInterface,
  alertDefInsertInterface
}
