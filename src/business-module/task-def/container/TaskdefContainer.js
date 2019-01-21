import { connect } from 'react-redux';
import TaskdefView from '../view/TaskdefView';
import {
  taskdefListTask,
  taskdeftasktriggerInsertTask,
  taskdefUpdateTask,
  tasktriggerUpdateTask,
  taskdefDeleteTask,
  taskdefSyncTask,
  taskdefTestTask,
  taskdefEnableTask,
  taskdefDisableTask,
} from '../vendor/Task';


const taskdefInit = (params={},dispatch) => {
  taskdefListTask(dispatch);
}
const taskdeftasktriggerInsert = (params={},dispatch) => {
  taskdeftasktriggerInsertTask(params,dispatch);
}
const taskdefUpdate = (params={},dispatch) => {
  taskdefUpdateTask(params,dispatch);
}
const tasktriggerUpdate = (params={},dispatch) => {
  tasktriggerUpdateTask(params,dispatch);
}
const taskdefDelete = (params={},dispatch) => {
  taskdefDeleteTask(params,dispatch);
}
const taskdefSync = (params={},dispatch) => {
  taskdefSyncTask(params,dispatch);
}
const taskdefTest = (params={},dispatch) => {
  taskdefTestTask(params,dispatch);
}
const taskdefEnable = (params={},dispatch) => {
  taskdefEnableTask(params,dispatch);
}
const taskdefDisable = (params={},dispatch) => {
  taskdefDisableTask(params,dispatch);
}

const mapStateToProps = (state) => {
  return {
    taskdefList: state.taskdefReducer,
    dictInfo:state.dictReducer

  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    taskdefInit: (params) => taskdefInit(params,dispatch),
    taskdeftasktriggerInsert: (params) => taskdeftasktriggerInsert(params,dispatch),
    taskdefUpdate: (params) => taskdefUpdate(params,dispatch),
    tasktriggerUpdate: (params) => tasktriggerUpdate(params,dispatch),
    taskdefDelete: (params) => taskdefDelete(params,dispatch),
    taskdefSync: (params) => taskdefSync(params,dispatch),
    taskdefTest: (params) => taskdefTest(params,dispatch),
    taskdefEnable: (params) => taskdefEnable(params,dispatch),
    taskdefDisable: (params) => taskdefDisable(params,dispatch),
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(TaskdefView);
