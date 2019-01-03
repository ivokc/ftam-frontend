import React from 'react';
import {Layout,Table } from 'antd';
import {PieChart} from '../../../main/components/UIComponents';

const {
  Sider, Content,
} = Layout;
class MonitorView extends React.Component {
  state = {};


  componentWillMount() {
    this.props.handleMonitorInit();
  }

  render() {
    const dataSource1 = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns1 = [{
      title: '源地址',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '目标地址',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '进度',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '状态',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '备注',
      dataIndex: 'address',
      key: 'address',
    }];
    const data = [{name: '有告警', value: 400}, {name: '正常运行', value: 300},
                {name: '无心跳', value: 300}, {name: '正在更新', value: 200}];

    return (
      <Layout className='content-layout'>
        <Content className='content-main'>
          <Table
            title={() => '任务状态'}
            dataSource={dataSource1}
            columns={columns1}
            expandedRowRender={<Table columns={columns1} dataSource={dataSource1} pagination={false}/>}
            size='small' bordered/>
        </Content>
        <Sider width={400} style={{background:' #FAFAFA'}}>
          <h3>节点状态</h3>
          <PieChart  data={data}/>
        </Sider>
      </Layout>
    );
  }

}
export default MonitorView;
