import { connect } from 'react-redux';
import AlertEventView from '../view/AlertEventView';
import {alertEventListTask} from '../vendor/Task';



const alertEventInit = (params={},dispatch) => {
  alertEventListTask(dispatch);
}



const mapStateToProps = (state) => {
  return {
    alertEventList: state.alertEventReducer,
    dictInfo:state.dictReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    alertEventInit: (params) => alertEventInit(params,dispatch),
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(AlertEventView);
