import { connect } from 'react-redux';
import VersionUpdateView from '../view/VersionUpdateView';
import {sysNodeVersionlistInterface} from '../vendor/Interface';
import {getVersionUpdateListAction} from '../vendor/dataflow/Action'


const versionUpdateInit = async (params={},dispatch) => {
  try{
    let result = await sysNodeVersionlistInterface(params);
    console.log('versionUpdateInit',result)
    dispatch(getVersionUpdateListAction(result))
  }catch(error) {
    console.log(error)
  }

}




const mapStateToProps = (state) => {
  console.log('state.versionUpdateReducer',state.versionUpdateReducer);
  return {
    sysNodeVersionlist: state.versionUpdateReducer,
    dictInfo:state.dictReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    versionUpdateInit: (params) => versionUpdateInit(params,dispatch)
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(VersionUpdateView);
