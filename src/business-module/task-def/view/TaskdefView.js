import React from 'react';
import {Row,Col,Badge,Button,Divider} from 'antd';
import NewTaskDefForm from '../component/NewTaskDefForm';
import UpdateTaskDefForm from '../component/UpdateTaskDefForm';
import UpdateTaskTriggerForm from '../component/UpdateTaskTriggerForm';
import {UITable} from '../../../main/components/UIComponents';


class TaskdefView extends React.Component {
 
  state = {
    newDefvisible:false,
    updateDefvisible:false,
    updateTriggervisible:false,
    actionType:null,
    record:null,
  }

  componentWillMount() {
    this.props.taskdefInit();
  }
  handleEditPress(record,actionType) {
    if (actionType === 'taskdefUpdate') {
      this.setState({record,actionType,updateDefvisible:true,});
    } else {
      this.setState({record,actionType,updateTriggervisible:true,});
    }
  }

  handleCreatePress(record,actionType) {
    this.setState({record,actionType,newDefvisible:true})
  }

  handleDeletePress(record,actionType) {
    this.props.taskdefDelete(record);
  }

  handleCancelPress = () => {
    this.setState({ newDefvisible: false,updateDefvisible: false,updateTriggervisible: false,record:null,actionType:null });
  }
  handleSubmit = (values) => {
    switch (this.state.actionType) {
      case 'taskdeftasktriggerInsert':
        this.props.taskdeftasktriggerInsert(values);
        break;
      case 'taskdefUpdate':
        this.props.taskdefUpdate(values);
        break;
      case 'tasktriggerUpdate':
        this.props.tasktriggerUpdate(values);
        break;
      default:
        break;
    }
    this.setState({ newDefvisible: false,updateDefvisible: false,updateTriggervisible: false,record:null,actionType:null });
  }



  renderStatus = (text) => {
    let transferedText = global.Just.getDictValue(this.props.dictInfo.taskdef_status,text)
    switch (text) {
      case 0://失效
      return <Badge status="default" text={transferedText}/> ;
      case 1://生效
      return <Badge status="success" text={transferedText}/> ;
      default:
      return <span>text</span> ;
    }
  }

  renderSyncStatus = (text) => {
    let transferedText = global.Just.getDictValue(this.props.dictInfo.taskdef_syncstatus,text)
    switch (text) {
      case 0://未同步
      return <Badge status="default" text={transferedText}/> ;
      case 1://同步
      return <Badge status="success" text={transferedText}/> ;
      default:
      return <span>text</span> ;
    }
  }

  renderTaskDefType = (text) => {
    let transferedText = global.Just.getDictValue(this.props.dictInfo.taskdef_taskdeftype,text)
    return transferedText;
  }

  renderTrigerType = (text) => {
    let transferedText = global.Just.getDictValue(this.props.dictInfo.tasktrigger_trigertype,text)
    return transferedText;
  }

  prepareMainTableData = () => {
    let dataSource = [];
    const columns = [
      { title: '定义编号', dataIndex: 'taskDefId', key: 'taskDefId' },
      { title: '定义名称', dataIndex: 'taskDefName', key: 'taskDefName',searcher: true},
      { title: '类型', dataIndex: 'taskDefType', key: 'taskDefType', render:this.renderTaskDefType},
      { title: '目标节点', dataIndex: 'destNode', key: 'destNode' },
      { title: '目标路径', dataIndex: 'destPath', key: 'destPath' },
      { title: '生效起始时间', dataIndex: 'startTime', key: 'startTime' },
      { title: '源文件规则', dataIndex: 'srcFileRule', key: 'srcFileRule' },
      { title: '源节点', dataIndex: 'srcNode', key: 'srcNode' },
      { title: '源路径', dataIndex: 'srcPath', key: 'srcPath' },
      { 
        title: '同步状态', dataIndex: 'syncStatus', key: 'syncStatus',render:this.renderSyncStatus
      },
      { 
        title: '状态', dataIndex: 'status', key: 'status', render:this.renderStatus 
      },
      { title: '描述', dataIndex: 'remark', key: 'remark' },
      { title: '操作', key: 'operation', 
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleEditPress.bind(this,record,'taskdefUpdate')}>修改</a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.handleDeletePress.bind(this,record,'taskdefDelete')}>删除</a>
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
      { title: '触发类型', dataIndex: 'trigerType', key: 'trigerType',render:this.renderTrigerType },
      { title: 'Cron表达式', dataIndex: 'cronCause', key: 'cronCause',searcher: true },
      { title: '时间间隔', dataIndex: 'interval', key: 'interval' },
      { title: '间隔单位', dataIndex: 'intervalUnit', key: 'intervalUnit' },
      { title: '备注', dataIndex: 'remark', key: 'remark' },
      { title: '操作', key: 'operation', 
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleEditPress.bind(this,record,'tasktriggerUpdate')}>修改</a>
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
            <Button type="primary" onClick={this.handleCreatePress.bind(this,null,'taskdeftasktriggerInsert')} >新建任务定义和触发</Button>
            <NewTaskDefForm 
              dicts={this.props.dictInfo}
              visible={this.state.newDefvisible}
              handleSubmit={this.handleSubmit}
              handleCancelPress={this.handleCancelPress}/>
            <UpdateTaskDefForm 
              record={this.state.record}
              dicts={this.props.dictInfo}
              visible={this.state.updateDefvisible}
              handleSubmit={this.handleSubmit}
              handleCancelPress={this.handleCancelPress}/>
            <UpdateTaskTriggerForm  
              record={this.state.record}
              dicts={this.props.dictInfo}
              visible={this.state.updateTriggervisible}
              handleSubmit={this.handleSubmit}
              handleCancelPress={this.handleCancelPress}/>
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
