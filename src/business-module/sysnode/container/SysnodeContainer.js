import React from 'react';
import { connect } from 'react-redux';
import SysnodeView from '../view/SysnodeView';
import {taskMonitorTask} from '../vendor/Task';


const monitorInit = async () => {
  // let response = await taskMonitorTask();
  // global.Just.log('MonitorContainer',response);

  // dispatch(loginAction(params));
  // global.JJmHistory.push('/home');
}




const mapStateToProps = (state) => {
  global.Just.log('SysnodeContainer',state);
  return {

  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  global.Just.log('SysnodeContainer',ownProps);

  return {
    monitorInit: (params) => monitorInit({params,dispatch,ownProps})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(SysnodeView);
