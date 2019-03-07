import React from 'react';
import {Row,Col,Tag,Badge,Button,Divider,Popconfirm} from 'antd';
import NewTaskDefForm from '../component/NewTaskDefForm';
import UpdateTaskDefForm from '../component/UpdateTaskDefForm';
import UpdateTaskTriggerForm from '../component/UpdateTaskTriggerForm';
import {UITable} from '../../../main/components/UIComponents';


class TaskdefView extends React.Component {
 
  state = {
    // newDefvisible:false,
    // updateDefvisible:false,
    // updateTriggervisible:false,

    formVisible: false,
    actionType:null,
    record:null,
  }

  componentWillMount() {
    this.props.taskdefInit();
  }
  handleActionPress(record,actionType) {
    console.log('handleActionPress',actionType);

    if (actionType === 'taskdefUpdate') {
      this.setState({record,actionType,formVisible:'updateDef',});
    } else if(actionType === 'tasktriggerUpdate'){
      this.setState({record,actionType,formVisible:'updateTrigger',});
    } else if(actionType === 'taskdefDelete'){
      this.props.taskdefDelete(record);
    } else if(actionType === 'taskdefSync'){
      this.props.taskdefSync(record);
    } else if(actionType === 'taskdefTest'){
      this.props.taskdefTest(record);
    } else if(actionType === 'taskdefEnable'){
      this.props.taskdefEnable(record);
    }else if(actionType === 'taskdefDisable'){
      this.props.taskdefDisable(record);
    }
  }

  handleCreatePress(record,actionType) {
    this.setState({record,actionType,formVisible:'newDef'})
  }

 
  handleCancelPress = () => {
    this.setState({ formVisible:false,record:null,actionType:null });
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
    this.setState({ formVisible:false,record:null,actionType:null });
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

  renderNode = (text) => {
    let nodes = text.split(',');
    return nodes.map((ele) => {
      return ele.includes(':') ? 
        <Tag color='green' key={ele}>{ele}</Tag> : <Tag color='blue' key={ele}>{ele}</Tag>;
    });
  }

  renderTaskDefType = (text) => {
    let transferedText = global.Just.getDictValue(this.props.dictInfo.taskdef_taskdeftype,text)
    return transferedText;
  }

  renderTrigerType = (text) => {
    let transferedText = global.Just.getDictValue(this.props.dictInfo.tasktrigger_trigertype,text)
    console.log('renderTrigerType tasktrigger_trigertype',this.props.dictInfo.tasktrigger_trigertype)
    console.log('renderTrigerType text',text)
    return transferedText;
  }

  prepareMainTableData = () => {
    let dataSource = [];
    const columns = [
      { title: '定义编号', dataIndex: 'taskDefId', key: 'taskDefId'},
      { title: '定义名称', dataIndex: 'taskDefName', key: 'taskDefName',searcher: true},
      { title: '类型', dataIndex: 'taskDefType', key: 'taskDefType', render:this.renderTaskDefType},
      { title: '源节点', dataIndex: 'srcNode', key: 'srcNode',render:this.renderNode },
      { title: '目标节点', dataIndex: 'destNode', key: 'destNode',render:this.renderNode },
      { title: '目标路径', dataIndex: 'destPath', key: 'destPath' },
      { title: '生效起始时间', dataIndex: 'startTime', key: 'startTime' },
      { title: '源文件规则', dataIndex: 'srcFileRule', key: 'srcFileRule' },
      { title: '源路径', dataIndex: 'srcPath', key: 'srcPath' },
      { 
        title: '同步状态', dataIndex: 'syncStatus', key: 'syncStatus',render:this.renderSyncStatus
      },
      { 
        title: '状态', dataIndex: 'status', key: 'status', render:this.renderStatus 
      },
      { title: '描述', dataIndex: 'remark', key: 'remark' },
      { title: '操作', key: 'operation',  
        fixed: 'right',
        width: 230,
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleActionPress.bind(this,record,'taskdefUpdate')}>修改</a>
            <Divider type="vertical" />
            <Popconfirm title="确定要删除此任务?" onConfirm={this.handleActionPress.bind(this,record,'taskdefDelete')}  okText="是" cancelText="否">
              <a href="javascript:;">删除</a>
            </Popconfirm>
            <Divider type="vertical" />
            <Popconfirm title="确定同步此任务?" onConfirm={this.handleActionPress.bind(this,record,'taskdefSync')}  okText="是" cancelText="否">
              <a href="javascript:;">同步</a>
            </Popconfirm>
            <Divider type="vertical" />
            <Popconfirm title="确定测试此任务?" onConfirm={this.handleActionPress.bind(this,record,'taskdefTest')}  okText="是" cancelText="否">
              <a href="javascript:;">测试</a>
            </Popconfirm>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.handleActionPress.bind(this,record,record.status === 1 ?  'taskdefDisable' : 'taskdefEnable')}>{record.status === 1 ? '禁用' : '启用'}</a>
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
    return {
      columns,
      dataSource
    }
  }

  subTableRender = (record) => {
    let dataSource2 = [];
    const columns2 = [
      { title: '触发编号', dataIndex: 'trigerId', key: 'trigerId'},
      { title: '触发类型', dataIndex: 'trigerType', key: 'trigerType',render:this.renderTrigerType },
      { title: 'Cron表达式', dataIndex: 'cronCause', key: 'cronCause',searcher: true },
      { title: '时间间隔', dataIndex: 'interval', key: 'interval' },
      { title: '间隔单位', dataIndex: 'intervalUnit', key: 'intervalUnit' },
      { title: '备注', dataIndex: 'remark', key: 'remark' },
      { title: '操作', key: 'operation', 
        render: (text,record) => 
          <span>
            <a href="javascript:;" onClick={this.handleActionPress.bind(this,record,'tasktriggerUpdate')}>修改</a>
          </span> 
      },
    ];

    for (let j = 0; j < record.taskTrigger.length; j++) {
      dataSource2.push({
        key: `sTb${j}`,
        ...record.taskTrigger[j]
        
      })
    }
    return <UITable style={{width: 880}} title='任务定义触发' searchText={this.props.searchText} columns={columns2} dataSource={dataSource2} pagination={false} locale={{filterConfirm:'确定',filterReset:'重置',emptyText:'暂无数据'}} size='small'/>

  }

  
  render() {

    let columns = [],dataSource = [];

    if(this.props.taskdefList && this.props.taskdefList.length > 0 && this.props.dictInfo){
      ({columns,dataSource} = this.prepareMainTableData());
    }
    return (
      <Row>
        <Col span={24}>
          <div style={{marginBottom:'15px'}}>
            <Button type="primary" onClick={this.handleCreatePress.bind(this,null,'taskdeftasktriggerInsert')} >新建任务定义和触发</Button>
            {
              this.state.formVisible === 'newDef' ? (
                <NewTaskDefForm 
                  nodeInfo={this.props.sysnodeList}
                  dicts={this.props.dictInfo}
                  visible={true}
                  handleSubmit={this.handleSubmit}
                  handleCancelPress={this.handleCancelPress}/>
              ) : this.state.formVisible === 'updateDef' ? (
                <UpdateTaskDefForm 
                  record={this.state.record}
                  nodeInfo={this.props.sysnodeList}
                  dicts={this.props.dictInfo}
                  visible={true}
                  handleSubmit={this.handleSubmit}
                  handleCancelPress={this.handleCancelPress}/>
              ) : this.state.formVisible === 'updateTrigger' ? (
                <UpdateTaskTriggerForm  
                record={this.state.record}
                dicts={this.props.dictInfo}
                visible={true}
                handleSubmit={this.handleSubmit}
                handleCancelPress={this.handleCancelPress}/>
              ) : null
            }
            
           
           
          </div>
          <UITable
            searchText={this.props.searchText}
            title='任务定义'
            dataSource={dataSource}
            columns={columns}
            expandedRowRender={this.subTableRender}
            size='small' 
            scroll={{ x: 2200 }}/>
        </Col>
      </Row>
    );
  }

}
export default TaskdefView;
