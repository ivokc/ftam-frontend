import React from 'react';
import { Layout,Menu,Icon,Row,Col,Badge } from 'antd';
import { Link,Switch} from "react-router-dom";
import ProtectRoute from '../../router/ProtectRoute';

import MonitorContainer from '../../business-module/monitor/container/MonitorContainer';
import MissionContainer from '../../business-module/mission/container/MissionContainer';
import SysnodeContainer from '../../business-module/sysnode/container/SysnodeContainer';
import VersionContainer from '../../business-module/version/container/VersionContainer';

const {
  Header, Footer, Content,
} = Layout;

class HomeView extends React.Component {
  state = {
    current:'monitor'
  };


  componentWillMount() {
    this.props.handleGetMenu();
  }

  handleClick = (e) => {
    this.setState({
      current:e.key,
    });
    this.props.history.push(`/${e.key}`);
  }

  render() {
    const {userInfo,menuInfo} = this.props;
    
    const menus = !menuInfo ? null : menuInfo.map((v) => {
      return (
        <Menu.Item key={v.key}>
          {v.text}
        </Menu.Item>
      );
    });


    return (
      <Layout id='HomeView'>
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
            <ProtectRoute path='/monitor' component={MonitorContainer} />
            <ProtectRoute path='/mission' component={MissionContainer} />
            <ProtectRoute path='/sysnode' component={SysnodeContainer} />
            <ProtectRoute path='/versionManage' component={VersionContainer} />

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
