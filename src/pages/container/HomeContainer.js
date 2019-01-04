import { connect } from 'react-redux';
import HomeView from '../view/HomeView';
import {menuTask} from '../vendor/Task';
import {getMenuAction} from '../../dataflow/Action';


const handleGetMenu = ({params,dispatch}) => {
  menuTask(dispatch);
}


const mapStateToProps = (state) => {
  global.Just.log('HomeContainer',state);
  return {
    userInfo: state.userReducer,
    menuInfo: state.menuReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  global.Just.log('mapDispatchToProps');

  return {
    handleGetMenu: (params) => handleGetMenu({params,dispatch})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(HomeView);
