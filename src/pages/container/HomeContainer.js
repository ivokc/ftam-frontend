import { connect } from 'react-redux';
import HomeView from '../view/HomeView';
import {menuTask,dictTask} from '../vendor/Task';
import {enterSearchAction,selectMenuAction} from '../../dataflow/Action'

const handleInit = ({params,dispatch}) => {
  menuTask(dispatch);
  dictTask(dispatch);
}

const handleSearch = ({params,dispatch}) => {
  dispatch(enterSearchAction(params));
}

const handleMenuPress = ({params,dispatch}) => {
  dispatch(selectMenuAction(params));
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer,
    menuInfo: state.menuReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: (params) => handleInit({params,dispatch}),
    search: (params) => handleSearch({params,dispatch}),
    menuPress: (params) => handleMenuPress({params,dispatch})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(HomeView);
