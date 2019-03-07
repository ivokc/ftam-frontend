import { connect } from 'react-redux';
import VersionManageView from '../view/VersionManageView';
import {versionManageListTask} from '../vendor/Task';
import {versionInsertInterface,
  versionUpdateInterface,
  versionDeleteInterface,} from '../vendor/Interface';



const versionManageInit = (params={},dispatch) => {
  versionManageListTask(dispatch);
}
const versionInsert = async (params={},dispatch) => {
  console.log('versionInsert',params);
  
  await versionInsertInterface(params);
  versionManageListTask(dispatch);

}
const versionUpdate = async (params={},dispatch) => {
  console.log('versionUpdate',params);
  await versionUpdateInterface(params);
  versionManageListTask(dispatch);
  
}
const versionDelete = async (params={},dispatch) => {
  console.log('versionDelete',params);
  await versionDeleteInterface(params);
  versionManageListTask(dispatch);
}




const mapStateToProps = (state) => {
  return {
    versionList: state.versionManageReducer,
    dictInfo:state.dictReducer,
    searchText:state.searchReducer.searchText

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    versionManageInit: (params) => versionManageInit(params,dispatch),
    versionInsert: (params) => versionInsert(params,dispatch),
    versionUpdate: (params) => versionUpdate(params,dispatch),
    versionDelete: (params) => versionDelete(params,dispatch)
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(VersionManageView);
