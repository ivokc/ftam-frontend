import { connect } from 'react-redux';
import MissionView from '../view/MissionView';
import {} from '../vendor/Task';


const monitorInit = async () => {
  // let response = await taskMonitorTask();
  // global.Just.log('MonitorContainer',response);

  // dispatch(loginAction(params));
  // global.JJmHistory.push('/home');
}




const mapStateToProps = (state) => {
  global.Just.log('MissionContainer',state);
  return {

  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  global.Just.log('MissionContainer',ownProps);

  return {
    monitorInit: (params) => monitorInit({params,dispatch,ownProps})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(MissionView);
