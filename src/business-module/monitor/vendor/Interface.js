

function taskMonitorInterface() {
  const params = {

  };
  // return global.Just.postRequest(global.Url.taskMonitor,params);

  let task = [];
  for (let i = 0; i < 100000; i++) {

    let subTask = [];
    
    for (let j = 0; j < 5; j++) {
      subTask.push({
        "createTime": 1545970888000,
        "destNode": "影像平台node" + j,
        "destPath": "/var/ftam",
        "options": "1",
        "pTaskId": "1",
        "sentParts": 5,
        "sentSize": 1,
        "splitParts": 11,
        "status": global.Just.randomNum(0,2),
        "taskId": Math.random(),
        "tryTimes": 2,
        "updateTime": 1545970891000,
        "transferPercent":global.Just.randomNum(0,100),
      });
    }
    task.push({
      "subTaskEntity": subTask,
      "task": {
          "checkTimes": 2,
          "createTime": 1545970270000,
          "fileCreateTime": 1224,
          "fileName": "test.txt",
          "fileSize": global.Just.randomNum(0,100),
          "options": "分块",
          "scanPath": "/usr/local",
          "srcNode": "t24节点"+ i,
          "status": global.Just.randomNum(0,2),
          "taskDefId": "2",
          "taskId": "1",
          "updateTime": 1545970276000
      }
    });
  }

  return Promise.resolve(task);
}
function sysnodeMonitorInterface() {
  const params = {

  };
  // return global.Just.postRequest(global.Url.sysnodeMonitor,params);
  return Promise.resolve([
      {
          "sysnodenum": 2,
          "sysnodestatus": 0
      },
      {
          "sysnodenum": 2,
          "sysnodestatus": 1
      },
      {
          "sysnodenum": 1,
          "sysnodestatus": 2
      }
  ]);

}

export {
  taskMonitorInterface,
  sysnodeMonitorInterface
}
