import { connect } from 'react-redux';
import LoginView from '../view/LoginView';
import {loginTask} from '../vendor/Task';

const handleLogin = async ({params,dispatch}) => {
  try {
    await loginTask(params,dispatch);
    global.JJmHistory.push('/monitor');
  }catch(error){}

}




const mapDispatchToProps = (dispatch) => {

  return {
    handleLogin: (params) => handleLogin({params,dispatch})
  }
};

export default connect(null,mapDispatchToProps)(LoginView);
