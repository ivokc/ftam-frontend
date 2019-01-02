import { connect } from 'react-redux';
import HomeView from '../view/HomeView';
import {menuTask} from '../vendor/Task';


const handleGetMenu = async () => {
  let response = await menuTask();
  global.Just.log('handleGetMenu',response);

  // dispatch(loginAction(params));
  // global.JJmHistory.push('/home');
}




const mapStateToProps = (state) => {
  global.Just.log('HomeContainer',state);
  return {
    userInfo: state.userReducer
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  global.Just.log('mapDispatchToProps',ownProps);

  return {
    handleGetMenu: (params) => handleGetMenu({params,dispatch,ownProps})
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(HomeView);
