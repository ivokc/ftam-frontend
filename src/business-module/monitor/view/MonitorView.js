import React from 'react';
import { Badge,Progress,Row,Col } from 'antd';
import {UIPieChart,UITable} from '../../../main/components/UIComponents';


class MonitorView extends React.Component {
  state = {

    jjm:0
  };

  constructor() {
    super();
    this.renderStatus = this.renderStatus.bind(this);
    this.renderProgress = this.renderProgress.bind(this);
    this.prepareMainTableData = this.prepareMainTableData.bind(this);
    this.subTableRender = this.subTableRender.bind(this);
    this.preparePieData = this.preparePieData.bind(this);
  }
  componentWillMount() {
    this.props.handleMonitorInit();
  }

  renderStatus(text) {
    let transferedText = global.Just.getDictValue(this.props.dictInfo.task_status,text)
    switch (text) {
      case 0://创建
      return <Badge status="success" text={transferedText}/> ;
      case 1://传送中
      return <Badge status="processing" text={transferedText}/> ;
      case 2://暂停中
      return <Badge status="default" text={transferedText}/> ;
      case -1://发送失败
      return <Badge status="error" text={transferedText}/> ;
      default:
      return <span>text</span> ;
    }
  }

  renderProgress(text) {
    return <Progress percent={text} size="small" />
  }

  prepareMainTableData(){
    let dataSource = [];
    let columns = [
      {title: '任务编号',dataIndex: 'taskId',key: 'taskId'}, 
      {title: '源路径',dataIndex: 'scanPath',key: 'scanPath', searcher: true}, 
      {title: '源节点',dataIndex: 'srcNode',key: 'srcNode', searcher: true}, 
      {title: '创建时间',dataIndex: 'createTime',key: 'createTime', searcher: true}, 
      {
        title: '状态',dataIndex: 'status',key: 'status', 
        render: this.renderStatus,
        
        filters: this.props.dictInfo.task_status.items.map((ele) => ({text:ele.name,value:ele.code})),
        onFilter: (value,record) => value == record.status,
      },
      {title: '文件名',dataIndex: 'fileName',key: 'fileName',}, 
      {
        title: '文件大小',dataIndex: 'fileSize',key: 'fileSize', 
        sorter: (a, b) => a.fileSize - b.fileSize,
        sortDirections: ['descend', 'ascend']
      }, 
    ];
    for(let i = 0 ; i < this.props.task.length; i++){
      dataSource.push({
        key: `taskmTb${i}`,
        taskId: this.props.task[i].task.taskId,
        scanPath: this.props.task[i].task.scanPath,
        srcNode: this.props.task[i].task.srcNode,
        status: this.props.task[i].task.status,
        createTime: this.props.task[i].task.createTime,
        fileName: this.props.task[i].task.fileName,
        fileSize: this.props.task[i].task.fileSize,
        subTaskEntity: this.props.task[i].subTaskEntity
      })
    }
    return {
      columns,
      dataSource
    }

  }
 
  subTableRender(record,index) {
    let dataSource2 = [];
    let columns2 = [
      {title: '子任务编号',dataIndex: 'taskId',key: 'taskId'}, 
      {title: '目标节点',dataIndex: 'destNode',key: 'destNode',searcher: true}, 
      {title: '目标目录',dataIndex: 'destPath',key: 'destPath',searcher: true}, 
      {
        title: '状态',dataIndex: 'status',key: 'status',
        render: this.renderStatus,
        
        filters: this.props.dictInfo.task_status.items.map((ele) => ({text:ele.name,value:ele.code})),
        onFilter: (value,record) => value == record.status,
      }, 
      {title: '子任务传输百分比',dataIndex: 'transferPercent',key: 'transferPercent',render: this.renderProgress}, 
    ];

    for (let j = 0; j < record.subTaskEntity.length; j++) {
        
      dataSource2.push({
        key: `tasksTb${j}`,
        taskId: record.subTaskEntity[j].taskId,
        destNode: record.subTaskEntity[j].destNode,
        destPath: record.subTaskEntity[j].destPath,
        status: record.subTaskEntity[j].status,
        transferPercent: record.subTaskEntity[j].transferPercent,
      })
    }
    return <UITable searchText={this.props.searchText} columns={columns2} dataSource={dataSource2} pagination={false} locale={{filterConfirm:'确定',filterReset:'重置',emptyText:'暂无数据'}} size='small'/>

  }

  preparePieData(){
    const {sysnode_currentstatus} = this.props.dictInfo;
    let pieData = this.props.sysnode.map((ele, index) => {
      let name,color;
      name = global.Just.getDictValue(sysnode_currentstatus,ele.sysnodestatus);
      switch (ele.sysnodestatus) {
        case -2://无响应
          color = '#FF8042'
          break;
        case -1://无法连接
          color = '#FFBB28'
          break;
        case 0://GET_VERSIONMANAGE_LIST
          color = '#cccccc'
          break;
        case 1://有连接无响应
          color = '#0088FE'
          break;
        case 2://正常响应
          color = '#00C49F'
          break;
        default:
          break;
      }
      return {
          name,
          value:ele.sysnodenum,
          color
      }
    });
    return pieData;
  }


  render() {
    let columns = [],dataSource = [],pieData = [];

    if(this.props.task && this.props.task.length > 0 && this.props.dictInfo){
      ({columns,dataSource} = this.prepareMainTableData());

    }
  
    if (this.props.dictInfo && this.props.sysnode && this.props.sysnode.length > 0) {
      pieData = this.preparePieData();
    }
    
    return (
      <Row >
        <Col span={16}>
          <UITable
            title='任务状态'
            dataSource={dataSource}
            columns={columns}
            expandedRowRender={this.subTableRender}
            locale={{filterConfirm:'确定',filterReset:'重置',emptyText:'暂无数据'}}
            size='small'
            searchText={this.props.searchText}
            />
        </Col>
        <Col span={8}>
          <h3>节点状态</h3>
          <UIPieChart data={pieData} onPieClick={(obj) => this.props.history.push('sysnodeManage')}/>
        </Col>
      </Row>
      
    );
  }

}
export default MonitorView;
