import React from 'react';
import {Row,Col, Modal,Button,Divider,Popconfirm} from 'antd';
import {UITable} from '../../../main/components/UIComponents';
import NewAlertForm from '../component/NewAlertDefForm';

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
    this.setState({record,visible:true,actionType})
  }

  handleDeletePress(record,actionType) {
    this.props.alertDefDelete(record);
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
        case 'alertDefInsert':
          this.props.alertDefInsert(values);
          break;
        case 'alertDefUpdate':
          this.props.alertDefUpdate(values);
          break;
        case 'alertDefDelete':
          this.props.alertDefDelete(values);
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
      { title: '预警定义编号', dataIndex: 'alertDefId', key: 'alertDefId',searcher: true },
      { title: '预警周期', dataIndex: 'alertCycle', key: 'alertCycle',searcher: true},
      { title: '预警定义名称', dataIndex: 'alertDefName', key: 'alertDefName',searcher: true },
      { title: '预警实现', dataIndex: 'alertImpl', key: 'alertImpl',searcher: true },
      { title: '预警级别', dataIndex: 'alertLevel', key: 'alertLevel',searcher: true },
      { title: '预警描述', dataIndex: 'alertRemark', key: 'alertRemark',searcher: true },
      { title: '预警时间', dataIndex: 'alertTime', key: 'alertTime',searcher: true },
      { title: '任务定义编号', dataIndex: 'taskDefId', key: 'taskDefId',searcher: true },
      { title: '操作', key: 'operation', 
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleEditPress.bind(this,record,'alertDefUpdate')}>修改</a>
            <Divider type="vertical" />
            <Popconfirm title="确定要删除此条?" onConfirm={this.handleDeletePress.bind(this,record,'alertDefDelete')}  okText="是" cancelText="否">
              <a href="javascript:;">删除</a>
            </Popconfirm>
          </span> 
      },
    ];
   
    for(let i = 0 ; i < this.props.alertDefList.length; i++){
      dataSource.push({
        key: `mTb${i}`,
        ...this.props.alertDefList[i]
      })
    }
    return {
      columns,
      dataSource
    }

  }
  render() {
    let columns = [],dataSource = [];

    if(this.props.alertDefList && this.props.alertDefList.length > 0 && this.props.dictInfo){
      ({columns,dataSource} = this.prepareMainTableData());
    }
    return (
      <Row>
      <Col span={24}>
      <div style={{marginBottom:'15px'}}>
          <Button type="primary" onClick={this.handleCreatePress.bind(this,null,'alertDefInsert')} >新建预警定义</Button>
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
            taskdefList={this.props.taskdefList}
            wrappedComponentRef={(formRef)=>{this.formRef = formRef}}
          /> 
           
          </Modal>
        </div>
        <UITable
          searchText={this.props.searchText}
          title='预警定义'
          dataSource={dataSource}
          columns={columns}
          size='small' />
      </Col>
    </Row>
    );
  }

}
export default AlertDefView;
