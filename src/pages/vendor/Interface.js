
/*
* 测试接口
*/
function testInterface() {
  const params = {
    a:1,
    b:2,
    c:'123'
  };
  return global.Just.postRequest('/test1.txt',params);
}
/*
* 登录接口
*/
function loginInterface({username,password}) {
  const params = {
    username,
    password,
  };
  return global.Just.postRequest(global.Url.login,params);
  // return Promise.resolve({
  //   "attributeKeys": [
  //       "org.apache.shiro.subject.support.DefaultSubjectContext_AUTHENTICATED_SESSION_KEY",
  //       "org.apache.shiro.web.session.HttpServletSession.HOST_SESSION_KEY",
  //       "org.apache.shiro.subject.support.DefaultSubjectContext_PRINCIPALS_SESSION_KEY"
  //   ],
  //   "host": "127.0.0.1",
  //   "id": "C8817758B2A914F6626F0DF3137B2FF1",
  //   "lastAccessTime": 1545981694003,
  //   "startTimestamp": 1545979514081,
  //   "timeout": 1800000
  // });
}

/*
* 获取菜单接口
*/
function menuInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.menu,params);
  // return Promise.resolve([
  //   {
  //       "attributes": {
  //           "icon": "",
  //           "url": ""
  //       },
  //       "checked": false,
  //       "children": [],
  //       "hasChildren": false,
  //       "hasParent": false,
  //       "id": "112",
  //       "parentId": "0",
  //       "text": "监控"
  //   },
  //   {
  //       "attributes": {
  //           "icon": "",
  //           "url": ""
  //       },
  //       "checked": false,
  //       "children": [],
  //       "hasChildren": false,
  //       "hasParent": false,
  //       "id": "113",
  //       "parentId": "0",
  //       "text": "版本管理"
  //   },
  //   {
  //       "attributes": {
  //           "url": ""
  //       },
  //       "checked": false,
  //       "children": [],
  //       "hasChildren": false,
  //       "hasParent": false,
  //       "id": "116",
  //       "parentId": "0",
  //       "text": "任务定义管理"
  //   },
  //   {
  //       "attributes": {},
  //       "checked": false,
  //       "children": [],
  //       "hasChildren": false,
  //       "hasParent": false,
  //       "id": "119",
  //       "parentId": "0",
  //       "text": "节点管理"
  //   },
  //   {
  //       "attributes": {},
  //       "checked": false,
  //       "children": [],
  //       "hasChildren": false,
  //       "hasParent": false,
  //       "id": "120",
  //       "parentId": "0",
  //       "text": "版本更新"
  //   },
  //   {
  //       "attributes": {},
  //       "checked": false,
  //       "children": [],
  //       "hasChildren": false,
  //       "hasParent": false,
  //       "id": "121",
  //       "parentId": "0",
  //       "text": "预警定义"
  //   }
  // ]);
}
/*
* 获取字典接口
*/
function dictInterface() {
  const params = {

  };
  return global.Just.postRequest(global.Url.allDicts,params);
  // return Promise.resolve({
  //   "task_status": {
  //       "dictTypeCode": "task_status",
  //       "dictTypeName": "任务状态",
  //       "items": [
  //           {
  //               "code": "0",
  //               "dictType": "任务状态",
  //               "name": "创建"
  //           },
  //           {
  //               "code": "1",
  //               "dictType": "任务状态",
  //               "name": "传送中"
  //           },
  //           {
  //               "code": "2",
  //               "dictType": "任务状态",
  //               "name": "暂停中"
  //           },
  //           {
  //               "code": "-1",
  //               "dictType": "任务状态",
  //               "name": "发送失败"
  //           }
  //       ]
  //   },
  //   "sysnode_currentstatus": {
  //       "dictTypeCode": "sysnode_currentstatus",
  //       "dictTypeName": "节点状态",
  //       "items": [
  //           {
  //               "code": "-2",
  //               "dictType": "节点状态",
  //               "name": "无响应"
  //           },
  //           {
  //               "code": "-1",
  //               "dictType": "节点状态",
  //               "name": "无法连接"
  //           },
  //           {
  //               "code": "0",
  //               "dictType": "节点状态",
  //               "name": "未知"
  //           },
  //           {
  //               "code": "1",
  //               "dictType": "节点状态",
  //               "name": "有连接无响应"
  //           },
  //           {
  //               "code": "2",
  //               "dictType": "节点状态",
  //               "name": "正常响应"
  //           }
  //       ]
  //   },
  //   "sysnode_enable": {
  //       "dictTypeCode": "sysnode_enable",
  //       "dictTypeName": "节点启用情况",
  //       "items": [
  //           {
  //               "code": "0",
  //               "dictType": "节点启用情况",
  //               "name": "禁用"
  //           },
  //           {
  //               "code": "1",
  //               "dictType": "节点启用情况",
  //               "name": "启用"
  //           }
  //       ]
  //   },
  //   "taskdef_status": {
  //       "dictTypeCode": "taskdef_status",
  //       "dictTypeName": "任务定义状态",
  //       "items": [
  //           {
  //               "code": "0",
  //               "dictType": "任务定义状态",
  //               "name": "失效"
  //           },
  //           {
  //               "code": "1",
  //               "dictType": "任务定义状态",
  //               "name": "生效"
  //           }
  //       ]
  //   }
  // });
}





export {
  testInterface,
  loginInterface,
  menuInterface,
  dictInterface,
}
