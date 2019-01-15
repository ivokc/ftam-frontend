import React from 'react';
import { Layout,Menu,Icon,Row,Col } from 'antd';
import { Link,Switch} from "react-router-dom";
import ProtectRoute from '../../router/ProtectRoute';

import MonitorContainer from '../../business-module/monitor/container/MonitorContainer';
import TaskdefContainer from '../../business-module/task-def/container/TaskdefContainer';
import SysnodeContainer from '../../business-module/sysnode/container/SysnodeContainer';
import VersionManageContainer from '../../business-module/version-manage/container/VersionManageContainer';
import VersionUpdateContainer from '../../business-module/version-update/container/VersionUpdateContainer';
import AlertDefContainer from '../../business-module/alert-def/container/AlertDefContainer';

const {
  Header, Footer, Content,
} = Layout;

class HomeView extends React.Component {
  state = {
    current:'monitor'
  };


  componentWillMount() {
    this.props.init();
  }

  handleClick = (e) => {
    this.setState({
      current:e.key,
    });
    this.props.history.push(`${e.key}`);
  }

  render() {
    const {userInfo,menuInfo} = this.props;
    
    const menus = !menuInfo ? null : menuInfo.map((v) => {
      return (
        <Menu.Item key={v.attributes.url}>
          {v.text}
        </Menu.Item>
      );
    });


    return (
      <Layout className='layout'>
        <Header className='header'>
          <img className='logo' src={global.Image.BOSlogo}  alt='logo' />
          <span className='title'>文件传输管理平台</span>
          <Menu className='menu' mode="horizontal" defaultSelectedKeys={['monitor']} selectedKeys={[this.state.current]} onClick={this.handleClick}>
            { menus }

          </Menu>
        </Header>
        <Row className='statusBar'>
          <Col span={14}>
            <Icon className='userIcon' type='user'/>
            <span className='statusBar-text'>
              欢迎您，{userInfo.username}
            </span>
          </Col>
          <Col span={10}>
            <Link className='statusBar-text' to="/">[个人设置]</Link>
            <span className='statusBar-text'>
              登录时间：{global.Just.getFormatDate('yyyy-MM-dd hh:mm:ss.S')}
            </span>
            <Link className='statusBar-text' to="/">[退出]</Link>
          </Col>
        </Row>
        <Content className='content'>
          <Switch>
            {
              !menuInfo ? null : menuInfo.map((v,i) => {
                let component;
                switch (v.attributes.url) {
                  case '/monitor':
                    component = MonitorContainer;
                    break;
                  case '/taskdefManage':
                      component = TaskdefContainer;
                      break;
                  case '/versionManage':
                    component = VersionManageContainer;
                    break;
                  case '/sysnodeManage':
                    component = SysnodeContainer;
                    break;
                  case '/versionUpdate':
                    component = VersionUpdateContainer;
                    break;
                  case '/alertdefManage':
                    component = AlertDefContainer;
                    break;
                  case '/alerteventManage':
                    component = MonitorContainer;
                    break;
                  default:
                    break;
                }
                return <ProtectRoute key={i} path={v.attributes.url} component={component} />
              })
            }
          

          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright © 2012-2014 上海银行
        </Footer>
      </Layout>
    );
  };

}
export default HomeView;
