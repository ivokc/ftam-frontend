import { connect } from 'react-redux';
import VersionUpdateView from '../view/VersionUpdateView';
import {versionManageListTask} from '../vendor/Task';



const versionManageInit = (params={},dispatch) => {
  versionManageListTask(dispatch);
}




const mapStateToProps = (state) => {
  return {
    versionList: state.versionReducer,
    dictInfo:state.dictReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    versionManageInit: (params) => versionManageInit(params,dispatch)
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(VersionUpdateView);
