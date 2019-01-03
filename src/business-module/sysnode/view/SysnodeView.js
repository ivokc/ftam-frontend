import React from 'react';
import {Layout,Table, Badge, Menu, Dropdown, Icon,Divider} from 'antd';
import {PieChart} from '../../../main/components/UIComponents';

const {
  Sider, Content,
} = Layout;
class MonitorView extends React.Component {
  state = {};


  componentWillMount() {
    this.props.monitorInit();
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          Action 1
        </Menu.Item>
        <Menu.Item>
          Action 2
        </Menu.Item>
      </Menu>
    );
    const columns1 = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Platform', dataIndex: 'platform', key: 'platform' },
      { title: 'Version', dataIndex: 'version', key: 'version' },
      { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      { title: 'Creator', dataIndex: 'creator', key: 'creator' },
      { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
      { title: 'Action', key: 'operation', render: () => <a href="javascript:;">Publish</a> },
    ];
    const dataSource1 = [];
    for (let i = 0; i < 3; ++i) {
      dataSource1.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
      });
    }

    const columns2 = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <span className="table-operation">
            <a href="javascript:;">Pause</a>
            <Divider type="vertical" />
            <a href="javascript:;">Stop</a>
            <Divider type="vertical" />
            <Dropdown overlay={menu}>
              <a href="javascript:;">
                More <Icon type="down" />
              </a>
            </Dropdown>
          </span>
        ),
      },
    ];

    const dataSource2 = [];
    for (let i = 0; i < 3; ++i) {
      dataSource2.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }

    return (
      <Layout className='content-layout'>
        <Content className='content-main'>

          <Table
            title={() => '任务状态'}
            dataSource={dataSource1}
            columns={columns1}
            expandedRowRender={() =>
              <Table columns={columns2} dataSource={dataSource2} pagination={false} size='small' />
            }
            size='small' />
        </Content>
      </Layout>
    );
  }

}
export default MonitorView;
