import React from 'react';
import {Row,Col, Modal,Badge,Button,Divider} from 'antd';
import {UITable} from '../../../main/components/UIComponents';
import NewAlertForm from '../component/NewAlertForm';

class AlertDefView extends React.Component {
  state = {
    visible:false,
    actionType:null,
    record:null,
  };

  componentWillMount() {
    this.props.alertDefInit();
  }
  handleEditPress(record,actionType) {
    this.setState({record,visible:true,actionType});
  }

  handleCreatePress(record,actionType) {
    global.Just.log('gwgwggwgw|record',record);
    global.Just.log('gwgwggwgw|actionType',actionType);
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

  
  prepareMainTableData = () => {
    let dataSource = [];
    const columns = [
      { title: '预警定义编号', dataIndex: 'alertDefId', key: 'alertDefId' },
      { title: '预警周期', dataIndex: 'alertCycle', key: 'alertCycle'},
      { title: '预警定义名称', dataIndex: 'alertDefName', key: 'alertDefName',searcher: true },
      { title: '预警实现', dataIndex: 'alertImpl', key: 'alertImpl' },
      { title: '预警级别', dataIndex: 'alertLevel', key: 'alertLevel' },
      { title: '预警描述', dataIndex: 'alertRemark', key: 'alertRemark' },
      { title: '预警时间', dataIndex: 'alertTime', key: 'alertTime' },
      { title: '任务定义编号', dataIndex: 'taskDefId', key: 'taskDefId' },
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
   
    for(let i = 0 ; i < this.props.alertDefList.length; i++){
      dataSource.push({
        key: `mTb${i}`,
          alertDefId: this.props.alertDefList[i].alertDefId,
          alertCycle: this.props.alertDefList[i].alertCycle,
          alertDefName: this.props.alertDefList[i].alertDefName,
          alertImpl: this.props.alertDefList[i].alertImpl,
          alertLevel: this.props.alertDefList[i].alertLevel,
          alertRemark: this.props.alertDefList[i].alertRemark,
          alertTime: this.props.alertDefList[i].alertTime,
          taskDefId: this.props.alertDefList[i].taskDefId
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

    if(this.props.alertDefList && this.props.alertDefList.length > 0 && this.props.dictInfo){
      ({columns,dataSource} = this.prepareMainTableData());
    }
    return (
      <Row>
      <Col span={24}>
      <div style={{marginBottom:'15px'}}>
          <Button type="primary" onClick={this.handleCreatePress.bind(this,null,'alertAdd')} >新建版本</Button>
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
          title={() => '预警定义'}
          dataSource={dataSource}
          columns={columns}
          size='small' />
      </Col>
    </Row>
    );
  }

}
export default AlertDefView;
