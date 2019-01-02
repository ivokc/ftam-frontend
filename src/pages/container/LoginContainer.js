import { connect } from 'react-redux';
import LoginView from '../view/LoginView';
import {loginAction} from '../../dataflow/Action';
import {loginTask,testTask} from '../vendor/Task';

const handleLogin = async ({params,dispatch,ownProps}) => {
  // let response = await loginTask(params);
  // let response = await testTask(params);

  dispatch(loginAction(params));
  global.JJmHistory.push('/monitor');

}



const mapDispatchToProps = (dispatch,ownProps) => {
  global.Just.log('mapDispatchToProps',ownProps);

  return {
    handleLogin: (params) => handleLogin({params,dispatch,ownProps})
  }
};

export default connect(null,mapDispatchToProps)(LoginView);
