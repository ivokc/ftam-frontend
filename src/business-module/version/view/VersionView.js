import React from 'react';
import {Layout } from 'antd';

const {
   Content,
} = Layout;
class VersionView extends React.Component {
  state = {};


  componentWillMount() {
    this.props.monitorInit();
  }

  render() {

    return (
      <Layout className='content-layout'>
        <Content className='content-main'>
          <h1> version</h1>
        </Content>

      </Layout>
    );
  }

}
export default VersionView;
