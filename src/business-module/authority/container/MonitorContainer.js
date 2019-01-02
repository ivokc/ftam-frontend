import React from 'react';
import { connect } from 'react-redux';
import MonitorView from '../view/MonitorView';
import {taskMonitorTask} from '../vendor/Task';


const monitorInit = async () => {
  // let response = await taskMonitorTask();
  // global.Just.log('MonitorContainer',response);

  // dispatch(loginAction(params));
  // global.JJmHistory.push('/home');
}




const mapStateToProps = (state) => {
  global.Just.log('MonitorContainer',state);
  return {

  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  global.Just.log('MonitorContainer',ownProps);

  return {
    monitorInit: (params) => monitorInit({params,dispatch,ownProps})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(MonitorView);
