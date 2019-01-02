import { connect } from 'react-redux';
import MonitorView from '../view/MonitorView';
import {taskMonitorTask} from '../vendor/Task';


const handleMonitorInit = async () => {
  // let response = await taskMonitorTask();


}




const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    handleMonitorInit: (params) => handleMonitorInit({params,dispatch,ownProps})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(MonitorView);
