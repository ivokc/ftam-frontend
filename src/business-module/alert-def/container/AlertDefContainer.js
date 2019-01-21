import { connect } from 'react-redux';
import AlertDefView from '../view/AlertDefView';
import {alertDefListTask,alertDefInsertTask} from '../vendor/Task';



const alertDefInit = (params={},dispatch) => {
  alertDefListTask(dispatch);
}
const alertDefInsert = (params={},dispatch) => {
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
