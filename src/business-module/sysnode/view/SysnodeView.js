import React from 'react';
import {Row,Col, Modal,Badge,Button,Divider,Popconfirm} from 'antd';
import {UITable} from '../../../main/components/UIComponents';
import NewSysForm from '../component/NewSysForm';
import NewNodeForm from '../component/NewNodeForm';


class SysnodeView extends React.Component {
  state = {
    visible:false,
    actionType:null,
    record:null,
  };

  

  componentWillMount() {
    this.props.sysnodeInit();
  }


  renderCurrentStatus = (text) => {
    let transferedText = global.Just.getDictValue(this.props.dictInfo.sysnode_currentstatus,text)
    switch (text) {
      case -2://无响应
      return <Badge status="error" text={transferedText}/> ;
      case -1://无法连接
      return <Badge status="warning" text={transferedText}/> ;
      case 0://未知
      return <Badge status="default" text={transferedText}/> ;
      case 1://有连接无响应
      return <Badge status="processing" text={transferedText}/> ;
      case 2://正常响应
      return <Badge status="success" text={transferedText}/> ;
      default:
      return <span>text</span> ;
    }
  }
  renderNodeEnable = (text) => {
    let transferedText = global.Just.getDictValue(this.props.dictInfo.sysnode_enable,text)
    switch (text) {
      case 0://禁用
      return <Badge status="error" text={transferedText}/> ;
      case 1://启用
      return <Badge status="success" text={transferedText}/> ;
      default:
      return <span>text</span> ;
    }
  }

  handleEditPress(record,actionType) {
    this.setState({record,visible:true,actionType});
  }

  handleCreatePress(record,actionType) {
    this.setState({record,visible:true,actionType})
  }

  handleDeletePress(record,actionType) {
    if(actionType === 'sysDelete'){
      //删除系统
      this.props.sysDelete(record);
    }else if(actionType === 'nodeDelete'){
      //删除节点
      this.props.nodeDelete(record);
    }
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
        case 'sysAdd':
          this.props.sysInsert(values);
          break;
        case 'sysUpdate':
          this.props.sysUpdate(values);
          break;
        case 'nodeAdd':
          this.props.nodeInsert({...values,nodeName:values.nodeName1});
          break;
        case 'nodeUpdate':
          this.props.nodeUpdate({...values,nodeName:values.nodeName1});
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
      { title: '系统编码', dataIndex: 'sysCode', key: 'sysCode' },
      { title: '行内标准编码编码', dataIndex: 'pasoCode', key: 'pasoCode',searcher: true },
      { title: '编号', dataIndex: 'seqNo', key: 'seqNo' },
      { title: '子序号', dataIndex: 'subSeqNo', key: 'subSeqNo' },
      { title: '系统名称', dataIndex: 'sysName', key: 'sysName',searcher: true},
      { title: '描述', dataIndex: 'remark', key: 'remark' },
      { title: '操作', key: 'operation', 
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleEditPress.bind(this,record,'sysUpdate')}>修改</a>
            <Divider type="vertical" />
            <Popconfirm title="确定要删除此条?" onConfirm={this.handleDeletePress.bind(this,record,'sysDelete')}  okText="是" cancelText="否">
              <a href="javascript:;">删除</a>
            </Popconfirm>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.handleCreatePress.bind(this,record,'nodeAdd')}>添加节点</a>
          </span> 
      },
    ];
   
    for(let i = 0 ; i < this.props.sysnodeList.length; i++){
      dataSource.push({
        key: `mTb${i}`,
        ...this.props.sysnodeList[i].sys,
        sysNode: this.props.sysnodeList[i].sysNode
      })
    }
    return {
      columns,
      dataSource
    }

  }

  subTableRender = (record) => {
    let dataSource2 = [];
    const columns2 = [
      { title: '节点编码', dataIndex: 'nodeCode', key: 'nodeCode' },
      { title: '节点名称', dataIndex: 'nodeName', key: 'nodeName',searcher: true },
      { title: '节点序号', dataIndex: 'seqNo', key: 'seqNo' },
      { title: '用户名', dataIndex: 'user', key: 'user' },
      { title: '主机地址', dataIndex: 'host', key: 'host' },
      { title: '端口', dataIndex: 'port', key: 'port' },
      { 
        title: '当前状态', dataIndex: 'currentStatus', key: 'currentStatus',
        render: this.renderCurrentStatus,
        filters: this.props.dictInfo.sysnode_currentstatus.items.map((ele) => ({text:ele.name,value:ele.code})),
        onFilter: (value,record) => value == record.currentStatus,
      },
      { 
        title: '启用情况', dataIndex: 'enable', key: 'enable',
        render: this.renderNodeEnable,
        filters: this.props.dictInfo.sysnode_enable.items.map((ele) => ({text:ele.name,value:ele.code})),
        onFilter: (value,record) => {
          return value == record.enable;
        },
      },
      { title: '备注', dataIndex: 'remark', key: 'remark' },
      { title: '操作', key: 'operation', 
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleEditPress.bind(this,record,'nodeUpdate')}>修改</a>
            <Divider type="vertical" />
            <Popconfirm title="确定要删除此条?" onConfirm={this.handleDeletePress.bind(this,record,'nodeDelete')}  okText="是" cancelText="否">
              <a href="javascript:;">删除</a>
            </Popconfirm>
          </span> 
      },
    ];

    for (let j = 0; j < record.sysNode.length; j++) {
      dataSource2.push({
        key: `sTb${j}`,
        ...record.sysNode[j]
      })
    }
    return <UITable title='节点' searchText={this.props.searchText} columns={columns2} dataSource={dataSource2} pagination={false} locale={{filterConfirm:'确定',filterReset:'重置',emptyText:'暂无数据'}} size='small'/>

  }


  render() {
    let columns = [],dataSource = [];

    if(this.props.sysnodeList && this.props.sysnodeList.length > 0 && this.props.dictInfo){
      ({columns,dataSource} = this.prepareMainTableData());
    }
    return (
      <Row>
        <Col span={24}>
          <div style={{marginBottom:'15px'}}>
            <Button type="primary" onClick={this.handleCreatePress.bind(this,null,'sysAdd')} >新建系统</Button>
            <Modal
              width={700}
              visible={this.state.visible}
              title={this.state.record ? '修改' : '新增'}
              okText="提交"
              cancelText="取消"
              onCancel={this.handleCancelPress}
              onOk={this.handleSubmit}
            >
              {
                !this.state.actionType ? null : (this.state.actionType.includes('sys') ? 
                <NewSysForm
                  record={this.state.record}
                  wrappedComponentRef={(formRef)=>{this.formRef = formRef}}
                /> : this.state.actionType.includes('node') ?
                <NewNodeForm
                  record={this.state.record}
                  wrappedComponentRef={(formRef)=>{this.formRef = formRef}}
                /> : null)
              }
             
            </Modal>
          </div>
          <UITable
            searchText={this.props.searchText}
            title='系统'
            dataSource={dataSource}
            columns={columns}
            expandedRowRender={this.subTableRender}
            size='small' />
        </Col>
      </Row>
    );
  }

}
export default SysnodeView;
