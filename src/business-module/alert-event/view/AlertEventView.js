import React from 'react';
import {Row,Col, Modal,Button,Divider} from 'antd';
import {UITable} from '../../../main/components/UIComponents';
import NewAlertForm from '../component/NewAlertDefForm';

class AlertEventView extends React.Component {
  state = {
    visible:false,
    actionType:null,
    record:null,
  };

  componentWillMount() {
    this.props.alertEventInit();
  }
  handleEditPress(record,actionType) {
    this.setState({record,visible:true,actionType});
  }

  handleCreatePress(record,actionType) {
    this.setState({record,visible:true,actionType})
  }

  handleDeletePress(record,actionType) {
    this.setState({record,actionType});

  }

  handleCancelPress = () => {
    const form = this.formRef.props.form;
    this.setState({ visible: false,record:null,actionType:null });
    form.resetFields();
  }

  handleSubmit = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of actionType: ', this.state.actionType);
      console.log('Received values of record: ', this.state.record);
      console.log('Received values of values: ', values);
      switch (this.state.actionType) {
        case 'alertDefAdd':
          this.props.alertDefInsert({...values,alertTime:values.alertTime.format('HH:mm:ss')});
          break;
        default:
          break;
      }

      this.setState({ visible: false,record:null,actionType:null });
      form.resetFields();
    });
  }

  prepareMainTableData = () => {
    let dataSource = [];
    const columns = [
      { title: '预警定义编号', dataIndex: 'alertDefId', key: 'alertDefId' },
      { title: '预警级别', dataIndex: 'alertLevel', key: 'alertLevel' },
      { title: '事件处理', dataIndex: 'dealing', key: 'dealing' },
      { title: '事件编号', dataIndex: 'eventId', key: 'eventId' },
      { title: '事件级别', dataIndex: 'eventLevel', key: 'eventLevel' },
      { title: '事件描述', dataIndex: 'eventRemark', key: 'eventRemark' },
      { title: '操作', key: 'operation', 
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleEditPress.bind(this,record,'sysUpdate')}>修改</a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.handleDeletePress.bind(this,record,'sysDelete')}>删除</a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.handleCreatePress.bind(this,record,'nodeAdd')}>添加节点</a>
          </span> 
      },
    ];
   
    for(let i = 0 ; i < this.props.alertEventList.length; i++){
      dataSource.push({
        key: `mTb${i}`,
        ...this.props.alertEventList[i]
      })
    }
    global.Just.log('jjjjajajajajja-->dataSource',dataSource);
    global.Just.log('jjjjajajajajja-->columns',columns);
    return {
      columns,
      dataSource
    }

  }
  render() {
    global.Just.log('ffffefefeffe',this.props);
    let columns = [],dataSource = [];

    if(this.props.alertEventList && this.props.alertEventList.length > 0 && this.props.dictInfo){
      ({columns,dataSource} = this.prepareMainTableData());
    }
    return (
      <Row>
      <Col span={24}>
      <div style={{marginBottom:'15px'}}>
          <Modal
            width={700}
            visible={this.state.visible}
            title={this.state.record ? '修改' : '新增'}
            okText="提交"
            cancelText="取消"
            onCancel={this.handleCancelPress}
            onOk={this.handleSubmit}
          >
          <NewAlertForm
            record={this.state.record}
            wrappedComponentRef={(formRef)=>{this.formRef = formRef}}
          /> 
           
          </Modal>
        </div>
        <UITable
          title={() => '预警事件'}
          dataSource={dataSource}
          columns={columns}
          size='small' />
      </Col>
    </Row>
    );
  }

}
export default AlertEventView;
