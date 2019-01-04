import React from 'react';
import {Layout,Table } from 'antd';
import {PieChart} from '../../../main/components/UIComponents';

const {
  Sider, Content,
} = Layout;
class MonitorView extends React.Component {
  state = {};


  componentWillMount() {
    this.props.handleMonitorInit();
  }
  
  render() {
    global.Just.log('asdfasdf',this.props);
    const columns1 = [{
      title: '任务编号',
      dataIndex: 'taskId',
      key: 'taskId',
    }, {
      title: '任务定义编号',
      dataIndex: 'taskDefId',
      key: 'taskDefId',
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    }, {
      title: '源节点',
      dataIndex: 'srcNode',
      key: 'srcNode',
    }, {
      title: '源路径',
      dataIndex: 'scanPath',
      key: 'scanPath',
    }, {
      title: '任务选项',
      dataIndex: 'options',
      key: 'options',
    }, {
      title: '文件名',
      dataIndex: 'fileName',
      key: 'fileName',
    }];

    let columns2 = [{
      title: '任务编号',
      dataIndex: 'taskId',
      key: 'taskId',
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },{
      title: '分割份数',
      dataIndex: 'splitParts',
      key: 'splitParts',
    }];

    let dataSource1 = [],dataSource2 = [];

    if(this.props.task && this.props.task.length > 0){
      for(let i = 0 ; i < this.props.task.length; i++){
        dataSource1.push({
          key: i,
          taskId: this.props.task[i].task.taskId,
          taskDefId: this.props.task[i].task.taskDefId,
          status: this.props.task[i].task.status,
          srcNode: this.props.task[i].task.srcNode,
          scanPath: this.props.task[i].task.scanPath,
          options: this.props.task[i].task.options,
          fileName: this.props.task[i].task.fileName
        })
        for (let j = 0; j < this.props.task[i].subTask.length; j++) {
          
          dataSource2.push({
            key: j,
            taskId: this.props.task[i].subTask[j].taskId,
            status: this.props.task[i].subTask[j].status,
            splitParts: this.props.task[i].subTask[j].splitParts,
          })
        }
      }
    global.Just.log('jjjjajajajajja-->dataSource1',dataSource1);
    global.Just.log('jjjjajajajajja-->dataSource2',dataSource2);

    }
   
    
    const data = [{name: '有告警', value: 400}, {name: '正常运行', value: 300},
                {name: '无心跳', value: 300}, {name: '正在更新', value: 200}];

    return (
      <Layout className='content-layout'>
        <Content className='content-main'>
          <Table
            title={() => '任务状态'}
            dataSource={dataSource1}
            columns={columns1}
            expandedRowRender={() =>
              <Table columns={columns2} dataSource={dataSource2} pagination={false} />
            }
            />
        </Content>
        <Sider width={400} style={{background:' #FAFAFA'}}>
          <h3>节点状态</h3>
          <PieChart  data={data}/>
        </Sider>
      </Layout>
    );
  }

}
export default MonitorView;
