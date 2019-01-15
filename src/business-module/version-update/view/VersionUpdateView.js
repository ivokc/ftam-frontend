import React from 'react';
import {Row , Col ,Button,Modal,Divider} from 'antd';
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
      { title: '编号', dataIndex: 'verId', key: 'verId' },
      { title: '版本号', dataIndex: 'version', key: 'version'},
      { title: '更新包', dataIndex: 'filename', key: 'filename',searcher: true },
      { title: '状态', dataIndex: 'status', key: 'status' },
      { title: '描述', dataIndex: 'remark', key: 'remark' },
      { title: '创建时间', dataIndex: 'createtime', key: 'createtime' },
      { title: '更新时间', dataIndex: 'updatetime', key: 'updatetime' },
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
   
    for(let i = 0 ; i < this.props.versionList.length; i++){
      dataSource.push({
        key: `mTb${i}`,
          verId: this.props.versionList[i].verId,
          version: this.props.versionList[i].version,
          filename: this.props.versionList[i].filename,
          status: this.props.versionList[i].status,
          remark: this.props.versionList[i].remark,
          createtime: this.props.versionList[i].createtime,
          updatetime: this.props.versionList[i].updatetime
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

    if(this.props.versionList && this.props.versionList.length > 0 && this.props.dictInfo){
      ({columns,dataSource} = this.prepareMainTableData());
    }
    return (
      <Row>
        <Col span={24}>
        <div style={{marginBottom:'15px'}}>
            <Button type="primary" onClick={this.handleCreatePress.bind(this,null,'sysAdd')} >新建版本</Button>
            <Modal
              width={700}
              visible={this.state.visible}
              title={this.state.record ? '修改' : '新增'}
              okText="提交"
              cancelText="取消"
              onCancel={this.handleCancelPress}
              onOk={this.handleSubmit}
            >
      
            </Modal>
          </div>
          <UITable
            title={() => '版本管理'}
            dataSource={dataSource}
            columns={columns}
            size='small' />
        </Col>
      </Row>
    );
  }

}
export default VersionManageView;
