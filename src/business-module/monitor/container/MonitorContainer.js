import { connect } from 'react-redux';
import MonitorView from '../view/MonitorView';
import {monitorInitTask} from '../vendor/Task';


const handleMonitorInit = ({params,dispatch}) => {
  monitorInitTask(dispatch);

}




const mapStateToProps = (state) => {
  return {
    task:state.monitorReducer.task,
    sysnode:state.monitorReducer.sysnode,
    dictInfo:state.dictReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleMonitorInit: (params) => handleMonitorInit({params,dispatch})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(MonitorView);
