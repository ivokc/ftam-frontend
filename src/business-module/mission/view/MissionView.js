import React from 'react';
import {Layout ,Table, Divider, Tag,Button,Modal} from 'antd';
import NewMissionForm from '../component/NewMissionForm';
// import TestForm from '../component/TestForm';
const {
   Content,
} = Layout;
class MissionView extends React.Component {
  state = {
    visible: false,
  };



  componentWillMount() {
    this.props.monitorInit();
  }

  showModal = () => {
    this.setState({ visible: true });
  }

  onCancel = () => {
    this.setState({ visible: false });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    const columns = [{
      title: '任务名称',
      dataIndex: 'missionName',
    }, {
      title: '任务详情',
      dataIndex: 'missionDetail',
    }, {
      title: '任务状态',
      dataIndex: 'missionStatus',
      render: tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      ),
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <a href="javascript:;">测试</a>
          <Divider type="vertical" />
          <a href="javascript:;">审批</a>
          <Divider type="vertical" />
          <a href="javascript:;">同步</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      ),
    }];

    const data = [{
      key: '1',
      missionName: '影像传输',
      missionDetail: 'config file',
      missionStatus: ['未批准'],
    }, {
      key: '2',
      missionName: '版本更新',
      missionDetail: 'config file',
      missionStatus: ['未批准'],
    }];


    return (
      <Layout className='content-layout'>
        <Content className='content-main'>
          <div style={{marginBottom:'15px'}}>
            <Button type="primary" onClick={this.showModal} >新增任务</Button>
            <Modal
              width={700}
              visible={this.state.visible}
              title="新建任务"
              okText="提交"
              cancelText="取消"
              onCancel={this.onCancel}
              onOk={this.onAddMission}
            >
              <NewMissionForm
                wrappedComponentRef={this.saveFormRef}
              />
            </Modal>
          </div>
          <div>
            <Table columns={columns} dataSource={data} size='small' bordered/>
          </div>

        </Content>
      </Layout>
    );
  }

}
export default MissionView;
