import { connect } from 'react-redux';
import SysnodeView from '../view/SysnodeView';
import {sysnodeListTask,sysInsertTask,nodeInsertTask,sysUpdateTask,nodeUpdateTask} from '../vendor/Task';


const sysnodeInit = (params={},dispatch) => {
  sysnodeListTask(dispatch);

}

const sysInsert = (params={},dispatch) => {

  sysInsertTask(params,dispatch)
}

const nodeInsert = (params={},dispatch) => {
  nodeInsertTask(params,dispatch)
}

const sysUpdate = (params={},dispatch) => {

  sysUpdateTask(params,dispatch)
}

const nodeUpdate = (params={},dispatch) => {
  nodeUpdateTask(params,dispatch)
}


const mapStateToProps = (state) => {
  return {
    sysnodeList: state.sysnodeReducer,
    dictInfo:state.dictReducer

  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    sysnodeInit: (params) => sysnodeInit(params,dispatch),
    sysInsert: (params) => sysInsert(params,dispatch),
    nodeInsert: (params) => nodeInsert(params,dispatch),
    sysUpdate: (params) => sysUpdate(params,dispatch),
    nodeUpdate: (params) => nodeUpdate(params,dispatch),
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(SysnodeView);
