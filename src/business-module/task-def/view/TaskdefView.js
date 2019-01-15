import React from 'react';
import {Row,Col, Modal,Badge,Button,Divider} from 'antd';
import NewMissionForm from '../component/NewMissionForm';
import {UITable} from '../../../main/components/UIComponents';


class TaskdefView extends React.Component {
  state = {
    visible: false,
  };


  state = {
    visible:false,
    actionType:null,
    record:null,
  };

  componentWillMount() {
    this.props.taskdefInit();
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
      { title: '定义编号', dataIndex: 'taskDefId', key: 'taskDefId' },
      { title: '定义名称', dataIndex: 'taskDefName', key: 'taskDefName',searcher: true},
      { title: '类型', dataIndex: 'taskDefType', key: 'taskDefType' },
      { title: '目标节点', dataIndex: 'destNode', key: 'destNode' },
      { title: '目标路径', dataIndex: 'destPath', key: 'destPath' },
      { title: '生效起始时间', dataIndex: 'startTime', key: 'startTime' },
      { title: '源文件规则', dataIndex: 'srcFileRule', key: 'srcFileRule' },
      { title: '源节点', dataIndex: 'srcNode', key: 'srcNode' },
      { title: '源路径', dataIndex: 'srcPath', key: 'srcPath' },
      { title: '同步状态', dataIndex: 'syncStatus', key: 'syncStatus' },
      { title: '状态', dataIndex: 'status', key: 'status' },
      { title: '描述', dataIndex: 'remark', key: 'remark' },
      { title: '操作', key: 'operation', 
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleEditPress.bind(this,record,'sysUpdate')}>修改</a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.handleDeletePress.bind(this,record,'sysDelete')}>删除</a>
          </span> 
      },
    ];
   
    for(let i = 0 ; i < this.props.taskdefList.length; i++){
      dataSource.push({
        key: `mTb${i}`,
        ...this.props.taskdefList[i].taskDef,
        taskTrigger:this.props.taskdefList[i].taskTrigger
      })
    }
    global.Just.log('jjjjajajajajja-->dataSource',dataSource);
    global.Just.log('jjjjajajajajja-->columns',columns);
    return {
      columns,
      dataSource
    }

  }



  subTableRender = (record) => {
    let dataSource2 = [];
    const columns2 = [
      { title: '触发编号', dataIndex: 'trigerId', key: 'trigerId' },
      { title: '触发类型', dataIndex: 'trigerType', key: 'trigerType' },
      { title: 'Cron表达式', dataIndex: 'cronCause', key: 'cronCause',searcher: true },
      { title: '时间间隔', dataIndex: 'interval', key: 'interval' },
      { title: '间隔单位', dataIndex: 'intervalUnit', key: 'intervalUnit' },
      { title: '备注', dataIndex: 'remark', key: 'remark' },
      { title: '操作', key: 'operation', 
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleEditPress.bind(this,record,'nodeUpdate')}>修改</a>
          </span> 
      },
    ];

    for (let j = 0; j < record.taskTrigger.length; j++) {
      dataSource2.push({
        key: `sTb${j}`,
        ...record.taskTrigger[j]
        
      })
    }
    return <UITable columns={columns2} dataSource={dataSource2} pagination={false} locale={{filterConfirm:'确定',filterReset:'重置',emptyText:'暂无数据'}} size='small'/>

  }

  
  render() {

    global.Just.log('fadfadfadfad',this.props );
    let columns = [],dataSource = [];

    if(this.props.taskdefList && this.props.taskdefList.length > 0 && this.props.dictInfo){
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
             
             
            </Modal>
          </div>
          <UITable
            title={() => '任务定义'}
            dataSource={dataSource}
            columns={columns}
            expandedRowRender={this.subTableRender}
            size='small' />
        </Col>
      </Row>
    );
  }

}
export default TaskdefView;
