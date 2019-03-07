import { connect } from 'react-redux';
import AlertDefView from '../view/AlertDefView';
import {alertDefListTask,alertDefInsertTask,alertDefUpdateTask,alertDefDeleteTask} from '../vendor/Task';
import {taskdefListTask} from '../../task-def/vendor/Task';



const alertDefInit = (params={},dispatch) => {
  alertDefListTask(dispatch);
  taskdefListTask(dispatch);
}
const alertDefInsert = (params={},dispatch) => {
  alertDefInsertTask(params,dispatch);
}

const alertDefUpdate = (params={},dispatch) => {
  alertDefUpdateTask(params,dispatch)
}

const alertDefDelete = (params={},dispatch) => {
  alertDefDeleteTask(params,dispatch)
} 



const mapStateToProps = (state) => {
  return {
    alertDefList: state.alertDefReducer,
    taskdefList: state.taskdefReducer,
    dictInfo:state.dictReducer,
    searchText:state.searchReducer.searchText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    alertDefInit: (params) => alertDefInit(params,dispatch),
    alertDefInsert: (params) => alertDefInsert(params,dispatch),
    alertDefUpdate: (params) => alertDefUpdate(params,dispatch),
    alertDefDelete: (params) => alertDefDelete(params,dispatch)
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(AlertDefView);
