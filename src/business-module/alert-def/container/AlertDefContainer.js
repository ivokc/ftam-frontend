import { connect } from 'react-redux';
import AlertDefView from '../view/AlertDefView';
import {alertDefListTask,alertDefInsertTask} from '../vendor/Task';



const alertDefInit = (params={},dispatch) => {
  global.Just.log('11111');
  alertDefListTask(dispatch);
}
const alertDefInsert = (params={},dispatch) => {
  global.Just.log('11111');
  alertDefInsertTask(params,dispatch);
}




const mapStateToProps = (state) => {
  return {
    alertDefList: state.alertDefReducer,
    dictInfo:state.dictReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    alertDefInit: (params) => alertDefInit(params,dispatch),
    alertDefInsert: (params) => alertDefInsert(params,dispatch)
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(AlertDefView);
