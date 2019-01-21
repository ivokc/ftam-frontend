import React from 'react';
import { Form, Icon, Input,Button } from 'antd';
import { Link} from "react-router-dom";


const FormItem = Form.Item;
class LoginView extends React.Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleLogin(values);
      }
    });
  }



  render() {
    const style = LoginView.style;
    const { getFieldDecorator } = this.props.form;
    return (
        <div style={style.background}>
          <img style={style.logo} src={global.Image.BOSlogo}  alt='logo'/>
          <div style={style.loginBox}>
            <h3 style={style.loginTitle}>文件传输及管理控制台</h3>
            <p style={style.loginText}>文件传输管理平台用于上海银行各应用间互相传输文件</p>
            <Form style={style.loginForm} onSubmit={this.handleSubmit} >
              <FormItem>
                {getFieldDecorator('username',{
                  rules: [{required: true,message: '请输入用户名!'}],
                })(
                  <Input size='large' prefix={<Icon type='user' style={{ color: '#115BC4' }} />} placeholder='用户名'/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password',{
                  rules: [{required: true,message: '请输入密码!'}],
                })(
                  <Input size='large' prefix={<Icon type='lock' style={{ color: '#115BC4' }} />} type='password' placeholder='密码'/>
                )}
              </FormItem>
              <FormItem>
                <Button size='large' style={style.loginButton}  type="primary" htmlType="submit" >
                  登录
                </Button>
                <Link style={style.loginForget} to='/'>忘记密码</Link>
                <Link style={style.loginReset} to="/">重置</Link>
              </FormItem>
            </Form>
          </div>
        </div>
    );
  };
  static style = {
    background: {
      backgroundImage: `url(${global.Image.loginBg})`,
      width:'100%',
      height:'100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    },
    logo:{
      width: '188px',
      height: '50px',
      position: 'fixed',
      top: '100px',
      left: '80px'
    },
    loginBox: {
      width:'343px',
      height:'300px',
      position: 'fixed',
      top:'30%',
      right:'14%'
    },
    loginTitle:{
      color:'#333333',
      textAlign:'center'
    },
    loginText:{
      color:'#666666',
      textAlign:'center',
      fontSize:'12px'
    },
    loginForm:{
      maxWidth:'322px',
      margin:'auto',
    },
    loginButton:{
      width:'100%'
    },
    loginForget:{
      color:'#666666',
      width:'100%'
    },
    loginReset:{
      color:'#666666',
      float:'right'
    }
  }
}
export default Form.create()(LoginView);
