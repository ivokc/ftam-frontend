
//拉预警定义表
function alertEventListInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.alertEventList,params);
}
//预警事件处理
function alertEventDealInterface({alertDefId,alertLevel,dealing,eventId,eventLevel,eventRemark}) {
  const params = {
    alertDefId,// 	预警定义编号
    alertLevel,// 	预警级别
    dealing,// 	事件处理
    eventId,// 	事件编号
    eventLevel,// 	事件级别
    eventRemark,// 	事件描述
  };
  return global.Just.postRequest(global.Url.alertevent_deal,params);
}

export {
  alertEventListInterface,
  alertEventDealInterface
}
