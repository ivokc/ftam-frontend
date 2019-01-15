import { connect } from 'react-redux';
import TaskdefView from '../view/TaskdefView';
import {taskdefListTask} from '../vendor/Task';


const taskdefInit = (params={},dispatch) => {
  taskdefListTask(dispatch);

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
  
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(TaskdefView);
