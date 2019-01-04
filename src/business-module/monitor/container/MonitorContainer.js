import { connect } from 'react-redux';
import MonitorView from '../view/MonitorView';
import {monitorInitTask} from '../vendor/Task';


const handleMonitorInit = ({params,dispatch}) => {
  monitorInitTask(dispatch);


}




const mapStateToProps = (state) => {
  global.Just.log('MonitorContainer',state);
  return {
    task:state.monitorReducer.task,
    sysnode:state.monitorReducer.sysnode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleMonitorInit: (params) => handleMonitorInit({params,dispatch})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(MonitorView);
