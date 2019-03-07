import React from 'react';
import {Row , Col ,Button,Modal,Divider,Badge,Popconfirm} from 'antd';
import NewVersionForm from '../component/NewVersionForm';
import {UITable} from '../../../main/components/UIComponents';

class VersionManageView extends React.Component {
  state = {
    visible:false,
    actionType:null,
    record:null,
  };

  componentWillMount() {
    this.props.versionManageInit();
  }
  handleEditPress(record,actionType) {
    this.setState({record,visible:true,actionType});
  }

  handleCreatePress(record,actionType) {
    this.setState({record,visible:true,actionType})
  }

  handleDeletePress(record,actionType) {
    this.props.versionDelete(record);
  }

  handleCancelPress = () => {
    const form = this.formRef.props.form;
    this.setState({ visible: false,record:null,actionType:null });
    form.resetFields();
  }




  
//   versionInsert
// versionUpdate
// versionDelete
  handleSubmit = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      switch (this.state.actionType) {
        case 'versionInsert':
          this.props.versionInsert(values);
          break;
        case 'versionUpdate':
          this.props.versionUpdate({...this.state.record,...values});
          break;
        default:
          break;
      }
      this.setState({ visible: false,record:null,actionType:null });
      form.resetFields();
    });
  }

  renderStatus = (text) => {
    let transferedText = global.Just.getDictValue(this.props.dictInfo.version_status,text)
    switch (text) {
      case 0://其他版本
      return <Badge status="default" text={transferedText}/> ;
      case 1://最新版本
      return <Badge status="success" text={transferedText}/> ;
      default:
      return <span>text</span> ;
    }
  }


  prepareMainTableData = () => {
    let dataSource = [];
    const columns = [
      { title: '编号', dataIndex: 'verId', key: 'verId' },
      { title: '版本号', dataIndex: 'version', key: 'version'},
      { title: '更新包', dataIndex: 'filename', key: 'filename',searcher: true },
      { title: '状态', dataIndex: 'status', key: 'status',
        render: this.renderStatus,
        filters: this.props.dictInfo.version_status.items.map((ele) => ({text:ele.name,value:ele.code})),
        onFilter: (value,record) => value == record.status,
      },
      { title: '描述', dataIndex: 'remark', key: 'remark' },
      { title: '创建时间', dataIndex: 'createtime', key: 'createtime'},
      { title: '更新时间', dataIndex: 'updatetime', key: 'updatetime'},
      { title: '操作', key: 'operation', 
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleEditPress.bind(this,record,'versionUpdate')}>修改</a>
            <Divider type="vertical" />
            <Popconfirm title="确定要删除此条?" onConfirm={this.handleDeletePress.bind(this,record,'versionDelete')}  okText="是" cancelText="否">
              <a href="javascript:;">删除</a>
            </Popconfirm>
          </span> 
      },
    ];
   
    for(let i = 0 ; i < this.props.versionList.length; i++){
      dataSource.push({
        key: `mTb${i}`,
          verId: this.props.versionList[i].verId,
          version: this.props.versionList[i].version,
          filename: this.props.versionList[i].filename,
          status: this.props.versionList[i].status,
          remark: this.props.versionList[i].remark,
          createtime: global.Just.getFormatDate('yyyy-MM-dd hh:mm:ss',this.props.versionList[i].createtime),
          updatetime: global.Just.getFormatDate('yyyy-MM-dd hh:mm:ss',this.props.versionList[i].updatetime),
      })
    }
    return {
      columns,
      dataSource
    }

  }
  render() {
    
    let columns = [],dataSource = [];

    if(this.props.versionList && this.props.versionList.length > 0 && this.props.dictInfo){
      ({columns,dataSource} = this.prepareMainTableData());
    }
    return (
      <Row>
        <Col span={24}>
        <div style={{marginBottom:'15px'}}>
            <Button type="primary" onClick={this.handleCreatePress.bind(this,null,'versionInsert')} >新建版本</Button>
            <Modal
              width={700}
              visible={this.state.visible}
              title={this.state.record ? '修改' : '新增'}
              okText="提交"
              cancelText="取消"
              onCancel={this.handleCancelPress}
              onOk={this.handleSubmit}
            >
              <NewVersionForm
                record={this.state.record}
                wrappedComponentRef={(formRef)=>{this.formRef = formRef}}
              /> 
            </Modal>
          </div>
          <UITable
            title='版本管理'
            dataSource={dataSource}
            columns={columns}
            size='small' 
            searchText={this.props.searchText}
            />
        </Col>
      </Row>
    );
  }

}
export default VersionManageView;
