import React from 'react';
import {Row , Col ,Button,Modal,Divider} from 'antd';
import {UITable} from '../../../main/components/UIComponents';

class VersionManageView extends React.Component {
  state = {
    visible:false,
    actionType:null,
    record:null,
    selectedRowKeys:[]
  };

  componentWillMount() {
    this.props.versionUpdateInit();
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


 

  prepareMainTableData = () => {
    let dataSource = [];
    const columns = [
      { title: '应用名称', dataIndex: 'SYS_CODE', key: 'SYS_CODE' },
      { title: '节点名称', dataIndex: 'NODE_NAME', key: 'NODE_NAME'},
      { title: 'IP地址', dataIndex: 'HOST', key: 'HOST',searcher: true },
      { title: '当前版本', dataIndex: 'VERSION', key: 'VERSION',searcher: true },
      { title: '最新版本', dataIndex: 'LAST_VERSION', key: 'LAST_VERSION',searcher: true },
      { title: '推送结果', dataIndex: 'PUSH_RESULT', key: 'PUSH_RESULT' },
      { title: '换版结果', dataIndex: 'UPDATE_RESULT', key: 'UPDATE_RESULT' },
     
    ];
   
    for(let i = 0 ; i < this.props.sysNodeVersionlist.length; i++){
      dataSource.push({
        key: `mTb${i}`,
        ...this.props.sysNodeVersionlist[i]
      })
    }
    console.log('prepareMainTableData',dataSource);

    return {
      columns,
      dataSource
    }

  }
  render() {

    let columns = [],dataSource = [];

    if(this.props.sysNodeVersionlist && this.props.sysNodeVersionlist.length > 0 && this.props.dictInfo){
      ({columns,dataSource} = this.prepareMainTableData());
    }
    console.log('render',dataSource);

    return (
      <Row>
        <Col span={24}>
          <div style={{marginBottom:'15px'}}>
            <Button type="primary" onClick={this.handleCreatePress.bind(this,null,'sysAdd')} >推送</Button>
            <Button type="primary" onClick={this.handleCreatePress.bind(this,null,'sysAdd')} >换版</Button>
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
            title='版本管理'
            rowSelection={{selectedRowKeys:this.state.selectedRowKeys,onChange: (selectedRowKeys)=>{this.setState({selectedRowKeys})}}}
            dataSource={dataSource}
            columns={columns}
            size='small' />
        </Col>
      </Row>
    );
  }

}
export default VersionManageView;
