import React from 'react';
import {Row,Col, Modal,Badge} from 'antd';
import {UITable} from '../../../main/components/UIComponents';
import NewAlertEventForm from '../component/NewAlertEventForm';

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
  renderDealing = (text) => {
    let transferedText = global.Just.getDictValue(this.props.dictInfo.alertevent_dealing,text)
    switch (text) {
      case 'ignore'://忽略
      return <Badge status="Default" text={transferedText}/> ;
      case 'deal'://已处理
      return <Badge status="Success" text={transferedText}/> ;
      case 'undeal'://未处理
      return <Badge status="Error" text={transferedText}/> ;
      default:
      return <span>text</span> ;
    }
  }
  prepareMainTableData = () => {
    let dataSource = [];
    const columns = [
      { title: '预警定义编号', dataIndex: 'alertDefId', key: 'alertDefId' },
      { title: '预警级别', dataIndex: 'alertLevel', key: 'alertLevel' },
      { title: '事件处理', dataIndex: 'dealing', key: 'dealing', render: this.renderDealing,},
      { title: '事件编号', dataIndex: 'eventId', key: 'eventId' },
      { title: '事件级别', dataIndex: 'eventLevel', key: 'eventLevel' },
      { title: '事件描述', dataIndex: 'eventRemark', key: 'eventRemark' },
      { title: '操作', key: 'operation', 
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleEditPress.bind(this,record,'alertEventDeal')}>修改</a>
          </span> 
      },
    ];
   
    for(let i = 0 ; i < this.props.alertEventList.length; i++){
      dataSource.push({
        key: `mTb${i}`,
        ...this.props.alertEventList[i]
      })
    }
    return {
      columns,
      dataSource
    }

  }
  render() {
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
            <NewAlertEventForm
              record={this.state.record}
              dicts={this.props.dictInfo}
              wrappedComponentRef={(formRef)=>{this.formRef = formRef}}
            /> 
           
          </Modal>
        </div>
        <UITable
          title='预警事件'
          dataSource={dataSource}
          columns={columns}
          size='small' />
      </Col>
    </Row>
    );
  }

}
export default AlertEventView;
