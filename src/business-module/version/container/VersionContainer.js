import { connect } from 'react-redux';
import VersionView from '../view/VersionView';
import {} from '../vendor/Task';


const monitorInit = async () => {
  // let response = await taskMonitorTask();
  // global.Just.log('MonitorContainer',response);

  // dispatch(loginAction(params));
  // global.JJmHistory.push('/home');
}




const mapStateToProps = (state) => {
  global.Just.log('VersionContainer',state);
  return {

  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  global.Just.log('VersionContainer',ownProps);

  return {
    monitorInit: (params) => monitorInit({params,dispatch,ownProps})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(VersionView);
