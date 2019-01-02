import React from 'react';
import {Layout } from 'antd';

const {
   Content,
} = Layout;
class MissionView extends React.Component {
  state = {};


  componentWillMount() {
    this.props.monitorInit();
  }

  render() {

    return (
      <Layout className='content-layout'>
        <Content className='content-main'>
        <h1> mission</h1>

        </Content>
      </Layout>
    );
  }

}
export default MissionView;
