import React from 'react';
import { connect } from 'react-redux';
import SysnodeView from '../view/SysnodeView';
import {sysnodeListTask} from '../vendor/Task';


const sysnodeInit = ({params,dispatch}) => {
  sysnodeListTask(dispatch);

}




const mapStateToProps = (state) => {
  global.Just.log('SysnodeContainer',state);
  return {

  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    sysnodeInit: (params) => sysnodeInit({params,dispatch})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(SysnodeView);
