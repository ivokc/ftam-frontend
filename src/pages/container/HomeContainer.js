import { connect } from 'react-redux';
import HomeView from '../view/HomeView';
import {menuTask,dictTask} from '../vendor/Task';


const handleInit = ({params,dispatch}) => {
  menuTask(dispatch);
  dictTask(dispatch);
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
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(HomeView);
